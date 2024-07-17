class NotFoundController {
    // méthodes appelées par le routeur
    index = (req, res) => {
        return res.send("Not Found - GET");
    };
}
export default NotFoundController;
