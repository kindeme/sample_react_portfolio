import React from "react";
import Resume from "../../assets/resume.pdf";

const Cta = () => {
	return (
		<div className="cta">
			<a href={Resume} download className="btn">
				Download CV
			</a>
			<a href="#contact" className="btn btn-primary">
				Let's Talk
			</a>
		</div>
	);
};

export default Cta;