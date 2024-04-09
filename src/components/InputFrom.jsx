import React from "react";
import Header from "./Header";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Col, Button } from 'react-bootstrap';


	// 생일 데이터 : 년,월,일
	const BIRTHDAY_YEAR_LIST = Array.from({ length: 100 },(_, i) => `${i + 1925}년`,);
	const BIRTHDAY_MONTH_LIST = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);
	const BIRTHDAY_DAY_LIST = Array.from({ length: 31 }, (_, i) => `${i + 1}일`);

const InputFrom = () => {
	return (
		<>
		<Header />
		<div className="container">
			<div className="sec-box input_box">
				<div className="sec-body">
					<Form>
						{/* readOnly
						<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
							<Form.Label column sm="3">
								닉네임
							</Form.Label>
							<Col sm="8">
								<Form.Control plaintext readOnly defaultValue="email@example.com" />
							</Col>
						</Form.Group>*/}
					
						<Form.Group as={Row} className="mb-3" controlId="">
							<Form.Label column sm="2">
							닉네임
							</Form.Label>
							<Col sm="10">
							<Form.Control type="text" placeholder="필수 입력" />
							</Col>
						</Form.Group>
						
						<Form.Group as={Row} className="mb-3" controlId="">
							<Form.Label column sm="2">
							비밀번호
							</Form.Label>
							<Col sm="10">
								<Row>
									<Col><Form.Control type="password" placeholder="필수 입력" name="password"/></Col>
									<Col xs={2}><Button type="">중복 검사</Button></Col>
								</Row>
							</Col>
						</Form.Group>

						<Form.Group as={Row} className="mb-3" controlId="">
							<Form.Label column sm="2"></Form.Label>
							<Col sm="10">
								<Form.Label>
								최소 8자리 알파벳 대문자와 소문자, 숫자, 특수문자 등  두종류 이상 포함이 되도록 혼합해주세요.
								</Form.Label>
							</Col>
						</Form.Group>
						<Form.Group as={Row} className="mb-3" controlId="">
							<Form.Label column sm="2">
							이메일 *
							</Form.Label>
							<Col sm="10">
								<Row>
									<Col><Form.Control type="text" placeholder="필수 입력" /></Col>
									<Col xs="auto"> ~ </Col>
									<Col><Form.Control type="email" placeholder="이메일" /></Col>
									<Col xs={2}><Button type="">중복 검사</Button></Col>
								</Row>
							</Col>
						</Form.Group>
						<Form.Group as={Row} className="mb-3" controlId="">
							<Form.Label column sm="2">
							이메일 *
							</Form.Label>
							<Col sm="10">
								<Row>
									<Col><Form.Control type="text" placeholder="필수 입력" /></Col>
									<Col xs="auto"> @ </Col>
									<Col><Form.Control type="text" placeholder="필수 입력"/></Col>
									<Col>
									<Form.Select aria-label="Default select example">
										<option>직접입력</option>
										<option value="type">naver.com</option>
										<option value="google.com">google.com</option>
										<option value="nate.com">nate.com</option>
										<option value="kakao.com">kakao.com</option>
										</Form.Select>
									</Col>
									<Col xs={2}><Button type="">인증 번호</Button></Col>
								</Row>
							</Col>
						</Form.Group>
						<Form.Group as={Row} className="mb-3" controlId="">
							<Form.Label column sm="2">
							이메일 인증번호*
							</Form.Label>
							<Col sm="10">
							<Form.Control type="password" placeholder="필수 입력" />
							</Col>
						</Form.Group>
						<Form.Group as={Row} className="mb-3" controlId="">
							<Form.Label column sm="2">
							생년월일 *
							</Form.Label>
							<Col sm="10">
							<Form.Control type="date" placeholder="YYYY-MM-DD" />
							</Col>
						</Form.Group>
						<Form.Group as={Row} className="mb-3" controlId="">
							<Form.Label column sm="2">
							주소*
							</Form.Label>
							<Col sm="10">
								<Row>
									<Col xs={2}><Form.Control type="text" placeholder="필수 입력" /></Col>
									<Col><Form.Control type="email" placeholder="이메일" /></Col>
									<Col xs={2}><Button type="">주소 검색</Button></Col>
								</Row>
							</Col>
						</Form.Group>
						<Form.Group as={Row} className="mb-3" controlId="">
							<Form.Label column sm="2">
							상세주소 *
							</Form.Label>
							<Col sm="10">
							<Form.Control type="password" placeholder="필수 입력" />
							</Col>
						</Form.Group>
						<Form.Group as={Row} className="mb-3" controlId="">
							<Form.Label column sm="2">
							생일
							</Form.Label>
							<Col sm="10">
								<Row>
									<Col>
										<Form.Select aria-label="Default select example">
											{BIRTHDAY_YEAR_LIST.map((year, index) => (
												<option key={index}>{year}</option>
											))}
										</Form.Select>
									</Col>
									<Col>
										<Form.Select aria-label="Default select example">
										{BIRTHDAY_MONTH_LIST.map((month, index) => (
												<option key={index}>{month}</option>
											))}
										</Form.Select>
									</Col>
									<Col>
									<Form.Select aria-label="Default select example">
										{BIRTHDAY_DAY_LIST.map((month, index) => (
												<option key={index}>{month}</option>
											))}
										</Form.Select>
									</Col>
								</Row>
							</Col>
						</Form.Group>
						<Button type="">취소</Button>
						<Button type="">등록</Button>
					</Form>
				</div>
			</div>
		</div>
		</>
	)
	
};

export default InputFrom;