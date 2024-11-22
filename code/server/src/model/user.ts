import type Role from "./role.js";

type User = {
	id?: number;
	email?: string;
	password?: string;
	roles_id?: number;
	key?: string;
	// unknown, si une erreur est renvoyée
	role?: Role | unknown;
};

export default User;
