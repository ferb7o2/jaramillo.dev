import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./projectCard.module.css";

interface props {
	pName: string;
	pDescription: string;
	pOverview: string;
	pRepoLink: string;
	pWebLink: string;
	pImgSrc: any;
	pIcons: JSX.Element[];
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
	return (
		<section className={styles.card}>
			<div className={styles.upper_info}>
				<div className={styles.img_container}>
					<Image
						src={pImgSrc}
						alt="Project"
						width={"0"}
						height={"0"}
						sizes="100vw"
						style={{ width: "100%", height: "auto" }}
					/>
				</div>
				<h2 className={styles.title}>{pName}</h2>
				<span>{pDescription}</span>
			</div>
			<div className={styles.lower_info}>
				<p>{pOverview}</p>
				<div className={styles.card_bottom}>
					<div className={styles.logo_row}>{pIcons.map((e) => e)}</div>
					<div className={styles.btn_row}>
						<Link href={pWebLink} className={styles.black_btn}>
							Website
						</Link>
						<Link href={pRepoLink}>Github</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProjectCard;
