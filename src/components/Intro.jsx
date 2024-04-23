import React from "react";

import about from "../assets/img/pl01.png";
const introText = {
	title: "이벤트 작동",
	desc: ["아주 잘", "되고 있숩니다만", "아직 멀었쬬"],
};
const Intro = () => {
	return (
		<section id="intro">
			<div class="intro_inner">
				<svg viewBox="0 0 1320 300" class="intro_title">
					<text x="50%" y="50%" dy="40px" text-anchor="middle">{introText.title}</text>
				</svg>
				<div class="intro_border" aria-hidden="true">
					
				</div>
				<div class="intro_text">
					<div class="text">
					<div>
						{introText.desc[0]}</div>
						<div>{introText.desc[1]}</div>
						<div>{introText.desc[2]}</div>
					</div>
					<div class="img">
						<img src={about} alt="어바웃" />
					</div>
				</div>
				<div class="intro_lines bottom" aria-hidden="true">
					<span class="line"></span>
					<span class="line"></span>
					<span class="line"></span>
					<span class="line"></span>
					<span class="line"></span>
					<span class="line"></span>
					<span class="line"></span>
				</div>
			</div>
		</section>
	);
};

export default Intro;