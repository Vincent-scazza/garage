import SecurityRepository from "../repository/security_repository.js";
import argon2 from 'argon2';
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
        console.log(user);
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
        // si l'utilisateur existe est que le mdp est correcte
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: user,
        });
    };
}
export default SecurityController;
