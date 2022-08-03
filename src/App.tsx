import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Column_Education from "./components/Education_Column";
import Contact_Column from "./components/Contact_Column";
import Education_Column from "./components/Education_Column";
import Projects_Column from "./components/Projects_Column";

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
									“
									<a className="orange" id="hash-txt" href="#about">
										About
									</a>
									” :{" "}
									<a className="green" id="hash-txt" href="#about">
										who_am_i()
									</a>
									,{" "}
								</p>
								<p className="hash-txt">
									“
									<a className="orange" id="hash-txt" href="#education">
										Education
									</a>
									” :{" "}
									<a className="green" id="hash-txt" href="#education">
										where_i_went_to_college()
									</a>
									,
								</p>
								<p className="hash-txt">
									“
									<a className="orange" id="hash-txt" href="#projects">
										Projects
									</a>
									” :{" "}
									<a className="green" id="hash-txt" href="#projects">
										what_fun_things_am_i_up_to()
									</a>
									,
								</p>
								<p className="hash-txt">
									“
									<a className="orange" id="hash-txt" href="#contact">
										Contact
									</a>
									” :{" "}
									<a className="green" id="hash-txt" href="#contact">
										where_you_can_find_me()
									</a>
								</p>
							</div>
							<p className="hash-txt">{"}"}</p>
						</div>

						<div className="about-section" id="about">
							<div className="sixty">
								<h3 className="section-title">
									<span className="orange">01.</span> About
								</h3>
								<div className="section-content">
									<div className="section-txt-container">
										<p className="section-txt">
											Hello! I am Fernando, and I build cool stuff. I was born
											in the Mexican state of{" "}
											<span className="green">Zacatecas</span>, my journey into
											tech & engineering began at a very early age when I broke
											and attempted to repair a{" "}
											<span className="green">finger light</span>. I was
											fascinated by how just 3 small components made the light
											work; so simple yet so efficient.{" "}
										</p>
										<p className="section-txt">
											Fast-forward into college and I used that same curiosity
											to explore the world of computers and landed into the
											Computer Science Major. The possibility of things you can
											do by just writing some lines of code are endless, and
											that is incredible. I aspire to help build the technology
											of tomorrow; The what now seems like unthinkable.
										</p>{" "}
										<p className="section-txt">
											{" "}
											And that is where i’m at currently, pursuing that
											opportunity
										</p>
									</div>
								</div>
							</div>
							<div className="fourty project-img">
								<img src={require("./assets/images/canes.png")} />
							</div>
						</div>

						<Education_Column />

						<Projects_Column />

						<Contact_Column />
					</div>
				</div>
			</body>
			<Footer />
		</div>
	);
}

export default App;
