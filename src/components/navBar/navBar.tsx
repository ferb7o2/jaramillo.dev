import React from "react";
import styles from "./navBar.module.css";
import { ReactComponent as GitLogo } from "../../assets/svgs/github-logo.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/svgs/linkedin-logo.svg";
import { ReactComponent as CvIcon } from "../../assets/svgs/cv-icon.svg";

function NavBar() {
	return (
		<header className={styles.navBar}>
			<div className={styles.blurred_bg} />
			<div className={styles.navBar_content}>
				<p className={styles.navTitle}>
					<span className="bold">JARAMILLO</span> FERNANDO
				</p>

				<div className={styles.navbar_nav_row}>
					<a href={"#about"}>ABOUT</a>
					<a href={"#projects"}>PROJECTS</a>
					<a href={"#contact"}>CONTACT</a>
					<GitLogo
						width={24}
						height={23.41}
						fill={"white"}
						className={styles.svgIcon}
					/>
					<LinkedInLogo
						width={23}
						height={23}
						fill={"white"}
						className={styles.svgIcon}
					/>
					<CvIcon
						width={25}
						height={"auto"}
						fill={"white"}
						className={styles.svgIcon}
					/>
				</div>
			</div>
		</header>
	);
}

export default NavBar;
