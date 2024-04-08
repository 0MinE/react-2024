import React from "react";
import sec0301 from '../assets/img/sample/img03_01.png'
import sec0302 from '../assets/img/sample/img03_02.png'
import sec0303 from '../assets/img/sample/img03_03.png'
import sec0401 from '../assets/img/sample/img04_01.png'
import sec0402 from '../assets/img/sample/img04_02.png'
import sec0403 from '../assets/img/sample/img04_03.png'
import sec0501 from '../assets/img/sample/img05_01.png'
import sec0502 from '../assets/img/sample/img05_02.png'
import sec0503 from '../assets/img/sample/img05_03.png'
import sec0504 from '../assets/img/sample/img05_04.png'
import sec0505 from '../assets/img/sample/img05_05.png'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


const Main = ({ children }) => {
	return (
	<main id="main" role="main">
		{children}
	<div id="content" className="content main-cocontent">
	{/* write */}
	<div className="sec-box sec01">
		<div className="sec-body">
		<Carousel data-bs-theme="dark">
			<Carousel.Item>
				<img
				className="d-block w-100"
				src="../assets/img/sample/img03_01.png"
				alt="First slide"
				/>
				<Carousel.Caption>
				<h5>First slide label</h5>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
				className="d-block w-100"
				src="../assets/img/sample/img03_01.png"
				alt="Second slide"
				/>
				<Carousel.Caption>
				<h5>Second slide label</h5>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
				className="d-block w-100"
				src="../assets/img/sample/img03_01.png"
				alt="Third slide"
				/>
				<Carousel.Caption>
				<h5>Third slide label</h5>
				<p>
					Praesent commodo cursus magna, vel scelerisque nisl consectetur.
				</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
		</div>
	</div>
	<div className="sec-box sec02">
		<div className="sec-body">
		<span className="mb-4">중고 경매 </span>
		<div className="row pb-3">
			<h2 className="col"><strong>진행중인 경매 부터 예정 경매까지 <span className="text-primary">한눈에 확인</span> 하세요.</strong></h2>
			<a href="#" className="btn col-auto ">더보기</a>
		</div>
		<ul className="sec02_list">
			<li>
			<p>03월 19 (화)</p>
			<p className="text-right"><strong>04건</strong></p>
			</li>
			<li>
			<p>03월 20 (수)</p>
			<p className="text-right"><strong>10건</strong></p>
			</li>
			<li>
			<p>03월 21 (목)</p>
			<p className="text-right"><strong>03건</strong></p>
			</li>
			<li>
			<p>03월 22 (금)</p>
			<p className="text-right"><strong>22건</strong></p>
			</li>
		</ul>
		</div>
	</div>
	<div className="sec-box sec03">
		<div className="sec-body">
			<aside className="sec03-left w-25">
				<h2><strong>오픈 예정 경매</strong></h2>
				<p>
				정해진 시간에 오픈 예정인 경매상품을
				먼저 만나보실 수 있습니다.
				</p>
				<a href="#" className="btn btn-primary">더보기</a>
			</aside>
			<div className="sec03-right">
				<div className="d-flex justify-content-between">
					<Card>
						<img src={sec0301} alt="" className="card-img-top"/>
						<Card.Body>
							<Card.Title className="card-title">스즈키 gsx-r125 gp블루</Card.Title>
							<Card.Text className="card-text">
							잘타지도 않아서 관리 잘된 오토바이 입니다 오른쪽 제꿍 기스 살짝 있는거 빼면 카울 깨끗하고 구동계 는 15천 때 갈아서 아직 여유 충분히 있습니다 서류 3장 있어요
							</Card.Text>
							<ul className="stretched-link row">
									<li className="col">
									<span>관심10명</span>
									<p>경매예정 </p>
									</li>
									<li className="col text-right">
									<span>시작가</span>
									<p>2,650,000원</p>
									</li>
								</ul>
						</Card.Body>
					</Card>
					<Card>
						<img src={sec0303} alt="" className="card-img-top"/>
						<Card.Body>
							<Card.Title className="card-title">한정판 스타워스 시리즈</Card.Title>
							<Card.Text className="card-text">
							1월에 대전신세계에서 구입햇습니다.
							주종변경 및 장식장 자리협소로 판매합니다
							</Card.Text>
							<ul className="stretched-link row">
									<li className="col">
									<span>관심10명</span>
									<p>경매예정 </p>
									</li>
									<li className="col text-right">
									<span>시작가</span>
									<p>2,650,000원</p>
									</li>
								</ul>
						</Card.Body>
					</Card>
					<Card>
						<img src={sec0302} alt="" className="card-img-top"/>
						<Card.Body>
							<Card.Title className="card-title">레트로 고전 카메라</Card.Title>
							<Card.Text className="card-text">
							예전에 몇번 사용하고 보관해두어서 잔기스하나 없습니다.(구입당시 박스안에 보관했습니다) 충전기 포함입니다.
							</Card.Text>
							<ul className="stretched-link row">
									<li className="col">
									<span>관심10명</span>
									<p>경매예정 </p>
									</li>
									<li className="col text-right">
									<span>시작가</span>
									<p>2,650,000원</p>
									</li>
								</ul>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	</div>
	<div className="sec-box sec04">
		<div className="sec-body">
		<div className="text-center">
			<span>인기 순위</span>
			<h2><strong>실시간 경매</strong></h2>
			<p>실시간 경매 순위 지금 바로 참여해보세요</p>
		</div>
		<div className="row">
			<div className="col">
			<figure>
				<img src={sec0401} className="card-img-top"  alt="실시간 경매 1순위" />
				<span>1위</span>
			</figure>
			<p className="card-title">입생로랑 미니호보백</p>
			<p className="card-text">선물 받았는데 도저히 제 스타일은 아니라 내놓아요 버클에 있는 흰색 포장지만 제거된 상태고 한번도 들지 않았습니다 가죽입니다.</p>
			<div className="progress">
				<div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '80%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
			</div>
			<p className="pt-2">남은시간 : 1일 23시 12분</p>
			</div>
			<div className="col">
			<figure>
				<img src={sec0402} className="card-img-top"  alt="실시간 경매 2순위" />
				<span>2위</span>
			</figure> 
			<p className="card-title">까르띠에</p>
			<p className="card-text">미국에서 선물받은건데 베터리 교환하셔야 합니다.
				정품 보증서 있습니다.</p>
			<div className="progress">
				<div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '50%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
			</div>
			<p className="pt-2">남은시간 : 1일 23시 12분</p>
			</div>
			<div className="col">
			<figure>
				<img src={sec0403} className="card-img-top"  alt="실시간 경매 3순위" />
				<span>3위</span>
			</figure>
			<p className="card-title">금 루이비통 팔찌 급처합니당!!!</p>
			<p className="card-text">하자나 기스끊어짐 아예 없구요 착용기간 1달입니당 줄은 길고 조절가능해서 손목 얇던 두껍던 다 사용가능하세요!!</p>
			<div className="progress">
				<div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
			</div>
			<p className="pt-2">남은시간 : 1일 23시 12분</p>
			</div>
		</div>
		</div>
	</div>
	<div className="sec-box sec05">
		<div className="sec-body">
		<div className="text-center">
			<h2 className="mb-4"><strong>최근 낙찰 물품</strong></h2>
		</div>
		<ul className="d-flex justify-content-between">
			<li className="card">
				<img src={sec0501} className="card-img-top"  alt="..." />
				<div className="card-body">
					<h5 className="card-title">#위닉스 제습기</h5>
					<p>30,000원</p>
				</div>
			</li>
			<li className="card">
				<img src={sec0502} className="card-img-top"  alt="..." />
				<div className="card-body">
					<h5 className="card-title">#Z플립 3</h5>
					<p>100,000원</p>
				</div>
			</li>
			<li className="card">
				<img src={sec0503} className="card-img-top"  alt="..." />
				<div className="card-body">
					<h5 className="card-title">#삼성 스마트 티비 55인치</h5>
					<p>50,000원</p>
				</div>
			</li>
			<li className="card">
				<img src={sec0504} className="card-img-top"  alt="..." />
				<div className="card-body">
					<h5 className="card-title">#더함 55인치 TV + 스탠드</h5>
					<p>85,000원</p>
				</div>
			</li>
			<li className="card">
				<img src={sec0505} className="card-img-top"  alt="..." />
				<div className="card-body">
					<h5 className="card-title">#루이비통 지갑</h5>
					<p>250,000원</p>
				</div>
			</li>
		</ul>
		</div>
	</div>
	</div>

	</main>
	);
};

export default Main;