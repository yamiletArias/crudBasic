CREATE DATABASE dblibros;
USE dblibros;

CREATE TABLE libros (
	id 			INT AUTO_INCREMENT PRIMARY KEY,
	titulo		VARCHAR(100) NOT NULL,
	autor		VARCHAR(80) NOT NULL,
	genero		VARCHAR(50),
	precio		DECIMAL(7,2) NOT NULL
) ENGINE=INNODB;

INSERT INTO libros(titulo, autor, genero, precio) VALUES
	('Cien años de soledad', 'Gabriel García Márquez', 'Realismo mágico', 18.50),
	('1984', 'George Orwell', 'Distopía', 15.00);

SELECT * FROM libros;
