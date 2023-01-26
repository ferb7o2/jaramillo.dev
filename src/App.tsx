import React from "react";
import HomeSection from "./screens/Home/home";
import "./App.css";
import About from "./screens/about/about";
import ProjectsSection from "./screens/projects/projects";
import ContactSection from "./screens/contact/contact";

function App() {
	return (
		<main className="page-container">
			<HomeSection />
			<About />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}

export default App;
