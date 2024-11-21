import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import Login from "../component/home/Login";
import AuthPopUp from "../component/common/AuthPopUp";
import "../assets/css/styles.css";
import "../assets/css/login.css";

const LoginPage = () => {
	// Fragment : élément anonyme
	return (
		<>
			<main>
				<Login />
				<AuthPopUp />
			</main>
		</>
	);
};

export default LoginPage;
