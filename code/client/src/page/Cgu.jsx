import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import TxtCgu from "../component/common/Tcgu";
import AuthPopUp from "../component/common/AuthPopUp";
import "../assets/css/styles.css";
import "../assets/css/cgu.css";

const Cgu = () => {
	// Fragment : élément anonyme
	return (
		<>
			<main>
				<TxtCgu />
				<AuthPopUp />
			</main>
		</>
	);
};

export default Cgu;
