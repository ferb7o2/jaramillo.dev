import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import ProjectCard from "../projectCard/projectCard";
import styles from "./carousel.module.css";
import { projectData } from "../../assets/data";

function Carousel() {
	return (
		<ScrollContainer className={styles.main}>
			{projectData.map((val) => (
				<ProjectCard
					pName={val.name}
					pDescription={val.shortDescription}
					pOverview={val.description}
					pRepoLink={val.repoLink}
					pWebLink={val.webLink}
					pImgSrc={val.imgSrc}
					pIcons={val.icons}
				/>
			))}
		</ScrollContainer>
	);
}

export default Carousel;
