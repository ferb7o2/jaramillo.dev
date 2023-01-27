import React from "react";
import styles from "./projectCard.module.css";

interface props {
	pName: string;
	pDescription: string;
	pOverview: string;
	pRepoLink: string;
	pWebLink: string;
	pImgSrc: any;
	pIcons: string[];
}

function ProjectCard({
	pName,
	pDescription,
	pOverview,
	pRepoLink,
	pWebLink,
	pImgSrc,
	pIcons,
}: props) {
	let counter = 0;
	return (
		<section className={styles.card}>
			<div className={styles.upper_info}>
				<div className={styles.img_container}>
					<img
						src={pImgSrc}
						alt="Project"
						style={{ width: "100%", height: "auto" }}
					/>
				</div>
				<h2 className={styles.title}>{pName}</h2>
				<span>{pDescription}</span>
			</div>
			<div className={styles.lower_info}>
				<p>{pOverview}</p>
				<div className={styles.card_bottom}>
					<div className={styles.logo_row}>
						{pIcons.map((icon) => (
							<img
								key={`icon${(counter += 1)}`}
								src={icon}
								style={{ width: "30px" }}
							></img>
						))}
					</div>
					<div className={styles.btn_row}>
						<a href={pWebLink} className={styles.black_btn}>
							Website
						</a>
						<a href={pRepoLink}>Github</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProjectCard;
