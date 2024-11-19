import { Router, RouterProvider } from "react-router-dom";
import router from "./service/router";

/*
    composant :
    capitaliser le nom di composant
    doit retourner un élément unique
*/
const App = () => {
  return <RouterProvider router={ router} />;
};

export default App;