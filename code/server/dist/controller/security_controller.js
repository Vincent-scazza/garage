import SecurityRepository from "../repository/security_repository.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import SimpleCrypto from "simple-crypto-js";
class SecurityController {
    securityRepository = new SecurityRepository();
    // méthodes appelées par le routeur
    _register = async (req, res) => {
        // hacher le mot de passe
        const hash = await argon2.hash(req.body.password);
        // remplacer le mot de passe contenue dans body par la version hachée
        req.body = { ...req.body, password: hash };
        const results = await this.securityRepository.register(req.body);
        // si une erreur esr renvoyée
        if (results instanceof Error) {
            // en environnnement de développement
            return process.env.NODE_ENV === "dev"
                ? res.status(400).json(results)
                : res.status(400).json({
                    status: 400,
                    message: "Error",
                });
        }
        return res.status(200).json({
            status: 201,
            message: "Thank U",
            data: results,
        });
    };
    get register() {
        return this._register;
    }
    login = async (req, res) => {
        // récupere l'utilisateur par son email
        const user = await this.securityRepository.getUserByEmail(req.body);
        // console.log(user);
        // si l'utilisateur nexiste pas
        if (user instanceof Error) {
            return res.status(400).json({
                status: 400,
                message: "error user does not exist",
            });
        }
        // // vérification du mot de passe : comparer le mot de passe saisi avec le hash contenu dans la base de données
        const isPasswordIsValid = await argon2.verify(user.password, req.body.password);
        if (!isPasswordIsValid) {
            return res.status(403).json({
                status: 403,
                message: "Forbidden",
            });
        }
        // crypter le mot de passe pour le stocker cote client
        // générer une partie de la clé de décryptage aléatoire
        const randomKey = SimpleCrypto.default.generateRandom();
        // clé complète de décryptage : partie aléatoire + partie stockée dans la variable d'environnement
        const key = `${randomKey}${process.env.KEY}`;
        // générer le cryptage
        const simpleCrypto = new SimpleCrypto.default(key);
        // crypter le mot de passe
        const passwordEncrypt = simpleCrypto.encrypt(req.body.password);
        // ajouter la clé aléatoire et le mot de passe crypté à l'utilisateur
        user.key = randomKey;
        user.password = passwordEncrypt;
        // si l'utilisateur existe est que le mdp est correcte
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: user,
        });
    };
    auth = async (req, res) => {
        // récupere l'utilisateur par son email
        const user = await this.securityRepository.getUserByEmail(req.body);
        // console.log(user);
        // si l'utilisateur nexiste pas
        if (user instanceof Error) {
            return res.status(400).json({
                status: 400,
                message: "error user does not exist",
            });
        }
        // récupere une partie de la clé  aléatoire
        const randomKey = req.body.key;
        // clé complète de décryptage : partie aléatoire + partie stockée dans la variable d'environnement
        const key = `${randomKey}${process.env.KEY}`;
        // générer le cryptage
        const simpleCrypto = new SimpleCrypto.default(key);
        // décrypter le mot de passe
        const passwordDecrypt = simpleCrypto.decrypt(req.body.password);
        // // vérification du mot de passe : comparer le mot de passe saisi avec le hash contenu dans la base de données
        const isPasswordIsValid = await argon2.verify(user.password, passwordDecrypt);
        if (!isPasswordIsValid) {
            return res.status(403).json({
                status: 403,
                message: "Forbidden",
            });
        }
        // génerer un jeton sécurisé (JSON WEB TOKEN)
        const token = jwt.sign({
            user: user,
        }, process.env.SECRET, {
            expiresIn: 30,
        });
        // si l'utilisateur existe est que le mdp est correcte
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: {
                token: token,
            },
        });
    };
}
export default SecurityController;
