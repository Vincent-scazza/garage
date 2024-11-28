import Header from "../component/common/Header";
import Footer from "../component/common/Footer";
import FormContact from "../component/common/FormMongo";
import "../assets/css/styles.css";
import "../assets/css/contact.css";
import MainContact from "./admin/MainContact";

const ContactPage = () => {
	return (
		<>
			<main>
				<MainContact />
			</main>
		</>
	);
};

export default ContactPage;
