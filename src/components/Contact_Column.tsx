function Contact_Column() {
	return (
		<>
			<div className="education-section contact-section" id="contact">
				<h3 className="section-title">
					<span className="orange">04.</span> Contact
				</h3>
			</div>
			<div className="center">
				<div className="section-content-contact">
					<p className="contact-txt contact-heading">
						Thank you for visiting my website, here are my details:
					</p>
					<p className="contact-txt">
						email:{" "}
						<a className="contact-txt" href="mailto:fernando@jaramillo.dev">
							fernando@jaramillo dot dev
						</a>
					</p>
					<p className="contact-txt">
						Phone number:{" "}
						<a className="contact-txt" href="tel:+1(956)561-6634">
							(956) 561 - six six three four
						</a>
					</p>
				</div>
				<div className="row logos-row">
					<img
						className="company-logo"
						src={require("../assets/icons/linkedin-icon.png")}
						onClick={() =>
							window.open("https://www.linkedin.com/in/fernandojmllo/")
						}
					/>
					<img
						className="company-logo"
						src={require("../assets/icons/handshake.png")}
						onClick={() =>
							window.open("https://app.joinhandshake.com/stu/users/18626482")
						}
					/>
					<img
						className="company-logo"
						src={require("../assets/icons/instagram.png")}
						onClick={() =>
							window.open("https://www.instagram.com/fernandojmllo/")
						}
					/>
					<img
						className="company-logo"
						src={require("../assets/icons/github.png")}
						onClick={() => window.open("https://github.com/JoseJaramillo04")}
					/>
				</div>
			</div>
		</>
	);
}

export default Contact_Column;
