-- Create users table
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    personalDocument varchar(14) NOT NULL,
    birthday DATE NOT NULL,
    password varchar(200),
    PRIMARY KEY (id),
    CONSTRAINT UC_users_email UNIQUE (email),
    CONSTRAINT UC_users_personalDocument UNIQUE (personalDocument)
);

-- Create news table
CREATE TABLE news (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    relatedItems text NOT NULL,
    image varchar(255) NOT NULL,
    noticeLink varchar(255) NOT NULL,
    subtitle varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
