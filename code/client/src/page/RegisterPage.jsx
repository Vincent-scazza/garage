import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import RegisterText from "../component/home/Register";
import AuthPopUp from "../component/common/AuthPopUp";
import "../assets/css/styles.css";
import "../assets/css/login.css";

const RegisterPage = () => {
	// Fragment : élément anonyme
	return (
		<>
			<main>
				<RegisterText />
				<AuthPopUp />
			</main>
		</>
	);
};

export default RegisterPage;
