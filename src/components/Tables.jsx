import React from "react";
import Table from 'react-bootstrap/Table';
import Header from "../components/Header";

const Tables = () => {
    return (
		<>
		<Header />
		<div className="container">
			<div className="sec-box">
				<div className="sec-body">
					{/* 로그인 박스 */}
					<Table className="table">
						<thead className="thead-light">
							<tr>
								<th scope="col">번호</th>
								<th scope="col">제목</th>
								<th scope="col">작성자</th>
								<th scope="col">작성일</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							<th scope="row">1</th>
							<td className="text-left">
								<a href="sub-board-detail.html">2023년 한국창업학회와 함께하는 오픈 이노베이션 제6기 '청년 에너지드림 리그' 공고 시행(기간연장 ~6.16)</a>
								{/* 새로운 게시글 */}
								<span className="new-text">new</span>
							</td>
							<td>관리자</td>
							<td>2023-06-28 10:10:10</td>
							</tr>
							<tr>
							<th scope="row">1</th>
							<td className="text-left">
								<a href="sub-board-detail.html">2023년 한국창업학회와 함께하는 오픈 이노베이션 제6기 '청년 에너지드림 리그' 공고 시행(기간연장 ~6.16)</a>
								{/* 댓글 */}
								<span className="cnt_cmt">3</span>
							</td>
							<td>관리자</td>
							<td>2023-06-28 10:10:10</td>
							</tr>
							<tr>
							<th scope="row">1</th>
							<td className="text-left">
								<a href="sub-board-detail.html">2023년 한국창업학회와 함께하는 오픈 이노베이션 제6기 '청년 에너지드림 리그' 공고 시행(기간연장 ~6.16)</a>
								{/* 댓글 */}
								<span className="cnt_cmt">1</span>
							</td>
							<td>관리자</td>
							<td>2023-06-28 10:10:10</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>
		</div>

		</>
	)
};

export default Tables;