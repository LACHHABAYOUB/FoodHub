import React, { useContext, useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container,Form } from 'react-bootstrap';
import axios from 'axios'; 
import { APIConfig } from '../store/APIConfig';
import JwtUtil from '../store/JwtUtil'


const Login = (props) => {

	const uidRef = useRef();
	const pwdRef = useRef();

	const APIs = useContext(APIConfig);
	const authenticationEndpoint = APIs.Authentication;
	
    const [status, setstatus] = useState(''); 
    
	function login(){
		const data = {uid: uidRef.current.value, pwd: pwdRef.current.value};
		const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
		 	axios.post(authenticationEndpoint, data, headers)
			.then((response) => {
				 
				 JwtUtil.storeToken(response.data.token);
				 props.history.push('/');
			})
			.catch((error) => {
				setstatus("Invalid Credentials!")
				 
			});
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
						 <h3 className="login-heading mb-4">Welcome back!</h3>
							<Form>
								<div className="form-label-group">
									<Form.Control type="text" id="inputEmail" placeholder="Email address" ref={uidRef} />
									<Form.Label htmlFor="inputEmail">User name</Form.Label>
								</div>
								<div className="form-label-group">
									<Form.Control type="password" id="inputPassword" placeholder="Password" ref={pwdRef} />
									<Form.Label htmlFor="inputPassword">Password</Form.Label>
								</div>

							 
								{status &&	<div className="text-center text-danger pt-3 pb-3">
								<div class="alert alert-danger" role="alert">
								{status}     </div>	
								</div>}

								<Link onClick={() => login()} className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Sign in</Link>
								
								<Link to="/" className="btn btn-lg btn-outline-info btn-block btn-login text-uppercase font-weight-bold mb-2">Skip to Menu</Link>
								
								<div className="text-center pt-3">
									Don’t have an account? <Link className="font-weight-bold" to="/register">Sign Up</Link>
								</div>
								
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


export default Login;