-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema foodhub
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema foodhub
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `foodhub` DEFAULT CHARACTER SET utf8 ;
USE `foodhub` ;

-- -----------------------------------------------------
-- Table `foodhub`.`restaurants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foodhub`.`restaurants` (
                                                       `id` INT NOT NULL AUTO_INCREMENT,
                                                       `name` NVARCHAR(100) NOT NULL,
                                                       `description` NVARCHAR(100) NULL,
                                                       `address` NVARCHAR(200) NULL,
                                                       `hasveg` BOOLEAN NOT NULL,
                                                       `haschicken` BOOLEAN NOT NULL,
                                                       `hasmeat` BOOLEAN NOT NULL,
                                                       `hasfish` BOOLEAN NOT NULL,
                                                       `contact` NVARCHAR(200) NULL,
                                                       `deliveredtime` NVARCHAR(100) NULL,
                                                       `coverimage` NVARCHAR(200) NULL,
                                                       `profileimage` NVARCHAR(200) NULL,
                                                       smalldescription varchar(45) DEFAULT NULL,
                                                       PRIMARY KEY (`id`))
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foodhub`.`items_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foodhub`.`items_category` (
                                                          `id` INT NOT NULL AUTO_INCREMENT,
                                                          `name` NVARCHAR(100) NOT NULL,
                                                          PRIMARY KEY (`id`))
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foodhub`.`items_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foodhub`.`items_type` (
                                                      `id` INT NOT NULL AUTO_INCREMENT,
                                                      `name` NVARCHAR(100) NOT NULL,
                                                      `icon` NVARCHAR(50) NULL,
                                                      PRIMARY KEY (`id`))
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foodhub`.`restaurant_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foodhub`.`restaurant_items` (
                                                            `id` INT NOT NULL AUTO_INCREMENT,
                                                            `restaurantid` INT NOT NULL,
                                                            `name` NVARCHAR(100) NOT NULL,
                                                            `price` DECIMAL(2) NOT NULL,
                                                            `portion` NVARCHAR(100) NULL,
                                                            `ingredients` NVARCHAR(200) NULL,
                                                            `itemscategoryid` INT NOT NULL,
                                                            `itemstypeid` INT NOT NULL,
                                                            PRIMARY KEY (`id`),
                                                            CONSTRAINT `fk_items_restaurants`
                                                                FOREIGN KEY (`restaurantid`)
                                                                    REFERENCES `foodhub`.`restaurants` (`id`)
                                                                    ON DELETE NO ACTION
                                                                    ON UPDATE NO ACTION,
                                                            CONSTRAINT `fk_restaurant_items_items_category1`
                                                                FOREIGN KEY (`itemscategoryid`)
                                                                    REFERENCES `foodhub`.`items_category` (`id`)
                                                                    ON DELETE NO ACTION
                                                                    ON UPDATE NO ACTION,
                                                            CONSTRAINT `fk_restaurant_items_items_type1`
                                                                FOREIGN KEY (`itemstypeid`)
                                                                    REFERENCES `foodhub`.`items_type` (`id`)
                                                                    ON DELETE NO ACTION
                                                                    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foodhub`.`restaurant_offers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foodhub`.`restaurant_offers` (
                                                             `id` int NOT NULL AUTO_INCREMENT,
                                                             `name` varchar(100) NOT NULL,
                                                             `code` varchar(100) NULL,
                                                             `createdon` date NOT NULL,
                                                             `expiredon` date NOT NULL,
                                                             `restaurantsid` int NOT NULL,
                                                             PRIMARY KEY (`id`),
                                                             KEY `fk_restaurant_offers_restaurants1` (`restaurantsid`),
                                                             CONSTRAINT `fk_restaurant_offers_restaurants1`
                                                                 FOREIGN KEY (`restaurantsid`) REFERENCES `restaurants` (`id`)
                                                                     ON DELETE NO ACTION
                                                                     ON UPDATE NO ACTION
) ENGINE=InnoDB

-- -----------------------------------------------------
-- Table `foodhub`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foodhub`.`users` (
                                                 `id` INT NOT NULL AUTO_INCREMENT,
                                                 `username` NVARCHAR(100) NOT NULL,
                                                 `password` NVARCHAR(200) NOT NULL,
                                                 `email` NVARCHAR(100) NOT NULL,
                                                 `fullname` NVARCHAR(200) NOT NULL,
                                                 `profileimage` NVARCHAR(100) NULL,
                                                 `address` NVARCHAR(200) NULL,
                                                 `instructions` NVARCHAR(200) NULL,
                                                 restaurant_id int(11) DEFAULT NULL,
                                                 PRIMARY KEY (`id`))
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foodhub`.`order_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foodhub`.`order_status` (
                                                        `id` INT NOT NULL AUTO_INCREMENT,
                                                        `name` NVARCHAR(100) NOT NULL,
                                                        `icon` NVARCHAR(100) NULL,
                                                        PRIMARY KEY (`id`))
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foodhub`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foodhub`.`orders` (
                                                  `id` INT NOT NULL AUTO_INCREMENT,
                                                  `createdon` DATE NOT NULL,
                                                  `number` NVARCHAR(50) NOT NULL,
                                                  `address` NVARCHAR(200) NULL,
                                                  `instructions` VARCHAR(200) NULL,
                                                  `restaurantid` INT NOT NULL,
                                                  `userid` INT NOT NULL,
                                                  `orderstatusid` INT NOT NULL,
                                                  PRIMARY KEY (`id`),
                                                  CONSTRAINT `fk_orders_restaurants1`
                                                      FOREIGN KEY (`restaurantid`)
                                                          REFERENCES `foodhub`.`restaurants` (`id`)
                                                          ON DELETE NO ACTION
                                                          ON UPDATE NO ACTION,
                                                  CONSTRAINT `fk_orders_users1`
                                                      FOREIGN KEY (`userid`)
                                                          REFERENCES `foodhub`.`users` (`id`)
                                                          ON DELETE NO ACTION
                                                          ON UPDATE NO ACTION,
                                                  CONSTRAINT `fk_orders_order_status1`
                                                      FOREIGN KEY (`orderstatusid`)
                                                          REFERENCES `foodhub`.`order_status` (`id`)
                                                          ON DELETE NO ACTION
                                                          ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foodhub`.`order_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foodhub`.`order_items` (
                                                       `id` INT NOT NULL AUTO_INCREMENT,
                                                       `orderid` INT NOT NULL,
                                                       `restaurantitemid` INT NOT NULL,
                                                       `price` DECIMAL(2) NOT NULL,
                                                       `quantity` INT NOT NULL,
                                                       PRIMARY KEY (`id`),
                                                       CONSTRAINT `fk_order_items_orders1`
                                                           FOREIGN KEY (`orderid`)
                                                               REFERENCES `foodhub`.`orders` (`id`)
                                                               ON DELETE NO ACTION
                                                               ON UPDATE NO ACTION,
                                                       CONSTRAINT `fk_order_items_restaurant_items1`
                                                           FOREIGN KEY (`restaurantitemid`)
                                                               REFERENCES `foodhub`.`restaurant_items` (`id`)
                                                               ON DELETE NO ACTION
                                                               ON UPDATE NO ACTION)
    ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;