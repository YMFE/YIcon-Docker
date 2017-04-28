import ldap from 'ldapjs';
import Q from 'q';

import Sequelize from 'sequelize';
import config from '../../config';

const {
    model
} = config;

const sequelize = new Sequelize('users', model.username, model.password, {
    port: model.port,
    host: model.host,
    define: {
        charset: 'utf8',
        timestamps: false
    },
    logging: __DEVELOPMENT__ ?
        logger.info.bind(logger) : false
});

sequelize.authenticate().then(() => logger.info('Connection has been established successfully.')).catch(err => logger.error('Unable to connect to the database:', err));

function* ldapQuery(username, password) {
    const deferred = Q.defer();
    sequelize.query(`SELECT * FROM users WHERE user='${username}' and pwd=md5('${password}')`, {
        type: sequelize.QueryTypes.SELECT
    }).then((results) => {
        deferred.resolve(!!results && !!results.length);
    }).catch((err) => {
        deferred.resolve(false);
    });
    return deferred.promise;
}


export function* getLdapAuth(next) {
    const {
        username,
        password
    } = this.param;

    const isValid = yield ldapQuery(username, password);

    this.state.respond = {
        isValid
    };

    yield next;
}
