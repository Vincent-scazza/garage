import type Role from "./role.js";

type User = {
	id?: number;
	email?: string;
	password?: string;
	roles_id?: number;
	// unknown, si une erreur est renvoyée
	role?: Role | unknown;
};

export default User;
