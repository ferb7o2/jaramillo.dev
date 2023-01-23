import Link from "next/link";
import React from "react";
import styles from "./contact.module.css";
import Envelope from "../../../public/assets/svgs/envelope.svg";

function ContactSection() {
	return (
		<div className={styles.main}>
			<div className={styles.left_side}>
				<div className={styles.contact_section}>
					<p>CONTACT</p>
					<h1>Have a cool project to do?</h1>
					<span>Let me know what's on your mind, we can make it happen!</span>
					<div className={styles.email_row}>
						<Envelope width={30} height={30} fill={"white"} />
						<Link href="mailto:fernando@jaramillo.dev">
							Fernando@jaramillo.dev
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.right_side}>
				<div className={styles.contact_section}>
					<label htmlFor="name">
						NAME
						<input id="name" />
					</label>
					<label htmlFor="email">
						EMAIL
						<input id="email" type="email" />
					</label>
					<label htmlFor="content">
						MESSAGE
						<textarea id="content" className={styles.box_input} />
					</label>
					<button>SEND</button>
				</div>
			</div>
		</div>
	);
}

export default ContactSection;
