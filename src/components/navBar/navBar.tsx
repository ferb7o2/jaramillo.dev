import Link from "next/link";
import React from "react";
import styles from "./navBar.module.css";
import GitLogo from "../../../public/assets/svgs/github-logo.svg";
import LinkedInLogo from "../../../public/assets/svgs/linkedin-logo.svg";
import CvIcon from "../../../public/assets/svgs/cv-icon.svg";
import Image from "next/image";

function NavBar() {
	return (
		<header className={styles.navBar}>
			<div className={styles.blurred_bg} />
			<p className={styles.navTitle}>
				<span className="bold">JARAMILLO</span> FERNANDO
			</p>

			<div className={styles.navbar_nav_row}>
				<a href={"/#about"}>ABOUT</a>
				<a href={"/#projects"}>PROJECTS</a>
				<a href={"/#contact"}>CONTACT</a>
				<GitLogo
					width={24}
					height={23.41}
					fill={"white"}
					clasName={styles.svgIcon}
				/>
				<LinkedInLogo
					width={23}
					height={23}
					fill={"white"}
					clasName={styles.svgIcon}
				/>
				<CvIcon
					width={25}
					height={"auto"}
					fill={"white"}
					clasName={styles.svgIcon}
				/>
			</div>
		</header>
	);
}

export default NavBar;
