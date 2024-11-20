DROP DATABASE IF EXISTS garage;

    CREATE DATABASE garage;

    CREATE TABLE garage.brand(
        id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL UNIQUE 
    );

    CREATE TABLE garage.vehicule(
        id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL ,
        price DECIMAL(7, 2) UNSIGNED NOT NULL ,
        photo VARCHAR(50),
        brand_id TINYINT UNSIGNED NOT NULL,
        FOREIGN KEY(brand_id) REFERENCES garage.brand(id)
    );

    CREATE TABLE garage.options(
        id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL UNIQUE
    );

    CREATE TABLE garage.vehicule_option(
        vehicule_id TINYINT UNSIGNED,
        option_id TINYINT UNSIGNED,
        FOREIGN KEY(vehicule_id) REFERENCES garage.vehicule(id),
        FOREIGN KEY(option_id) REFERENCES garage.options(id),
        PRIMARY KEY(vehicule_id, option_id)
    );


    CREATE TABLE garage.roles(
        id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL UNIQUE
    );

    CREATE TABLE garage.user(
        id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(150) NOT NULL ,
        roles_id TINYINT UNSIGNED NOT NULL,
        FOREIGN KEY(roles_id) REFERENCES garage.roles(id)
    );

INSERT INTO garage.brand
VALUES
    (NULL, 'Mercedes'),
    (NULL, 'Bmw'),
    (NULL, 'Audi'),
    (NULL, 'Renault'),
    (NULL, 'Citroen'),
    (NULL, 'Peugeot'),
    (NULL, 'Jaguar')
    ;

    INSERT INTO garage.vehicule
    VALUES
    (NULL, 'A6', 4200, "audia6.png" ,3),
    (NULL, 'Serie 2', 12000, "BMWSerie2.png" ,2),
    (NULL, 'Classe G', 37000, "ClasseG.jpeg" ,1),
    (NULL, '3008', 10000, "Peugeot3008.jpeg" ,6),
    (NULL, 'Mégane', 2100, "Megane.jpg" ,4),
    (NULL, 'C1', 5500, "C1.jpg" ,5),
    (NULL, '208', 6000, "c208.jpg" ,6),
    (NULL, 'F-type', 8000, "Ftype.jpg" ,7)
    ;

    INSERT INTO garage.options
    VALUES
        (NULL, 'Climatisation'), 
        (NULL, 'Système de démarrage sans clé'),
        (NULL, 'Freinage d’urgence autonome'),
        (NULL, 'Régulateur de vitesse '),
        (NULL, 'Toit ouvrant'),
        (NULL, 'Intérieur en cuir'),
        (NULL, 'Volant multifonctions'),
        (NULL, 'Surveillance des angles morts'),
        (NULL, 'Assistant de stationnement automatique'),
        (NULL, 'Rétroviseurs électriques'),
        (NULL, 'Sièges chauffants'),
        (NULL, 'Park assist')
    ;

    INSERT INTO garage.vehicule_option
    VALUES
        (1, 1),
        (1, 2),
        (1, 5),
        (1, 6),
        (2, 11),
        (2, 7),
        (2, 6),
        (3, 7),
        (3, 2),
        (3, 10),
        (3, 4),
        (4, 4),
        (4, 1),
        (4, 3),             
        (5, 5),             
        (5, 1),             
        (5, 10),             
        (6, 3),             
        (6, 5),             
        (6, 7),             
        (7, 4),             
        (7, 8),             
        (7, 2),             
        (8, 11),             
        (8, 6),                       
        (8, 7)
    ;

    
INSERT INTO garage.roles
VALUES
    (NULL, 'admin'),
    (NULL, 'user')
    ;

-- admin@admin.fr admin / user@user.com user
INSERT INTO garage.user
VALUES
    (NULL, 'admin@admin.fr', '$argon2i$v=19$m=16,t=2,p=1$T0JpcmVPM1VPSFpKTURXRQ$XfL7XikxkKe39VdOzHNRNQ', 1),
    (NULL, 'user@user.com', '$argon2i$v=19$m=16,t=2,p=1$QlBsMHNmNDR1TXIzU2RTRQ$+QoSQy7thet+gHIZSyF0Ig', 2)
;