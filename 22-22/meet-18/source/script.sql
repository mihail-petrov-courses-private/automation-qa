-- създаване на нова празна база данни
cReAtE DAtabase online_shop;

-- избираме база данни с която ще работи (схема)
USE online_shop;

-- правим нова таблица в която да пазим - данни за потребитери
CREATE TABLE td_users(
	username VARCHAR(256),
    password VARCHAR(256),
    email VARCHAR(256),
    age INT
);

-- (CREATE) - създаване на нов запис 
INSERT INTO td_users(username, password, email, age)
VALUES("mihailpetrov", "password", "mail@mihail-petrov.me", 30);

INSERT INTO td_users(username, password, email, age)
VALUES("todor", "password2", "mail@todor-petrov.me", 40);

INSERT INTO td_users(username, password, email, age)
VALUES("ivan", "password3", "mail@ivan-petrov.me", 50);

INSERT 
INTO td_users(username, password, email, age)
VALUES("pesho", "password4", "mail@pesho-ganchev.me", 55);

-- (READ) - четене на съществуваш запис от базата данни
SELECT email, age
FROM td_users;

-- (READ) - четене на контретна информация
SELECT *
FROM td_users
WHERE email = "mail@mihail-petrov.me";

SELECT *
FROM td_users
WHERE age >= 40;

SELECT *
FROM td_users
WHERE (age >= 40 AND username = "ivan");

SELECT *
FROM td_users
WHERE email LIKE '%-ganchev.me';

-- (UPDATE) - актуализация на един ред 
UPDATE td_users
SET age = 58
WHERE email = "mail@pesho-ganchev.me";

-- (UPDATE) - актуализация на всички редове
UPDATE td_users
SET age = 48;


-- (DELETE) - изтриване на един ред
DELETE 
FROM td_users
WHERE email = 'mail@pesho-ganchev.me';

-- (DELETE) - изтриване на всички редове
DELETE 
FROM td_users;

-- още една команда за изтриване на всички редове
TRUNCATE td_users;