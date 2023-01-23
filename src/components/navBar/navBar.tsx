import { roboto_condensed } from "@/utils/fonts";
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
			<p className={(styles.navTitle, roboto_condensed.className)}>
				<span className="bold">JARAMILLO</span> FERNANDO
			</p>
			<div className={styles.navbar_nav_row}>
				<Link href={"#about"}>ABOUT</Link>
				<Link href={"#projects"}>PROJECTS</Link>
				<Link href={"#contact"}>CONTACT</Link>
				<GitLogo
					width={24}
					height={23.41}
					fill={"white"}
					pointer-events="all"
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