function About_Column(props: { onClickMethod(imgSrc: string): any }) {
	return (
		<div className="about-section" id="about">
			<div className="sixty">
				<h3 className="section-title">
					<span className="orange">01.</span> About
				</h3>
				<div className="section-content">
					<div className="section-txt-container">
						<p className="section-txt">
							Hello! I am Fernando, and I build cool stuff. I was born in the
							Mexican state of{" "}
							<span
								className="green openImgBtn"
								onClick={() => {
									props.onClickMethod("zacatecas.jpg");
								}}
							>
								Zacatecas
							</span>
							, my journey into tech & engineering began at a very early age
							when I broke and attempted to repair a{" "}
							<span
								className="green openImgBtn"
								onClick={() => {
									props.onClickMethod("finger-light.gif");
								}}
							>
								finger light
							</span>
							. I was fascinated by how just 3 small components made the light
							work; so simple yet so efficient.{" "}
						</p>
						<p className="section-txt">
							Fast-forward into college and I used that same curiosity to
							explore the world of computers and landed into the Computer
							Science Major. The possibility of things you can do by just
							writing some lines of code are endless, and that is incredible. I
							aspire to help build the technology of tomorrow; The what now
							seems like unthinkable.
						</p>{" "}
						<p className="section-txt">
							{" "}
							And that is where i’m at currently, pursuing that opportunity
						</p>
					</div>
				</div>
			</div>
			<div className="fourty project-img me-img">
				<img src={require("../assets/images/me.jpeg")} />
			</div>
		</div>
	);
}

export default About_Column;
