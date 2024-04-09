
import * as React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';

const Contact = () => {
	return (
		<div className="container">
			<div className="sec-box login_box">
				<div className="sec-body">
					<Form>
						<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
							<Form.Label column sm="3">
							Email
							</Form.Label>
							<Col sm="8">
							<Form.Control plaintext readOnly defaultValue="email@example.com" />
							</Col>
						</Form.Group>
					
						<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
							<Form.Label column sm="3">
							Password
							</Form.Label>
							<Col sm="8">
							<Form.Control type="password" placeholder="Password" />
							</Col>
						</Form.Group>
					</Form>
				</div>
			</div>
		</div>
		
	);
};

export default Contact;