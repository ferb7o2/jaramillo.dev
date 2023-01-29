import React from "react";
import UtrgvImage from "../../assets/images/utrgv-campus.jpeg";

import styles from "./contentCard.module.css";
import HeadShot from "../../assets/images/headshot.webp";
import { useSearchParams } from "react-router-dom";

function ContentCard() {
	const [searchParams, setSearchParams] = useSearchParams();
	const tab = searchParams.get("tab") || "";

	function changeTab(input: string) {
		const temp = new URLSearchParams({ tab: input });
		setSearchParams(temp);
	}

	return (
		<div className={styles.content_section}>
			<ul className={styles.nav_row}>
				{tab === "aboutMe" ? (
					<>
						<a
							onClick={(e) => {
								changeTab("education");
							}}
						>
							<li>Education</li>
						</a>
						<a onClick={() => {}}>
							<li className={styles.selected}>About Me</li>
						</a>
					</>
				) : (
					<>
						<a onClick={() => {}}>
							<li className={styles.selected}>Education</li>
						</a>
						<a
							onClick={() => {
								changeTab("aboutMe");
							}}
						>
							<li>About Me</li>
						</a>
					</>
				)}
			</ul>
			{tab === "aboutMe" ? (
				<div className={(styles.content, styles.about_content)}>
					<div className={styles.thirty}>
						<div className={styles.img_container}></div>
					</div>
					<div className={styles.seventy}>
						<div className={styles.seventy_txt}>
							<h3>
								Hi there! My name is{" "}
								<span className={styles.selected}>Fernando</span>
							</h3>
							<p>
								and I love creating new and exciting things. My interest in
								technology and engineering started at a young age when I tried
								to fix a broken finger light. The fact that such a small device
								could work so efficiently with just a few components really
								fascinated me.
							</p>
							<p className={styles.second}>
								As I grew older, I decided to pursue this curiosity further by
								studying computer science in college. I was amazed by the
								endless possibilities that can be achieved through coding, and I
								am now working towards building the technology of the future. I
								am constantly seeking new opportunities to learn and grow in
								this field.
							</p>
						</div>
					</div>
				</div>
			) : (
				<div className={styles.content}>
					<img
						src={UtrgvImage}
						alt="Utrgv campus"
						className={styles.campus_img}
						loading="lazy"
					/>
					<div className={styles.text_content}>
						<p>
							Earned a{" "}
							<span className={styles.selected}>
								Bachelor's of Science in Computer Science
							</span>
						</p>
						<p>
							From The{" "}
							<span className={styles.selected}>
								University of Texas Rio Grande Valley
							</span>
						</p>
						<p>
							Graduated with a{" "}
							<span className={styles.selected}>3.96/4.0 GPA</span> that's the
							Highest Honors{" "}
							<span className={styles.selected}>Summa Cum Laude</span>
						</p>
						<p>
							Truly enjoyed the world of Computer Science, might go for a
							Master's
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default ContentCard;
