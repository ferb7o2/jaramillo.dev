import Link from "next/link";
import React from "react";
import styles from "./projects.module.css";
import { roboto, roboto_condensed } from "../../utils/fonts";
import ProjectCard from "../projectCard/projectCard";
import Carousel from "../carousel/carousel";

function ProjectsSection() {
	return (
		<div className={styles.main} id="projects">
			<h2 className={styles.heading}>PROJECTS</h2>
			<p className={roboto_condensed.className}>What am I up to?</p>

			<Carousel />
		</div>
	);
}

export default ProjectsSection;
