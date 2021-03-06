import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
	return (
		<div className="header_socials">
			<a
				href="https://www.linkedin.com/in/kindeme-kounoudji/"
				rel="noreferrer"
				target="_blank"
			>
				<BsLinkedin />
			</a>
			<a
				href="https://github.com/kindeme/"
				rel="noreferrer"
				target="_blank"
			>
				<FaGithub />
			</a>
			<a
				href="https://www.linkedin.com/in/kindeme-kounoudji/"
				rel="noreferrer"
				target="_blank"
			>
				<BsLinkedin />
			</a>
		</div>
	);
};

export default HeaderSocials;
