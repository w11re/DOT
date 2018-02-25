CREATE DATABASE DOT;
SHOW DATABASES;
USE DOT;

CREATE TABLE userProfile
(
   userID       int NOT NULL AUTO_INCREMENT,
   firstName    varchar(256) NOT NULL,
   lastname     varchar(256) NOT NULL,
   email        varchar(256) NOT NULL UNIQUE,
   PRIMARY KEY(userID, email)
);

CREATE TABLE tests
(
   TestID      int NOT NULL AUTO_INCREMENT,
   testType    int,
   FOREIGN KEY(testType) REFERENCES testType(TestTypeID),
   Passage     VARCHAR(2000),
   PRIMARY KEY(TestID)
);


CREATE TABLE testType
(
   TestTypeID    int NOT NULL AUTO_INCREMENT,
   TypeDesc      VARCHAR(256) NOT NULL,
   PRIMARY KEY(TestTypeID)
);

SHOW TABLES;
DESC testType;

CREATE TABLE scores
(
   ScoresID    int NOT NULL AUTO_INCREMENT,
   userID      int,
   testWPM     int,
   testID      int,
   FOREIGN KEY(testID) REFERENCES tests(TestID),
   FOREIGN KEY(userID) REFERENCES userProfile(userID),
   PRIMARY KEY(ScoresID)
);

DROP TABLE scores;
SHOW TABLES;

DESC scores;