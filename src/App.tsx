import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Column_Education from "./components/Education_Column";
import Contact_Column from "./components/Contact_Column";
import Education_Column from "./components/Education_Column";
import Projects_Column from "./components/Projects_Column";
import ImgPopUp from "./components/ImgPopUp";
import $ from "jquery";
import About_Column from "./components/About_Column";
import Resume from "./assets/documents/JJaramillo-resume.pdf";

function App() {
	const [imgName, setImgName] = useState<string>("pjl.png");

	function displayPopUp(img: string) {
		setImgName(img);
		$("#popUp-modal").removeAttr("hidden");
	}
	return (
		<div className="App">
			<title>Fernando {"</>"}</title>
			<header>
				<Header />
			</header>
			<body>
				<ImgPopUp imageName={imgName} />
				<div className="container">
					<div className="title-container">
						{<p className="first-title-txt">// Hi, my name is</p>}
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

						<About_Column
							onClickMethod={(imgSrc) => {
								displayPopUp(imgSrc);
							}}
						/>

						<Education_Column
							onClickMethod={(imgSrc) => {
								displayPopUp(imgSrc);
							}}
						/>

						<Projects_Column
							onClickMethod={(imgSrc) => {
								displayPopUp(imgSrc);
							}}
						/>

						<Contact_Column />

						<div className="mobile-header resume-div">
							<a className="btn" href={Resume} target="_blank">
								Resume
							</a>
						</div>
					</div>
				</div>
			</body>
			<Footer />
		</div>
	);
}

export default App;
