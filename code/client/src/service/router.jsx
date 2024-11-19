import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import ContactPage from "../page/ContactPage";
import BaseLayout from "../layout/BaseLayout";

const router = createBrowserRouter([
	/* 
        path: route
        element: composant relié à la route
    */
	{
		// route / est considérer comme la page d'accueil
		// préfixe pour les routes enfants
		path: "/",
		// mise en page utilisée par les pages enfants
		element: <BaseLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},

			{
				path: "contact",
				element: <ContactPage />,
			},
		],
	},
]);

export default router;
