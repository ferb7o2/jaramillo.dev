import Resume from "../assets/documents/JJaramillo-resume.pdf";

function Header() {
	return (
		<>
			<div className="header web-header">
				<div className="nav-container">
					<a className="nav-text" href="#about">
						<span className="orange">01.</span> About
					</a>
					<a className="nav-text" href="#education">
						<span className="orange">02.</span> Education
					</a>
					<a className="nav-text" href="#projects">
						<span className="orange">03.</span> Projects
					</a>
					<a className="nav-text" href="#contact">
						<span className="orange">04.</span> Contact
					</a>
					<a className="btn" href={Resume} target="_blank">
						Resume
					</a>
				</div>
			</div>
			<header className="header mobile-header">
				<input className="menu-btn" type="checkbox" id="menu-btn" />
				<label className="menu-icon" htmlFor="menu-btn">
					<span className="navicon"></span>
				</label>

				<ul className="menu">
					<li>
						<a className="nav-text" href="#about">
							<span className="orange">01.</span> About
						</a>
					</li>
					<li>
						<a className="nav-text" href="#education">
							<span className="orange">02.</span> Education
						</a>
					</li>
					<li>
						<a className="nav-text" href="#projects">
							<span className="orange">03.</span> Projects
						</a>
					</li>
					<li>
						<a className="nav-text" href="#contact">
							<span className="orange">04.</span> Contact
						</a>
					</li>
				</ul>
			</header>
		</>
	);
}

export default Header;
