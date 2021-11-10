CREATE DATABASE candy_store;
-- USE candy_store;

CREATE TABLE candies(
    id INT AUTO_INCREMENT NOT NULL,
    name varchar(100) NOT NULL,
    price DECIMAL NOT NULL,
    expiration DATE,
    isSalad TINYINT NOT NULL,
    date_registered DATE,
    date_created DATE,
    PRIMARY KEY (id) 
);