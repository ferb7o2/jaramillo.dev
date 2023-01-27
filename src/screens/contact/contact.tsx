import React from "react";
import styles from "./contact.module.css";
import { ReactComponent as Envelope } from "../../assets/svgs/envelope.svg";

function ContactSection() {
	return (
		<div className={styles.main} id="contact">
			<div className={styles.left_side}>
				<div className={styles.contact_section}>
					<p>CONTACT</p>
					<h1>Have a cool project to do?</h1>
					<span>Let me know what's on your mind, we can make it happen!</span>
					<div className={styles.email_row}>
						<Envelope
							fill="white"
							width={30}
							height={30}
							className={styles.envelope}
						/>
						<a href="mailto:fernando@jaramillo.dev">Fernando@jaramillo.dev</a>
					</div>
				</div>
			</div>
			<form
				className={styles.right_side}
				action="https://formsubmit.co/fernando@jaramillo.dev"
				method="POST"
			>
				<div className={styles.contact_section}>
					<label htmlFor="name" className={styles.label}>
						NAME
						<input id="name" required name="name" />
					</label>
					<label htmlFor="email">
						EMAIL
						<input
							id="email"
							type="email"
							pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
							title="Please enter a valid email address"
							required
							name="email"
						/>
					</label>
					<label htmlFor="content">
						MESSAGE
						<textarea
							id="content"
							className={styles.box_input}
							name="message"
							required
						/>
					</label>
					<input
						type="hidden"
						name="_subject"
						value="Personal Website Inquiry"
					/>
					<button type="submit">SEND</button>
				</div>
			</form>
		</div>
	);
}

export default ContactSection;
