import { RouterProvider } from "react-router-dom";
import router from "./service/router";
import { UserProvider } from "./provider/UserProvider";

/*
    composant :
    capitaliser le nom di composant
    doit retourner un élément unique
*/
const App = () => {
	return (
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
	);
};

export default App;
