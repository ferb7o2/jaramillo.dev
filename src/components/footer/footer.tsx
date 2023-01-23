import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";
import GitLogo from "../../../public/assets/svgs/github-logo.svg";
import LinkedInLogo from "../../../public/assets/svgs/linkedin-logo.svg";
import HandshakeLogo from "../../../public/assets/svgs/handshake-logo.svg";

function Footer() {
	return (
		<div className={styles.main}>
			<div className={styles.content}>
				<p>Fernando Jaramillo © 2022 ALL RIGHTS RESERVED</p>
				<div className={styles.logo_section}>
					<Link href={"https://github.com/JoseJaramillo04"}>
						{" "}
						<GitLogo width={28} height={28} fill={"white"} />
					</Link>
					<Link href={"https://www.linkedin.com/in/fernandojmllo/"}>
						<LinkedInLogo width={28} height={28} fill={"white"} />
					</Link>
					<Link href={"https://app.joinhandshake.com/stu/users/18626482"}>
						<HandshakeLogo width={28} height={28} fill={"white"} />
					</Link>
				</div>
				<Link href={"#credits"}>Credits and Recognition</Link>
			</div>
		</div>
	);
}

export default Footer;
