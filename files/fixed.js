var fs = require('fs');
var configJson = require('./yicon/config.json');

configJson.login = {
    ssoType: 'ldap',
    adminList: ['admin']
};

fs.writeFileSync('./yicon/config.json', JSON.stringify(configJson, {}, 2), 'UTF-8');
