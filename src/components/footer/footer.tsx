import React from "react";
import styles from "./footer.module.css";
import { ReactComponent as GitLogo } from "../../assets/svgs/github-logo.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/svgs/linkedin-logo.svg";
import { ReactComponent as HandshakeLogo } from "../../assets/svgs/handshake-logo.svg";

function Footer() {
	return (
		<div className={styles.main}>
			<div className={styles.content}>
				<p>Fernando Jaramillo © 2022 ALL RIGHTS RESERVED</p>
				<div className={styles.logo_section}>
					<a href={"https://github.com/JoseJaramillo04"}>
						{" "}
						<GitLogo width={28} height={28} fill={"white"} />
					</a>
					<a href={"https://www.linkedin.com/in/fernandojmllo/"}>
						<LinkedInLogo width={28} height={28} fill={"white"} />
					</a>
					<a href={"https://app.joinhandshake.com/stu/users/18626482"}>
						<HandshakeLogo width={28} height={28} fill={"white"} />
					</a>
				</div>
				<a href={"#credits"}>Credits and Recognition</a>
			</div>
		</div>
	);
}

export default Footer;
