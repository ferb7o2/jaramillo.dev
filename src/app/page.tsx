import AboutSection from "@/components/About/about";
import HomeSection from "@/components/Home/home";
import ProjectsSection from "@/components/projects/projects";
import ContactSection from "@/screens/contact/contact";
import Footer from "@/components/footer/footer";
import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<HomeSection />
			<ProjectsSection />
			<ContactSection />
			<AboutSection />
			<Footer />
		</main>
	);
}
