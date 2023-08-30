-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: advjava
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `food_order`
--

DROP TABLE IF EXISTS `food_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `delivered_time` datetime(6) DEFAULT NULL,
  `order_time` datetime(6) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  `status_update_date` datetime(6) DEFAULT NULL,
  `total_price` double DEFAULT NULL,
  `address_id` int NOT NULL,
  `customer_id` int NOT NULL,
  `deliveryboy_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKaxfkbyabvdyd8stfbnpkexejv` (`address_id`),
  KEY `FKowfc5v7sacuk4vsufbghho271` (`customer_id`),
  KEY `FKers3pg2mv7bk36shtxc7t5qwj` (`deliveryboy_id`),
  CONSTRAINT `FKaxfkbyabvdyd8stfbnpkexejv` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
  CONSTRAINT `FKers3pg2mv7bk36shtxc7t5qwj` FOREIGN KEY (`deliveryboy_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKowfc5v7sacuk4vsufbghho271` FOREIGN KEY (`customer_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_order`
--

LOCK TABLES `food_order` WRITE;
/*!40000 ALTER TABLE `food_order` DISABLE KEYS */;
INSERT INTO `food_order` VALUES (1,'2023-03-08 22:59:52.457670','2023-03-08 22:59:52.457670','READY','2023-03-08 23:02:07.827140',200,61,3,NULL),(2,'2023-03-09 10:49:22.061817','2023-03-09 10:49:22.061817','READY','2023-03-09 10:51:03.563921',900,61,3,NULL),(3,'2023-03-09 11:52:08.145281','2023-03-09 11:52:08.145281','PACKING','2023-03-09 11:54:29.238003',250,62,9,NULL),(4,'2023-03-09 12:55:05.666206','2023-03-09 12:55:05.666206','READY','2023-03-09 12:55:41.014482',350,63,10,NULL),(5,'2023-03-09 13:17:37.377870','2023-03-09 13:17:37.377870','ACCEPTED','2023-03-09 15:07:43.087844',8600,61,3,NULL),(6,'2023-03-09 15:05:46.002611','2023-03-09 15:05:46.002611','READY','2023-03-09 15:07:55.341677',1150,64,11,NULL),(7,'2023-03-09 20:45:04.942418','2023-03-09 20:45:04.942418','PLACED',NULL,1250,61,3,NULL);
/*!40000 ALTER TABLE `food_order` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-10 16:12:23