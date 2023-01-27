import React from "react";
import styles from "./home.module.css";

function HomeSection() {
	return (
		<div className={styles.main} id="home">
			<span className={styles.bg_img}>{"< />"}</span>
			<p>// Hey, my name is</p>
			<h1>Fernando Jaramillo</h1>
			<h3>
				<span>and</span> I'm a Software Developer
			</h3>
			<a href={"#projects"}>Project Portfolio</a>
		</div>
	);
}

export default HomeSection;
