CREATE DATABASE users DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE users;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL UNIQUE,
  `pwd` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users` (`user`, `pwd`) VALUES ('admin', md5('admin'));

CREATE DATABASE iconfont DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
