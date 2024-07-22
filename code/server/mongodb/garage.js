/*
    sélectionner la base de données dans mongo shell avant de charger le fichier 
        use garage
        load('garage.js')
*/

// insérer des documents dans la collection contact
db.contact.insertMany([
	{
		email: "toto@toto.fr",
		subject: "commande en retard",
		message: "Ma voiture n'est pas arrivée",
	},
	{
		email: "tutu@toto.fr",
		subject: "Erreur de commande ",
		message: "Je veux une autre voiture !",
	},
]);
