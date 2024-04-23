import React from "react";
import pvLogo from '../assets/img/PV_logo.png'
import { Link } from 'react-router-dom';
const headerNav = [
	{
		title: "intro",
		url: "#intro",
	},
	{
		title: "skill",
		url: "#skill",
	},
	{
		title: "site",
		url: "#site",
	},
];
const Header = () => {

	return (
		<header id="header" role="banner">
			<div className="header_inner">
				<div className="header_logo">
					<a href="/">
						<img src={pvLogo} alt="" />
					</a>
				</div>
				<nav className="header_nav" role="navigation" aria-label="메인 메뉴">
					<ul>
						{headerNav.map((nav, key) => (
							<li key={key}>
								<a href={nav.url}>{nav.title}</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
