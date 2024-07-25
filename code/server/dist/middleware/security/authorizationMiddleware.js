import jwt from "jsonwebtoken";
class AuthorizationMiddleware {
    // méthodes recevant la liste des role autorisés
    Authorize = (roles) => {
        //console.log(roles);
        //retourner un middleware
        return (req, res, next) => {
            // récupérer le token contenu dans l'en-tete authorization
            const token = req.headers.authorization.split(" ")[1];
            // vérifier la validité du token
            try {
                const verifyToken = jwt.verify(token, process.env.SECRET);
            }
            catch (error) {
                return res.status(401).json({
                    status: 401,
                    message: "Unauthorized",
                });
            }
            // récupérer le payload du token
            const data = jwt.decode(token);
            // vérification des autorization
            // if (data.user.role.name !== "admin") {
            // chercher le role des utlisateur dans la liste des role attribué
            if (roles.indexOf(data.user.role.name) === -1) {
                return res.status(401).json({
                    status: 401,
                    message: "Unauthorized",
                });
            }
            // passer au middleware suivant
            next();
        };
    };
}
export default AuthorizationMiddleware;
