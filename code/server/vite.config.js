import { defineConfig, loadEnv } from "vite";
import dotenv from "dotenv";

export default defineConfig(({ command, mode }) => {
	//  charger le fichier d'environnement de test
	dotenv.config({
		path: ".env.test",
	});

	// console.log(process.env);

	// avec GitHub Actions, modifier l'hote MySQL
	if (process.env.GITHUB_ACTION) {
		process.env.MYSQL_HOST = "127.0.0.1";
	}

	return {
		// vite config
		define: {
			// __APP_ENV__: JSON.stringify(env.APP_ENV),
		},
		test: {
			coverage: {
				reportsDirectory: "__tests__/__coverage__",
				exclude: ["__tests__", "dist", "vite.config.js", "src/index.ts"],
			},
		},
	};
});
