function Header() {
	return (
		<div className="header">
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
				<button className="btn">Resume</button>
			</div>
		</div>
	);
}

export default Header;
