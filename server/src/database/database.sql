CREATE DATABASE	todoApp;

CREATE TABLE todos
(
	todo_id SERIAL PRIMARY KEY,
	title VARCHAR(25),
	description VARCHAR(25)
);

INSERT INTO todos
	(title,description)
VALUES('task1', 'first task description')
,
('task 2', 'second task description');
