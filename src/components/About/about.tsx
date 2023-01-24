import Link from "next/link";
import React from "react";
import ContentCard from "../contentCard/contentCard";
import styles from "./about.module.css";

function AboutSection() {
	return (
		<div className={styles.main}>
			<h2>ABOUT</h2>

			<ContentCard />
		</div>
	);
}

export default AboutSection;
