CREATE DATABASE garage;

CREATE TABLE brand (
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE 
);

CREATE TABLE vehicule (
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    model VARCHAR(50) NOT NULL,
    price DECIMAL(7, 2) UNSIGNED NOT NULL,
    photo VARCHAR(50),
    brand_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (brand_id) REFERENCES brand(id)
);

CREATE TABLE options (
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE vehicule_option (
    vehicule_id TINYINT UNSIGNED,
    option_id TINYINT UNSIGNED,
    FOREIGN KEY (vehicule_id) REFERENCES vehicule(id),
    FOREIGN KEY (option_id) REFERENCES options(id),
    PRIMARY KEY (vehicule_id, option_id)
);

CREATE TABLE roles (
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE user (
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(150) NOT NULL,
    roles_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (roles_id) REFERENCES roles(id)
);

INSERT INTO brand (id, name) VALUES
    (NULL, 'Mercedes'),
    (NULL, 'Bmw'),
    (NULL, 'Audi'),
    (NULL, 'Renault'),
    (NULL, 'Citroen'),
    (NULL, 'Peugeot'),
    (NULL, 'Jaguar');

INSERT INTO vehicule (id, model, price, photo, brand_id) VALUES
    (NULL, 'A6', 4200, 'audia6.png', 3),
    (NULL, 'Serie 2', 12000, 'BMWSerie2.png', 2),
    (NULL, 'Classe G', 37000, 'ClasseG.jpeg', 1),
    (NULL, '3008', 10000, 'Peugeot3008.jpeg', 6),
    (NULL, 'Mégane', 2100, 'Megane.jpg', 4),
    (NULL, 'C1', 5500, 'C1.jpg', 5),
    (NULL, '208', 6000, 'c208.jpg', 6),
    (NULL, 'F-type', 8000, 'Ftype.jpg', 7);

INSERT INTO options (id, name) VALUES
    (NULL, 'Climatisation'), 
    (NULL, 'Système de démarrage sans clé'),
    (NULL, 'Freinage d’urgence autonome'),
    (NULL, 'Régulateur de vitesse'),
    (NULL, 'Toit ouvrant'),
    (NULL, 'Intérieur en cuir'),    
    (NULL, 'Volant multifonctions'),
    (NULL, 'Surveillance des angles morts'),
    (NULL, 'Assistant de stationnement automatique'),
    (NULL, 'Rétroviseurs électriques'),
    (NULL, 'Sièges chauffants'),
    (NULL, 'Park assist');

INSERT INTO vehicule_option (vehicule_id, option_id) VALUES
    (1, 1), (1, 2), (1, 5), (1, 6),
    (2, 11), (2, 7), (2, 6),
    (3, 7), (3, 2), (3, 10), (3, 4),
    (4, 4), (4, 1), (4, 3),
    (5, 5), (5, 1), (5, 10),
    (6, 3), (6, 5), (6, 7),
    (7, 4), (7, 8), (7, 2),
    (8, 11), (8, 6), (8, 7);

INSERT INTO roles (id, name) VALUES
    (NULL, 'admin'),
    (NULL, 'user');

INSERT INTO user (id, email, password, roles_id) VALUES
    (NULL, 'admin@admin.fr', '$argon2i$v=19$m=16,t=2,p=1$OHpydVVLV3RXMUVrM0VmVg$pK6c1T4VqzFlRLaUfj0tHw', 1),
    (NULL, 'user@user.com', '$argon2i$v=19$m=16,t=2,p=1$OHpydVVLV3RXMUVrM0VmVg$pK6c1T4VqzFlRLaUfj0tHw', 2);
