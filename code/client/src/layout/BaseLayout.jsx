import Header from "../component/common/Header";
import Footer from "../component/common/Footer";
import AuthPopUp from "../component/common/AuthPopUp";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
	return (
		<>
			<Header />
			{/* zone remplie par la page */}
			<Outlet />
			<Footer />
			<AuthPopUp />
		</>
	);
};

export default BaseLayout;
