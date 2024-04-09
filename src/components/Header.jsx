import React from "react";
import pvLogo from '../assets/img/PV_logo.png'
import { Link } from 'react-router-dom';

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
						<li>
							<Link to="/">경매하기</Link>
						</li>
						<li>
							<Link to="/tables">커뮤니티</Link>
						</li>
						<li>
							<Link to="/from">고객센터</Link>
						</li>
					</ul>
				</nav>
				<div className="header_mypg">
					<ul>
						<li>
							<Link to="/">마이 페이지</Link>
						</li>
						<li>
							<Link to="/login">로그인</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
