DROP DATABASE IF EXISTS tyrell_corp_db;
CREATE database tyrell_corp_db;

USE tyrell_corp_db;

CREATE TABLE departments (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);
    
CREATE TABLE roles (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(11, 2),
    department_id INT NOT NULL
);


CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	first_name varchar(30) NOT NULL,
	last_name varchar(30) NOT NULL,
	role_id INT NOT NULL,
	manager_id INT NULL,
    FOREIGN KEY (role_id)
		REFERENCES role(id)
        ON DELETE CASCADE,
	FOREIGN KEY (manager_id)
		REFERENCES employee(id)
        ON DELETE CASCADE
);


