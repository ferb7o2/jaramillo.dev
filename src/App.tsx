import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Column_Education from "./components/Education_Column";

function App() {
	return (
		<div className="App">
			<header>
				<Header />
			</header>
			<body>
				<div className="container">
					<div className="title-container">
						<p className="first-title-txt">// Hi, my name is</p>
						<h1 className="second-title-txt">Fernando_Jaramillo()</h1>
						<h2 className="third-title-txt">//and I'm a software developer</h2>
						<div className="hash-container">
							<p className="hash-txt">
								my_portfolio <span className="orange">=</span> {"{"}{" "}
							</p>
							<div className="hash-indent">
								<p className="hash-txt">
									“<a className="orange">About</a>” :{" "}
									<a className="green">who_am_i()</a>,{" "}
								</p>
								<p className="hash-txt">
									“<a className="orange">Education</a>” :{" "}
									<a className="green">where_i_went_to_college()</a>,
								</p>
								<p className="hash-txt">
									“<a className="orange">Projects</a>” :{" "}
									<a className="green">what_fun_things_am_i_up_to()</a>,
								</p>
								<p className="hash-txt">
									“<a className="orange">Contact</a>” :{" "}
									<a className="green">where_you_can_find_me()</a>
								</p>
							</div>
							<p className="hash-txt">{"}"}</p>
						</div>

						<div className="about-section">
							<h3 className="section-title">
								<span className="orange">01.</span> About
							</h3>
							<div className="section-content">
								<div className="section-txt-container">
									<p className="section-txt">
										Hello! I am Fernando, and I build cool stuff. I was born in
										the Mexican state of{" "}
										<span className="green">Zacatecas</span>, my journey into
										tech & engineering began at a very early age when I broke
										and attempted to repair a{" "}
										<span className="green">finger light</span>. I was
										fascinated by how just 3 small components made the light
										work; so simple yet so efficient.{" "}
									</p>
									<p className="section-txt">
										Fast-forward into college and I used that same curiosity to
										explore the world of computers and landed into the Computer
										Science Major. The possibility of things you can do by just
										writing some lines of code are endless, and that is
										incredible. I aspire to help build the technology of
										tomorrow; The what now seems like unthinkable.
									</p>{" "}
									<p className="section-txt">
										{" "}
										And that is where i’m at currently, pursuing that
										opportunity
									</p>
								</div>
							</div>
						</div>

						<Column_Education />

						<div className="project-section">
							<h3 className="section-title">
								<span className="orange">03.</span> Projects
							</h3>
							<div className="project-container">
								<div className="fifty"></div>
								<div className="fifty">
									<h4 className="project-title">Product Inventory Tracker</h4>

									<p className="project-desc">
										A <span className="green">Live</span> web app made for a
										small business’ product inventory tracking needs. Replaces
										business’ previous way of tracking data (excel spreadsheet)
										with a database and availability over the web.
									</p>
									<p className="project-desc">
										<span className="orange bold">Relevant Technologies: </span>
										React JS, AWS Amplify, AWS DynamoDB, AWS Appsync
									</p>
									<p className="project-desc">
										<span className="orange bold">Languages: </span>
										TypeScript, JavaScript
									</p>
								</div>
							</div>

							<div className="project-container">
								<div className="fifty">
									<h4 className="project-title">My Flick - mobile app</h4>

									<p className="project-desc">
										A cross compatible (React Native) Mobile Application. The
										concept is: A Tinder-like matchmaking app that integrates
										movies into the mix. Swipe on people and the movies you are
										interested in watching, when you m...
									</p>
									<p className="project-desc">
										<span className="orange bold">Relevant Technologies: </span>
										React Native, AWS Amplify, AWS S3, AWS Cognito, Jest
									</p>
									<p className="project-desc">
										<span className="orange bold">Languages: </span>
										TypeScript, JavaScript
									</p>
								</div>
								<div className="fifty"></div>
							</div>

							<div className="project-container">
								<div className="fifty"></div>
								<div className="fifty">
									<h4 className="project-title">HardWiring Local Network</h4>

									<p className="project-desc">
										This isn’t a coding project, more of an interest of hobby. I
										took on the task of hardwiring a new family business’
										office. 10+ outlets, 3+ RJ45 connectors in each, 2 RJ45 wall
										patches, Ethernet switches, camer...
									</p>
								</div>
							</div>

							<div className="project-container">
								<div className="fifty">
									<h4 className="project-title">Cane's Chicken Python Bot</h4>

									<p className="project-desc">
										A <span className="green">Local</span> cane’s restaurant
										survey filler, It will get the receipt survey code and
										automatically do the survey and sign you up for the free
										cane’s for a year incentive.
									</p>
									<p className="project-desc">
										<span className="orange bold">Relevant Technologies: </span>
										X
									</p>
									<p className="project-desc">
										<span className="orange bold">Languages: </span>
										Python3
									</p>
								</div>
								<div className="fifty"></div>
							</div>
						</div>

						<div className="education-section contact-section">
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
									<a
										className="contact-txt"
										href="mailto:fernando@jaramillo.dev"
									>
										fernando@jaramillo dot dev
									</a>
								</p>
								<p className="contact-txt">
									Phone number:{" "}
									<a className="contact-txt" href="tel:+1800229933">
										(956) 561 - six six three four
									</a>
								</p>
							</div>
							<div className="row logos-row">
								<img
									className="company-logo"
									src={require("./assets/icons/linkedin-icon.png")}
									onClick={() =>
										window.open("https://www.linkedin.com/in/fernandojmllo/")
									}
								/>
								<img
									className="company-logo"
									src={require("./assets/icons/handshake.png")}
									onClick={() =>
										window.open(
											"https://app.joinhandshake.com/stu/users/18626482"
										)
									}
								/>
								<img
									className="company-logo"
									src={require("./assets/icons/instagram.png")}
									onClick={() =>
										window.open("https://www.instagram.com/fernandojmllo/")
									}
								/>
								<img
									className="company-logo"
									src={require("./assets/icons/github.png")}
									onClick={() =>
										window.open("https://github.com/JoseJaramillo04")
									}
								/>
							</div>
						</div>
					</div>
				</div>
			</body>
			<Footer />
		</div>
	);
}

export default App;
