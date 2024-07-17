class HomepageController {
    // méthodes appelées par le routeur
    index = (req, res) => {
        return res.send("homepage controller");
    };
}
export default HomepageController;
