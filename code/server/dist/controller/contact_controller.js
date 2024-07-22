import ContactRepository from "../repository/contact_repository.js";
class ContactController {
    // récupération de tous les documents
    index = async (req, res) => {
        const results = await new ContactRepository().findAll();
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: results,
        });
    };
    create = async (req, res) => {
        const results = await new ContactRepository().create(req.body);
        return res.status(201).json({
            status: 201,
            message: "Create",
            data: results,
        });
    };
}
export default ContactController;
