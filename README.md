

# FoodHub
FoodHub is Full Stack App for buy food from different restaurant (Mcdonalds , Pizza hut, .... )


App Build with Spring Framework in Back-End And React in Front-End 

![MicrosoftTeams-image](https://user-images.githubusercontent.com/44031876/118083773-218f6500-b385-11eb-9169-0d5db4a1e5e7.png)

![55](https://user-images.githubusercontent.com/44031876/118203508-d7a88c80-b421-11eb-956a-9713304fd160.gif)


1 Getting Started
```sh

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
```


2 Prerequisites

```sh
2.1 Node

You can Download from this link : 
https://nodejs.org/en/download/

2.2 Java JDK
https://www.oracle.com/java/technologies/javase-downloads.html

2.3 Integrated development environment I suggest intellij or Eclipse for backend and WebStorm Or Visual Studio Code For the front-end . 

Download intellij:
https://www.jetbrains.com/idea/download/

Download Eclipse:
https://www.eclipse.org/downloads

Download Webstorm
https://www.jetbrains.com/webstorm/download/#section=windows

Download Visual studio code:
https://code.visualstudio.com/download

2.4 Database Management i suggest MySql . 

Download MySql:
https://www.mysql.com/downloads/

```


3 Installing



3.1 Install the required Prerequisites
```sh
1- Open MySql Software 

    Run this code SQL on Query :
 ```
```sh 
    
    -- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: foodhub
-- ------------------------------------------------------
-- Server version	5.7.17-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hibernate_sequence`
--
CREATE SCHEMA IF NOT EXISTS `foodhub` DEFAULT CHARACTER SET utf8 ;
USE `foodhub` ;
--
-- Table structure for table `items_category`
--

DROP TABLE IF EXISTS items_category;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE items_category (
  id int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items_category`
--

INSERT INTO items_category VALUES (1,'Dishes'),(2,'Sandwiches'),(3,'Salads'),(4,'Drinks');

--
-- Table structure for table `items_type`
--

DROP TABLE IF EXISTS items_type;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE items_type (
  id int(11) NOT NULL,
  icon varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items_type`
--

INSERT INTO items_type VALUES (1,'Veg','success'),(2,'Chicks','warning'),(3,'Beef','danger'),(4,'Fish','info'),(5,'Other','muted');

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS order_items;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE order_items (
  id int(11) NOT NULL,
  price double DEFAULT NULL,
  quantity int(11) DEFAULT NULL,
  orderid int(11) DEFAULT NULL,
  restaurantitemid int(11) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY FKgw0ou6aya4sygrxioxl5ee43g (orderid),
  KEY FK749wphx7xiuhnlkfagq6ewb1k (restaurantitemid)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

INSERT INTO order_items VALUES (1,1.6,2,1,1),(2,3,1,1,1),(3,2,4,2,1),(4,6.7,2,3,2),(5,6.3,2,3,1),(6,6.7,1,7,3),(7,6.7,1,7,2),(8,6.3,2,7,1),(9,3.2,1,7,4),(10,6.7,1,8,3),(11,6.7,1,8,2),(12,6.3,2,8,1),(13,3.2,1,8,4),(14,6.7,1,9,3),(15,6.7,1,9,2),(16,6.3,2,9,1),(17,3.2,1,9,4),(18,6.7,1,10,3),(19,6.7,1,10,2),(20,6.3,2,10,1),(21,3.2,1,10,4),(22,6.7,1,11,3),(23,6.7,1,11,2),(24,6.3,2,11,1),(25,3.2,1,11,4),(26,6.7,1,12,3),(27,6.7,1,12,2),(28,6.3,2,12,1),(29,3.2,1,12,4),(30,6.3,1,13,9),(31,6.7,2,13,10),(32,6.7,1,13,11),(33,6.3,2,14,1),(34,6.7,2,14,2),(35,6.7,1,15,11),(36,3.2,1,15,14),(37,6.3,5,16,1),(38,6.7,3,16,2),(39,3.2,1,16,4),(40,3.2,1,16,5),(41,3.2,1,16,6),(42,7.5,2,16,7),(43,6.3,1,17,1),(44,6.7,2,17,2),(45,6.7,1,17,3),(46,6.3,1,18,1),(47,6,2,19,1),(48,6.7,2,19,2),(49,6,2,20,1),(50,6.7,3,20,1),(53,6.7,2,23,2),(54,6,1,23,1),(55,6.7,3,23,3),(56,6.3,1,24,9),(57,6.7,2,24,10),(58,6.7,1,24,11),(59,6,2,25,1),(60,6.7,2,25,2),(61,6.7,2,25,3);

--
-- Table structure for table `order_status`
--

DROP TABLE IF EXISTS order_status;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE order_status (
  id int(11) NOT NULL,
  icon varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_status`
--

INSERT INTO order_status VALUES (1,NULL,'Pending'),(2,NULL,'Preperation'),(3,NULL,'Delivery'),(4,NULL,'Delivered');

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS orders;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE orders (
  id int(11) NOT NULL,
  address varchar(255) DEFAULT NULL,
  created_on datetime DEFAULT NULL,
  instructions varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  orderstatusid int(11) DEFAULT NULL,
  restaurantid int(11) DEFAULT NULL,
  userid int(11) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY FKh4fqbjjdna7wlgfop3bn235yf (orderstatusid),
  KEY FK9t8m3u3j6g313pos0l8a70x04 (restaurantid),
  KEY FKpnm1eeupqm4tykds7k3okqegv (userid)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

INSERT INTO orders VALUES (1,'fairfield room 201','2021-05-12 22:00:12','WADWQ WQDWQD','2124',4,1,2),(2,'fairfield room 210','2021-05-12 22:05:12','WADWQ WQDWQD','21242',4,1,1),(3,'1DWQDWQD','2021-05-12 22:25:12','WQDQWD','1002',4,1,1),(9,'1DWQDWQD','2021-05-12 22:52:20','WQDQWD','1005',4,1,1),(8,'1DWQDWQD','2021-05-12 22:51:29','WQDQWD','1004',4,1,1),(7,'1DWQDWQD','2021-05-12 22:50:24','WQDQWD','1003',4,1,1),(10,'1DWQDWQD','2021-05-12 23:02:01','WQDQWD','1006',4,1,1),(11,'1DWQDWQD','2021-05-12 23:02:30','WQDQWD','1007',4,1,1),(12,'1DWQDWQD','2021-05-12 23:02:45','WQDQWD','1008',4,1,1),(13,'Fairfield, MUM bld 140 ','2021-05-12 23:04:03','room 210 front door','1000',1,2,1),(14,'Fairfield, MUM bld 140 ','2021-05-12 23:05:37','room 210 front door','1009',4,1,1),(15,'Fairfield, MUM bld 140 ','2021-05-12 23:24:18','room 210 front door','1001',1,2,1),(16,'Fairfield, MUM bld 140 ','2021-05-12 23:33:57','room 210 front door','1010',4,1,1),(17,'Fairfield, MUM bld 140 ','2021-05-13 16:27:38','room 210 front door','1011',4,1,1),(18,'Fairfield, MUM bld 140 ','2021-05-13 16:52:58','room 210 front door','1012',4,1,1),(19,'Fairfield, MUM bld 140 ','2021-05-13 16:56:34','room 210 front door','1013',4,1,1),(20,'wqdq','2021-05-13 19:10:25','wqdq','1014',4,1,14),(23,'1000 North Fourth St','2021-05-13 20:09:33','room 210 front door','1015',1,1,15),(24,'1000 North Fourth St','2021-05-13 20:12:37','room 210 front door','1002',1,2,15),(25,'Fairfield, MUM bld 140 ','2021-05-13 23:49:21','room 210 front door','1016',1,1,1);

--
-- Table structure for table `restaurant_items`
--

DROP TABLE IF EXISTS restaurant_items;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE restaurant_items (
  id int(11) NOT NULL,
  ingredients varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  portion varchar(255) DEFAULT NULL,
  price double DEFAULT NULL,
  itemscategoryid int(11) DEFAULT NULL,
  itemstypeid int(11) DEFAULT NULL,
  restaurantid int(11) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY FKdw79jy49y9cg1q59ndglmcm2p (itemscategoryid),
  KEY FKcjrvfm233icrf0ebdkapi1tug (itemstypeid),
  KEY FKgv50uadw62hr4xi7jo9xbm6uj (restaurantid)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_items`
--

INSERT INTO restaurant_items VALUES (1,'Ground Chicken, onion, and garlic over medium heat until well browned','Chicken Tikka Meal','Large Dish',6,1,2,1),(2,'Cook sausage, ground Chicken, onion, and garlic over medium heat until well browned','Chicken Fajita Meal','Large Dish',6.7,1,2,1),(3,'Cook sausage, ground Chicken, onion, and garlic over medium heat until well browned','Chicken Fajita Meal','Large Dish',6.7,1,2,1),(4,'Cook sausage, ground Chicken, onion, and garlic over medium heat until well browned','Chicken Fajita','30 cm',3.2,2,2,1),(5,'Cook sausage, ground Beef, onion, and garlic over medium heat until well browned','Steak Fajita','30 cm',3.2,2,3,1),(6,'Cook sausage, ground Beef, onion, and garlic over medium heat until well browned','Steak Submarin','30 cm',3.2,2,3,1),(7,'Tomato, Corn, Tuna, Crab, Fish','Seafood Salad','Large Dish for Two',7.5,3,4,1),(9,'Ground Chicken, onion, and garlic over medium heat until well browned','Grilled Chicken Meal','Large Dish',6.3,1,2,2),(10,'Cook sausage, ground Chicken, onion, and garlic over medium heat until well browned','Chicken Submarine Meal','Large Dish',6.7,1,2,2),(11,'Cook sausage, ground Chicken, onion, and garlic over medium heat until well browned','Chicken Fajita Meal','Large Dish',6.7,1,2,2),(12,'Cook sausage, ground Chicken, onion, and garlic over medium heat until well browned','Chicken Crispy','30 cm',3.2,2,2,2),(13,'Cook sausage, ground Beef, onion, and garlic over medium heat until well browned','Steak Fajita','30 cm',3.2,2,3,2),(14,'Cook sausage, ground Beef, onion, and garlic over medium heat until well browned','Steak Submarine','30 cm',3.2,2,3,2);

--
-- Table structure for table `restaurant_offers`
--

DROP TABLE IF EXISTS restaurant_offers;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE restaurant_offers (
  id int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  create_on datetime DEFAULT NULL,
  expired_on datetime DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  restaurantsid int(11) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY FKbbehaf80hndnlfl8jreabg1pn (restaurantsid)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_offers`
--

INSERT INTO restaurant_offers VALUES (1,'CS425','2021-01-01 00:00:00','2022-01-01 00:00:00','Get 50% OFF on your first User',1),(2,'CS450','2021-01-01 00:00:00','2022-01-01 00:00:00','Get 20% OFF Today',2),(3,'CS500','2021-01-01 00:00:00','2022-01-01 00:00:00','Get 10% OFF MUM Students',2);

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS restaurants;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE restaurants (
  id int(11) NOT NULL,
  address varchar(255) DEFAULT NULL,
  contact varchar(255) DEFAULT NULL,
  coverimage varchar(255) DEFAULT NULL,
  deliveredtime varchar(255) DEFAULT NULL,
  description varchar(255) DEFAULT NULL,
  haschicken bit(1) DEFAULT NULL,
  hasmeat bit(1) DEFAULT NULL,
  hasveg bit(1) DEFAULT NULL,
  hasfish bit(1) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  profileimage varchar(255) DEFAULT NULL,
  smalldescription varchar(45) DEFAULT NULL,
  PRIMARY KEY (id)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

INSERT INTO restaurants VALUES (1,'Iowas, fairfield 6th street','234-56789','Banner1.jpg','15-20 min','Classic Burger Joint: Secrets Revealed. It\'s become the face of the Lebanese-born burger chain serving up delicious flame-grilled burgers and seasoned fries','','','','\0','Classic Burger','Burger.jpg',' Burger,Sandwich, Salad , Drinks'),(2,'Iowas, fairfield 6th street',' +1 01234-56789, +1 01234-56789','Banner2.jpg','10-20 min','Classic Burger Joint: Secrets Revealed. It\'s become the face of the Lebanese-born burger chain serving up delicious flame-grilled burgers and seasoned fries','','','','\0','Roadster','sand.jpg',' Sandwich, Salad , Drinks'),(3,'Iowas, fairfield 6th street',' +1 01234-56789, +1 01234-56789','Banner3.jpg','30-40 min','Classic Burger Joint: Secrets Revealed. It\'s become the face of the Lebanese-born burger chain serving up delicious flame-grilled burgers and seasoned fries','','','','\0','Pizza Nini','Pizza.jpg',' Vegi Pizza,All Pizzza,  Drinks'),(4,'Iowas, fairfield 6th street',' +1 01234-56789, +1 01234-56789','Banner4.jpg','30-40 min','Classic Burger Joint: Secrets Revealed. It\'s become the face of the Lebanese-born burger chain serving up delicious flame-grilled burgers and seasoned fries','','','','\0','Bite me','Indian.jpg','Healthy food, Juices');

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS users;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE users (
  id int(11) NOT NULL,
  address varchar(255) DEFAULT NULL,
  email varchar(255) DEFAULT NULL,
  fullname varchar(255) DEFAULT NULL,
  instructions varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  profileimage varchar(255) DEFAULT NULL,
  username varchar(255) DEFAULT NULL,
  mobile varchar(255) DEFAULT NULL,
  restaurant_id int(11) DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY UK_r43af9ap4edm43mmtq01oddj6 (username)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

INSERT INTO users VALUES (1,'Fairfield, MUM bld 140 ','rami.tl@hotmail.com','rami','room 210 front door','$2a$10$RfGoQbp9Q5OI4LNBoXO.suQCuGxMT/dnIqgC6g35PTxf60x1TIjF6',NULL,'user','213213',1),(2,NULL,NULL,NULL,NULL,'$2a$10$.J5fdM7YNK8UXRQIKt993.PEjR1AYjkQxKGp27vBKGQTrPi4e5I3m',NULL,'admin',NULL,NULL),(3,NULL,NULL,NULL,NULL,'$2a$10$67H.hLUA9cf1c9JGjRO/EOaYz3grHJPM/zYoPzIPWy11O8F/fe8Ma',NULL,'test',NULL,NULL),(4,NULL,NULL,NULL,NULL,'$2a$10$BgBAEDkjIEzZDxrH4tGqEOzFpmfC0jNnDFcbZNO.iZ49Ual30uDku',NULL,'user1',NULL,NULL),(5,NULL,NULL,NULL,NULL,'$2a$10$jUJoV.dy0vmHXFhoM/JJZ.O.gBbWPdThwSF.Vli4Ze4bUl1DhEoKa',NULL,'rami',NULL,NULL),(6,NULL,NULL,NULL,NULL,'$2a$10$8pJnOtGTwYIMr9Y3DiLqeexLzUUB3f/xxq2zS/P0Ga2E06Js8hz3S',NULL,'usertemp',NULL,NULL),(7,NULL,NULL,NULL,NULL,'$2a$10$uBJ41Pbdrr81YOsfpoHLgOhDm1A5nyynSyV2Jn1x1gcqZRhosjy.e',NULL,'use111r',NULL,NULL),(8,NULL,NULL,NULL,NULL,'$2a$10$7V5rnHILGFPCZXmeH7zzo.D3W8sJvx7EeVBBtd/MYMKYmsUYKk.d.',NULL,'user23',NULL,NULL),(9,NULL,NULL,NULL,NULL,'$2a$10$qb.R/z0tx/CPp97gclqLnePbA/zluw3i0McBcBdaMR.vvgOgDIviW',NULL,'userg',NULL,NULL),(10,'12dwaf qef ewf','fewe','seraj','ewfewf','$2a$10$uDuAXWPpBynYhbXcK9CDuObBqKXXJJA18dMJJEzmvWUtLtU6L20OO',NULL,'seraj','2131231',NULL),(11,'','','','','$2a$10$gII.7bIqOu.zVw65quztNOhD/H5xoQaFGGCVBVfGMGUUlzOFaMf5G',NULL,'user88','',NULL),(12,'qwdwqd','wqdfqw@asd.com','awdqew','wqdqw','$2a$10$0pk0rG1tUsuZB27F9qsZveExbUdkC8tJnA0uCgsBYU1gFFYBa/pqu',NULL,'userewf','12313',NULL),(13,'wwqd','qwdwqd@wqd.com','wqd','','$2a$10$DcnJrZdpfuE7XqC43DnqaOHqzh/TCPywclkHPxrjzUgBqakWXcxWi',NULL,'usermmm','213131',NULL),(14,'wqdq','rami.tl@hotmail.com','wqeqw','wqdq','$2a$10$5aythAaCQyBIGu4.4rl9cOFewJ1vYklG5nLtVZNwtTcCuFbdJXFIO',NULL,'user123','qwdwq',NULL),(15,'1000 North Fourth St','rami.tl@hotmail.com','Ahmad Rami Hisham El Tal','room 210 front door','$2a$10$EUWs5zi/Iram3aVmlxvXKOFTgFizrY8TFB7GwpfoV3h0.3bXLs2eu',NULL,'ramitl','6418191382',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed

```

```sh
2- Import the back-end and go to src\main\resources\application.properties
-   In application.properties you should replace 
    spring.datasource.username=YOUR USERNAME
    spring.datasource.password=YOUR PASSWORD
-After that you can run the project 

3- - Import the front-end and run :
-   npm install     [for install all the requirement library ]
-   npm start     [for strat the project ]
-   

    
```

3.2 Some Account For Testing.

```sh

//				Admin Of Restaurant       => login :User     Passwrod : User   
                     And you can signup for check the client side.
```

4 Project Team

```sh
Rami ElTal   612408
Ayoub Lachhab    611939
Andy Nhut Tran   
Anderson Arbeláez
Mohamed Gaber Mohamed Abdelgawad Serageldin   611026
```

5 How To Install the application

```sh
https://youtu.be/UCtDLcTTwzw
```


6 Demonstration of the application
```sh
https://youtu.be/4PV6U6haN4k
```

7 Duration of work

```sh
4 days
```

8 Special Thanks

```sh
Special Thanks for our professor who did a lot of effort to make this course easy for us and we can see this from on this project, which we learned with him a lot of stuff who help us on Career.

Special Thanks Also for the security who He uttered various expressions of racism and give fine for the reason of remove the mask during taking this picture .

```
![WhatsApp Image 2021-05-13 at 17 40 30](https://user-images.githubusercontent.com/44031876/118215590-68d62e00-b437-11eb-8122-becf485e6a8a.jpeg)
```sh
Wich make this picture is so expensive 😊 😊 However we were very happy to finish this project on very short time.
```
9 Back-End Github 

Back-End :https://github.com/andersonArias/foodhub

Front-End :https://github.com/ramital/FoodHubClient

```sh
Copyrights Maharishi international university ©2021 All Rights Reserved
```
