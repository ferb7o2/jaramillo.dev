function Education_Column() {
	return (
		<div className="column-edu">
			<img
				src={require("../assets/images/Utrgv-logo-fire.jpg")}
				className="utrgv-img"
			/>
			<div className="education-section">
				<h3 className="section-title">
					<span className="orange">02.</span> Education
				</h3>
				<div className="section-content section-content-edu">
					<div className="section-txt-container section-txt-container-edu">
						<p className="section-txt">
							I earned a Bachelors of Science in Computer Science from{" "}
							<span className="green">
								The University Of Texas - Rio Grande Valley
							</span>
							.
						</p>
						<p className="section-txt">
							I attended from 2019 through 2022, and managed to graduate with a
							3.95/4.0 GPA.
							<span className="red"> That’s 1 B, painful!</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Education_Column;
