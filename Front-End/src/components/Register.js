import React, { useContext, useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container, Form} from 'react-bootstrap';
import axios from 'axios'
import { APIConfig } from '../store/APIConfig';
import JwtUtil from '../store/JwtUtil'


const Register = (props) => {

	const uidRef = useRef();
	const pwdRef = useRef();
	const confirmRef = useRef();
	
    const [status, setstatus] = useState(''); 
    
	const APIs = useContext(APIConfig);
	const userEndpoint = APIs.Authentication;
	
	function handleSignup(){
		const uid = uidRef.current.value;
		const pwd = pwdRef.current.value;
		const confirm = confirmRef.current.value;

		const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
		 	if (confirm && confirm === pwd && confirm.length > 0){
			axios.post(userEndpoint+'/create', {uid, pwd}, headers).then(response => {

				if(response.data.valid){
				JwtUtil.storeToken(response.data.token);
				props.history.push('/myaccount/profile');}
				else{
					setstatus("User already exist!");
				}
	 
				 
			})
			.catch (err => {
				setstatus("User already exist!");
			})
		}
		else {
			
			setstatus("Passwords are not matching");
		}
	}

	
	return (
		<Container fluid className='bg-white'>
			<Row>
			<Col md={4} lg={6} className="d-none d-md-flex bg-image"></Col>
	            <Col md={8} lg={6}>
			
				<div className="login d-flex align-items-center py-5">
					<Container>
						<Row>
						<Col md={9} lg={8} className="mx-auto pl-5 pr-5">
						 	<h3 className="login-heading mb-4">New Buddy!</h3>
							<Form>
								<div className="form-label-group">
									<Form.Control ref={uidRef} type="text" id="inputEmail" placeholder="User name" />
									<Form.Label htmlFor="inputEmail">User name</Form.Label>
								</div>
								<div className="form-label-group">
									<Form.Control ref={pwdRef} type="password" id="inputPassword" placeholder="Password" />
									<Form.Label htmlFor="inputPassword">Password</Form.Label>
								</div>
								<div className="form-label-group mb-4">
									<Form.Control ref={confirmRef} type="password" id="inputPromo" placeholder="Confirm Password" />
									<Form.Label htmlFor="inputPassword">Confirm Password</Form.Label>
								</div>

								{status &&	<div className="text-center text-danger pt-3 pb-3">
								<div class="alert alert-danger" role="alert">
								{status}     </div>	
								</div>}
		
								<Link onClick={() => handleSignup()} className="btn btn-lg btn-outline-success btn-block btn-login text-uppercase font-weight-bold mb-2">Sign Up</Link>
								<Link to="/login" className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Back to Sign In</Link>
							 
							</Form>
						</Col>
						</Row>
					</Container>
				</div>
			</Col>
			</Row>
		</Container>
	);
    

}


export default Register;