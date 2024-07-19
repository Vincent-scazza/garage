class OriginnMiddleware {
    check = (req, res, next) => {
        // récuperer le protocole (http / https)
        // const protocol: string = req.protocol;
        // récupérer l'hote
        const hostname = req.hostname;
        // console.log(protocol,host);
        // récuperer l'origine
        const origin = req.get("origin");
        // liste des origines autorisées
        const listOrigins = process.env.ORIGINS.split(',');
        // vérifier la présence de l'origine dans la lsite
        if (listOrigins.indexOf(origin) === -1
        // && hostname !== 'localhost'
        // && hostname !== '127.0.0.1'
        ) {
            return res.status(403).json({
                status: 403,
                message: "forbiden",
            });
        }
        //  passser au middleware suivant
        next();
    };
}
export default OriginnMiddleware;
