import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import TpoConf from "../component/common/TpoConf";
import AuthPopUp from "../component/common/AuthPopUp";
import "../assets/css/styles.css";
import "../assets/css/polconf.css";

const PoConf = () => {
	// Fragment : élément anonyme
	return (
		<>
			<main>
				<TpoConf />
				<AuthPopUp />
			</main>
		</>
	);
};

export default PoConf;
