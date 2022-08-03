function Projects_Column() {
	return (
		<div className="project-section" id="projects">
			<h3 className="section-title">
				<span className="orange">03.</span> Projects
			</h3>
			<div className="project-container">
				<div className="fifty project-img img-first">
					<img src={require("../assets/images/pjl.png")} />
				</div>
				<div className="fifty">
					<h4 className="project-title title-second">
						Product Inventory Tracker
					</h4>

					<p className="project-desc">
						A <span className="green">Live</span> web app made for a small
						business’ product inventory tracking needs. Replaces business’
						previous way of tracking data (excel spreadsheet) with a database
						and availability over the web.
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
						A cross compatible (React Native) Mobile Application. The concept
						is: A Tinder-like matchmaking app that integrates movies into the
						mix. Swipe on people and the movies you are interested in watching,
						when you m...
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
				<div className="fifty row myflickrRow">
					<img src={require("../assets/images/myflickrSignUp.gif")} />
					<img src={require("../assets/images/myflickrPeople.gif")} />
					<img src={require("../assets/images/myflickrMovies.gif")} />
				</div>
			</div>

			<div className="project-container">
				<div className="fifty project-img img-first">
					<img src={require("../assets/images/networking.jpg")} />
				</div>
				<div className="fifty">
					<h4 className="project-title">HardWiring Local Network</h4>

					<p className="project-desc">
						This isn’t a coding project, more of an interest of hobby. I took on
						the task of hardwiring a new family business’ office. 10+ outlets,
						3+ RJ45 connectors in each, 2 RJ45 wall patches, Ethernet switches,
						camer...
					</p>
				</div>
			</div>

			<div className="project-container">
				<div className="fifty">
					<h4 className="project-title">Cane's Chicken Python Bot</h4>

					<p className="project-desc">
						A <span className="green">Local</span> cane’s restaurant survey
						filler, It will get the receipt survey code and automatically do the
						survey and sign you up for the free cane’s for a year incentive.
					</p>
					<p className="project-desc">
						<span className="orange bold">Relevant Technologies: </span>X
					</p>
					<p className="project-desc">
						<span className="orange bold">Languages: </span>
						Python3
					</p>
				</div>
				<div className="fifty project-img">
					<img src={require("../assets/images/canes.png")} />
				</div>
			</div>
		</div>
	);
}

export default Projects_Column;
