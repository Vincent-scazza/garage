-- Table pour les clients
CREATE TABLE Client (
    ID_Client INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(100),
    Prénom VARCHAR(100),
    Date_Naissance DATE,
    Email VARCHAR(150) UNIQUE,
    Téléphone VARCHAR(20),
    Adresse TEXT,
    Numéro_Passeport VARCHAR(20) UNIQUE
);

-- Table pour les programmes de fidélité
CREATE TABLE Programme_Fidélité (
    ID_Programme INT PRIMARY KEY AUTO_INCREMENT,
    Nom_Programme VARCHAR(100),
    Niveau_Fidélité ENUM('Bronze', 'Argent', 'Or', 'Platine'),
    Points_Accumules INT DEFAULT 0,
    Date_Adhésion DATE,
    ID_Client INT,
    FOREIGN KEY (ID_Client) REFERENCES Client(ID_Client)
);

-- Table pour les aéroports
CREATE TABLE Aéroport (
    ID_Aéroport INT PRIMARY KEY AUTO_INCREMENT,
    Nom_Aéroport VARCHAR(150),
    Ville VARCHAR(100),
    Pays VARCHAR(100),
    Code_IATA CHAR(3) UNIQUE,
    Code_ICAO CHAR(4) UNIQUE
);

-- Table pour les compagnies aériennes
CREATE TABLE Compagnie_Aérienne (
    ID_Compagnie INT PRIMARY KEY AUTO_INCREMENT,
    Nom_Compagnie VARCHAR(150),
    Pays_Origine VARCHAR(100),
    Code_IATA CHAR(3) UNIQUE,
    Code_ICAO CHAR(4) UNIQUE
);

-- Table pour les avions
CREATE TABLE Avion (
    ID_Avion INT PRIMARY KEY AUTO_INCREMENT,
    Modèle VARCHAR(100),
    Capacité INT,
    Année_Fabrication YEAR,
    ID_Compagnie INT,
    FOREIGN KEY (ID_Compagnie) REFERENCES Compagnie_Aérienne(ID_Compagnie)
);

-- Table pour les vols
CREATE TABLE Vol (
    ID_Vol INT PRIMARY KEY AUTO_INCREMENT,
    Numéro_Vol VARCHAR(10) UNIQUE,
    Date_Départ DATE,
    Heure_Départ TIME,
    Date_Arrivée DATE,
    Heure_Arrivée TIME,
    Statut_Vol ENUM('Enregistré', 'Retardé', 'Annulé'),
    Aéroport_Départ INT,
    Aéroport_Arrivée INT,
    ID_Avion INT,
    FOREIGN KEY (Aéroport_Départ) REFERENCES Aéroport(ID_Aéroport),
    FOREIGN KEY (Aéroport_Arrivée) REFERENCES Aéroport(ID_Aéroport),
    FOREIGN KEY (ID_Avion) REFERENCES Avion(ID_Avion)
);

-- Table pour les billets
CREATE TABLE Billet (
    ID_Billet INT PRIMARY KEY AUTO_INCREMENT,
    Numéro_Billet VARCHAR(15) UNIQUE,
    Classe ENUM('Économique', 'Business', 'Première Classe'),
    Prix DECIMAL(10, 2),
    Date_Emission DATE,
    Statut_Billet ENUM('Validé', 'Annulé', 'Utilisé'),
    ID_Client INT,
    ID_Vol INT,
    FOREIGN KEY (ID_Client) REFERENCES Client(ID_Client),
    FOREIGN KEY (ID_Vol) REFERENCES Vol(ID_Vol)
);
