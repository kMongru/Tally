-- DROP TABLE IF EXISTS locationData.Location;
-- DROP TABLE IF EXISTS locationData.LocationParts;

CREATE TABLE if not exists locationData.Location (
	locID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    lat varchar(255) NOT NULL,
    lon varchar(255) NOT NULL,
    addr varchar(255) NOT NULL,
    picture varchar(255)
);

CREATE TABLE if not exists locationData.LocationParts (
	partID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	locID int NOT NULL,
    name VARCHAR(255) NOT NULL,
    capacity int,
    picture VARCHAR(255),
    descrip VARCHAR(512)
);

CREATE TABLE if not exists locationData.PartsToTypes (
	partID int NOT NULL,
    typeID int NOT NULL,
    PRIMARY KEY (partID, typeID)
);

CREATE TABLE if not exists locationData.PartTypes (
	typeID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    icon varchar(255) NOT NULL
);

CREATE TABLE if not exists locationData.CountPeople (
	partID int NOT NULL,
    ts TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ctr int NOT NULL,
    PRIMARY KEY (partID, ts)
);