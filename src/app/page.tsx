import AboutSection from "@/components/About/about";
import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<AboutSection />
		</main>
	);
}
