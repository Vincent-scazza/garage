import { useEffect, useState } from "react";

const NoticeMessage = () => {
	const [notice, setNotice] = useState("");

	useEffect(() => {
		// récuperer la clé notice stockée dans sessionStorage
		if (window.sessionStorage.getItem("notice")) {
			// récuperer la clé et l'affecter à l'état
			setNotice(window.sessionStorage.getItem("notice"));

			// supprimer la clé notice
			window.sessionStorage.removeItem("notice");
		}
	}, []);

	return <p className="notice">{notice}</p>;
};

export default NoticeMessage;
