CREATE DATABASE bank_of_tomorow;

USE bank_of_tomorow;

CREATE TABLE td_users (
	
    -- първичен ключ на таблицата
    -- колонка с уникална числова стойност
	id INT PRIMARY KEY AUTO_INCREMENT,

	first_name VARCHAR(150)  NOT NULL,
    last_name VARCHAR(150)  NOT NULL,
    extra_name VARCHAR(150),
    address VARCHAR(150)  NOT NULL,
    phone VARCHAR(10)  NOT NULL,
    email VARCHAR(150)  NOT NULL,
    
    -- 
    ocupation_id INT NOT NULL,
    department_id INT NOT NULL
);

-- премахване на таблица
DROP TABLE td_users;


CREATE TABLE td_departments(
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(150)
);

TRUNCATE TABLE td_departments;

INSERT INTO td_departments(title) VALUES('IT');
INSERT INTO td_departments(title) VALUES('Loan');
INSERT INTO td_departments(title) VALUES('Risk');

SELECT * FROM td_departments;

ALTER TABLE td_departments
ADD COLUMN is_active INT DEFAULT 1;

CREATE TABLE td_ocupations(
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(150)
);

DELETE FROM td_ocupations;

INSERT INTO td_ocupations(title) VALUES('Operator');
INSERT INTO td_ocupations(title) VALUES('Developer');
INSERT INTO td_ocupations(title) VALUES('Accountent');

SELECT * FROM td_ocupations;

INSERT INTO td_users
(first_name, last_name, extra_name, address, phone, email, ocupation_id, department_id)
VALUES("Mihail", "Petrov", "Todorov", "Plovdiv", "0886585858", "mail@mail.bg", 1, 2);

SELECT * 
FROM td_users;

DELETE FROM td_users;
TRUNCATE TABLE td_users;


-- ИСКАМ ДА ПОКАЖА ЦЯЛАТА ИНФОРМАЦИЯ ЗА ЕДИН СЛУЖИТЕЛ
-- кой е той
-- къде работи
-- какво работиalter

SELECT 
	a.first_name, 
    a.last_name,
    a.extra_name,
    a.address,
    a.phone,
    a.email,
    td_departments.title AS department_name,
    td_ocupations.title AS ocupation_name
FROM td_users AS a
	INNER JOIN td_departments ON a.department_id = td_departments.id
    INNER JOIN td_ocupations ON a.ocupation_id = td_ocupations.id
WHERE td_departments.is_active = 0


-- таблица със заплатите на месечна база
CREATE TABLE td_salaries(
	id INT PRIMARY KEY AUTO_INCREMENT,
    month INT,
    amount DECIMAL,
    user_id INT
)

-- заявки за промяна на структура на таблица (ALTER)
ALTER TABLE td_salaries
ADD amount_gross DECIMAL;

ALTER TABLE td_salaries
ADD amount_net DECIMAL;

--
SELECT id, month, user_id, amount, amount_gross FROM td_salaries