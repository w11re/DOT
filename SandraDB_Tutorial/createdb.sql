
drop database if exists  testJava ;

create database testJava;

use testJava;

create table roles( RoleID int NOT NULL auto_increment,
    RoleDesc VARCHAR(256) unique,
    PRIMARY KEY (RoleID, RoleDesc)
);

create table users(userID int NOT NULL auto_increment,
      firstName varchar(256) NOT NULL,
	  lastname varchar(256) NOT NULL,
	  age float,
	  email varchar(256) NOT NULL,
	  role int not null,
	  PRIMARY KEY (userID, email),
     FOREIGN KEY (role) REFERENCES roles(roleID)
);


create table courses( courseID int NOT NULL auto_increment,
        courseName varchar(256) NOT NULL,
		shortCourseName varchar(100) not null unique ,
		PRIMARY KEY (courseID, shortCourseName)
		);
		
create table studentenrolments(ID int not null auto_increment,
         userID int not null,
		 courseID int not null,
		 PRIMARY KEY (ID),
        FOREIGN KEY (userID) REFERENCES users(userID),
		FOREIGN KEY (courseID) REFERENCES courses(courseID)
);

