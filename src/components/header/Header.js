import React from "react";
import "./Header.css";
import CTA from "./Cta";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h5> Hello I'am</h5>
				<h1> Kindeme Kounoudji</h1>
				<h5 className="text-light"> Fullstack Developer</h5>
				<CTA />
				<HeaderSocials />
				<div className="me">
					<img src={ME} alt="me" />

					<a href="#contact" className="scroll_down">
						Scroll Down
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
