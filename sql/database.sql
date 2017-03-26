/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.7.12-log : Database - lianlian
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`lianlian` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `lianlian`;

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Tel` int(11) DEFAULT NULL,
  `Sex` varchar(255) NOT NULL,
  `Profile` varchar(255) DEFAULT NULL,
  `Birthday` date DEFAULT NULL,
  `Sign` varchar(255) DEFAULT NULL COMMENT '签名',
  `City` varchar(255) DEFAULT NULL,
  `Job` varchar(255) DEFAULT NULL COMMENT '职业',
  `Constellation` varchar(255) DEFAULT NULL COMMENT '星座',
  `EmotionalStatus` int(11) DEFAULT NULL,
  `Height` int(11) DEFAULT NULL COMMENT '身高',
  `LastLoginTime` datetime DEFAULT NULL COMMENT '最近登录时间',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
