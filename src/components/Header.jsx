import React from "react";
import pvLogo from '../assets/img/PV_logo.png'


const headerNav = [
	{
		title: "경매하기",
		url: "#auction"
	},
	{
		title: "커뮤니티",
		url: "#skill"
	},
	{
		title: "고객센터",
		url: "#site"
	}
];

const headerMypg = [
	{
		title: "마이페이지",
		url: "#MyPage"
	},
	{
		title: "로그인",
		url: "./Login.jsx"
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
				<div className="header_mypg">
					<ul>
						{headerMypg.map((mypg, key) => (
							<li key={key}>
								<a href={mypg.url}>{mypg.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
