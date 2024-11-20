import type { Request, Response } from "express";
import OptionRepository from "../repository/option_repository.js";
import type Option from "../model/option.js";

class OptionController {
private optionRepository: OptionRepository = new OptionRepository();

// méthodes appelées par le routeur
public index = async (req: Request, res: Response): Promise<Response> => {
const results: Option[] | unknown = await this.optionRepository.selectAll();

// si une erreur est renvoyée
if (results instanceof Error) {
// en environnement de production
return process.env.NODE_ENV === "prod"
? res.status(400).json({
status: 400,
message: "Error",
})
: res.status(400).json({
status: 400,
message: results,
});
}

return res.status(200).json({
status: 200,
message: "OK",
data: results,
});
};

public one = async (req: Request, res: Response): Promise<Response> => {
// req.params permet de récupérer les variables de route
const results: Option | unknown = await this.optionRepository.selectOne(
req.params,
);

// si une erreur est renvoyée
if (results instanceof Error) {
// en environnement de production
return process.env.NODE_ENV === "prod"
? res.status(400).json({
status: 400,
message: "Error",
})
: res.status(400).json({
status: 400,
message: results,
});
}

return res.status(200).json({
status: 200,
message: "OK",
data: results,
});
};
}

export default OptionController;