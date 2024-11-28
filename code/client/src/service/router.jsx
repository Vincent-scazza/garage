import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import ContactPage from "../page/ContactPage";
import Annonce from "../page/Annonce";
import MentionLg from "../page/Mentionlg";
import BaseLayout from "../layout/BaseLayout";
import PoConf from "../page/PoConf";
import Cgu from "../page/Cgu";
import RegisterPage from "../page/RegisterPage";
import LoginPage from "../page/LoginPage";
import LogoutPage from "../page/LogoutPage";
import AdminVehiculeFormPage from "../page/admin/AdminVehiculeFormPage";
import AdminVehiculePage from "../page/admin/AdminVehiculePage";
import AdminHomePage from "../page/admin/AdminHomePage";
import Guard from "../component/common/Guard";

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
			{
				path: "RegisterPage",
				element: <RegisterPage />,
			},
			{
				path: "LoginPage",
				element: <LoginPage />,
			},
			{
				path: "Logout",
				element: <LogoutPage />,
			},
		],
	},

	{
		path: "/admin/",
		element: (
			<Guard roles={["admin"]}>
				<BaseLayout />,
			</Guard>
		),

		children: [
			{
				path: "",
				element: <AdminHomePage />,
			},
			{
				path: "vehicule/:id?",
				element: <AdminVehiculePage />,
			},
			{
				//céer une variable de route : utiliser :<nom de la variable>
				// ? : variable optionnel
				path: "vehicule/form/:id?",
				element: <AdminVehiculeFormPage />,
			},
		],
	},
]);

export default router;
