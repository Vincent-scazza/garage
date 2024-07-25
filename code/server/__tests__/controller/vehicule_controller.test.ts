import supertest, { type Response } from "supertest";
import { describe, expect, it } from "vitest";
import Server from "../../src/core/server";
import type Role from "../../src/model/role";
import type User from "../../src/model/user";
import type Brand from "../../src/model/brand";
import type Option from "../../src/model/option";
import type Vehicule from "../../src/model/vehicule";
import jwt from "jsonwebtoken";

describe("vehicule controller test suite", async () => {
	// route principale appelée par les tests
	const route = "/vehicule";

	// créer un admin
	const role: Role = {
		id: 1,
		name: "admin",
	};

	// utiliser des identifiants existants dans la base de données
	const admin: User = {
		id: 1,
		email: "admin@admin.fr",
		password: "admin",
		roles_id: 1,
		role: role,
	};

	// créer un vehicule
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
		options: [],
	};

	// créer un test
	it("should returns a status code with 200 ", async () => {
		// valeur attendu
		const expected = 200;

		// SUT (systme under test)
		const sut: Response = await supertest(new Server().createServer()).get(
			route,
		);
		const actual = sut.status;

		// assertion
		expect(actual).toBe(expected);
	});

	it("should returns data", async () => {
		// valeur attendu
		const minValue = 0;

		// SUT (systme under test)
		const sut: Response = await supertest(new Server().createServer()).get(
			route,
		);
		const actual = sut.body.data.length;

		// assertion
		expect(actual).toBeGreaterThan(minValue);
	});

	it("should create a new entry in database", async () => {
		// valeur attendu
		const expected = 201;

		// générer un jwt
		const token = jwt.sign(
			{
				user: admin,
			},
			process.env.SECRET as string,
			{
				expiresIn: 30,
			},
		);
		console.log(token);

		// SUT
		const sut: Response = await supertest(new Server().createServer())
			.post(route)
			.auth(token, { type: "bearer" })
			// propriété body de la requete
			.send(data);
		const actual = sut.status;

		console.log(sut);

		// // assertion
		// expect(actual).toBe(expected);
	});
});
