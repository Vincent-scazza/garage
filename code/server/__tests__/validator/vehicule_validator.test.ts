import { describe, expect, it } from "vitest";
import type Vehicule from "../../src/model/vehicule.js";
import type Brand from "../../src/model/brand.js";
import type Option from "../../src/model/option.js";
import VehiculeValidator from "../../src/validator/vehicule_validator";
import { ValidationError } from "joi";

// créer une suite de tests

describe("vehicule validator tests suite", () => {
	// créer des fausses données
	const brand: Brand = {
		id: 1,
		name: "brand",
	};

	const options: Option[] = [
		{ id: 1, name: "option1" },
		{ id: 1, name: "option2" },
	];

	const data: Vehicule = {
		id: 1,
		model: "model",
		price: 20000,
		brand_id: 1,
		brand: brand,
		options_id: "1,2,3",
		options: options,
	};

	// sut: system under test , méthode ou la fonction testée
	const sut: VehiculeValidator = new VehiculeValidator();

	// créer un test
	it("should return true", async () => {
		// valeur attendue
		const expected = true;

		// comment obtenir la valeur attendue
		const actual = await sut.validate(data);

		// assertion
		// jest : assertion debute par to ...
		// chai : accées direct à des méthodes d'insertion
		expect(actual).toBeTruthy();
	});

	// deuxième test
	it("should returns an error", async () => {
		// données renvoyant une erreur
		const falseData = { ...data, model: "a", price: -10 };

		// comment obtenir la valeur attendue
		const actual = await sut.validate(falseData);

		// assertion
		expect(actual).toBeInstanceOf(ValidationError);
	});
	// troisième test
	it("should returns an error", async () => {
		// données renvoyant une erreur
		const falseData = { ...data, brand_id: -100, brand: "coucouc" };

		// comment obtenir la valeur attendue
		const actual = await sut.validate(falseData);

		// assertion
		expect(actual).toBeInstanceOf(ValidationError);
	});
});
