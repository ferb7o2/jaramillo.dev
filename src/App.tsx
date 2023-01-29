import React from "react";
import HomeSection from "./screens/Home/home";
import "./App.css";
import About from "./screens/about/about";
import ProjectsSection from "./screens/projects/projects";
import ContactSection from "./screens/contact/contact";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<main className="page-container">
				<HomeSection />
				<About />
				<ProjectsSection />
				<ContactSection />
			</main>
		</BrowserRouter>
	);
}

export default App;
