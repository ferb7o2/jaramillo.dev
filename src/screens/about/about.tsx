import React from "react";
import ContentCard from "../../components/contentCard/contentCard";
import styles from "./about.module.css";

function AboutSection() {
	return (
		<div className={styles.main} id="about">
			<h2>ABOUT</h2>

			<ContentCard />
		</div>
	);
}

export default AboutSection;
