import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import ContactPage from "../page/ContactPage";
import Annonce from "../page/Annonce";
import MentionLg from "../page/Mentionlg";
import BaseLayout from "../layout/BaseLayout";
import PoConf from "../page/PoConf";
import Cgu from "../page/Cgu";

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
				path: "/",
				element: <HomePage />,
			},

			{
				path: "contact",
				element: <ContactPage />,
			},
			{
				path: "annonce",
				element: <Annonce />,
			},
			{
				path: "mention_legales",
				element: <MentionLg />,
			},
			{
				path: "Cgu",
				element: <Cgu />,
			},
			{
				path: "PoConf",
				element: <PoConf />,
			},
		],
	},
]);

export default router;
