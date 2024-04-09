import React from "react";
import Button from 'react-bootstrap/Button';
import Header from "../components/Header";

const Login = () => {
	return (
		<>
		<Header />
		<div className="container">
			<div className="sec-box login_box">
				<div className="sec-body">
					{/* 로그인 박스 */}
					<table className="table write-table">
					<colgroup>
						<col style={{width: '10%'}} />
						<col />
					</colgroup>
					<tbody>
						<tr>
						<td scope="row">
							<input type="text" className="form-control" id placeholder="이메일 입력" />
						</td>
						</tr> 
						<tr>
						<td scope="row">
							<input type="text" className="form-control" id placeholder="비밀번호" />
						</td>
						</tr>
						<tr>
						<td scope="row" className="row justify-content-between m-0">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
								<label className="form-check-label" htmlFor="inlineRadio1">자동 로그인</label>
							</div>
							<div className="login_link_btn">
								<a href="#">회원가입</a>
								<span>|</span>
								<a href="#">비밀번호 찾기</a>
							</div>
						</td>
						</tr> 
						<tr>
						<th scope="row" colSpan={2}>
							<div className="d-grid gap-2">
								<Button className="btn btn-primary"  variant="primary" size="md">
									로그인
								</Button>
							</div>
							{/*<button  size="lg">로그인</button>*/}
						</th>
						</tr>
						<tr>
						<th scope="row" colSpan={2}>
							<div className="login_line">
								또는
							</div>
						</th>
						</tr>
						<tr>
						<th scope="row" colSpan={2}>
						<div className="d-grid gap-2">
								<Button className="btn kakao_btn" size="md">
									카카오 로그인
								</Button>
							</div>
						</th>
						</tr>
					</tbody>
					</table>
				</div>
			</div>
		</div>
		</>
	)
	
};

export default Login;