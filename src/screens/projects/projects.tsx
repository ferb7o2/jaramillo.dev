import React from "react";
import styles from "./projects.module.css";
import ProjectCard from "../../components/projectCard/projectCard";
import Carousel from "../../components/carousel/carousel";

function ProjectsSection() {
	return (
		<div className={styles.main} id="projects">
			<h2 className={styles.heading}>PROJECTS</h2>
			<p className="roboto-condensed-changeMe">What am I up to?</p>

			<Carousel />
		</div>
	);
}

export default ProjectsSection;
