import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import TMentionLG from "../component/common/TMentionLg";
import AuthPopUp from "../component/common/AuthPopUp";
import "../assets/css/styles.css";
import "../assets/css/mentionlg.css";

const MentionLg = () => {
	// Fragment : élément anonyme
	return (
		<>
			<main>
				<TMentionLG />
				<AuthPopUp />
			</main>
		</>
	);
};

export default MentionLg;
