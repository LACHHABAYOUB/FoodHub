import React, { useContext, useEffect, useState } from 'react';
import {NavLink } from 'react-router-dom';
import {Navbar,Nav,Container,NavDropdown,Image} from 'react-bootstrap';
import DropDownTitle from '../common/DropDownTitle'; 
import Icofont from 'react-icofont';
 import JwtUtil from '../../store/JwtUtil';
 import jwt_decode from 'jwt-decode';
import Cart from './Cart';
import axios from 'axios';
import { APIConfig } from '../../store/APIConfig';

 
const Header = (props) => {

	const [state, setState] = useState({
		isNavExpanded: false,
		username: null,
	 
 }); 
 const [rest, setRest] = useState({
 
	hasrest:null,
	restimage:null,
})
const headers = {
	'Access-Control-Allow-Origin': '*',      
	'Content-Type': 'application/json',   
	'Authorization': 'Bearer ' + JwtUtil.getToken()
 }
 function componentDidMount() {		
 
	const token = JwtUtil.getToken();
	if (token){
		const decoded = jwt_decode(token);
		setState({ username: decoded.sub  });
	}
	else {
		setState({ username: null });
	}
	 
	axios.get(UserRestaurent, {headers})
	.then(response => {    
	   if(response.data)
		{  
			setRest({ hasrest:response.data.name,restimage:response.data.profileImage });
		 
		}
		else
		{
			setRest({});
		}
	})
	.catch(error => {
	
	});


	 
}

const APIs = useContext(APIConfig);
const UserRestaurent = APIs.UserRestaurent;

 

useEffect(componentDidMount, [props]); 
 

    const closeMenu = () => {
      setState({ isNavExpanded: false });
    }

   
	function handleLogout(){
		JwtUtil.clearToken();
		setState({ username: null });
	}

 
 
    	return (
    		<div  	>
			<Navbar      color="light" expand='lg' className="navbar-light osahan-nav shadow-sm">
			   <Container>

			      <Navbar.Brand eventKey={0} as={NavLink} to="/">
				            <Image src="/img/general/FoodHubsmall.png" alt='' />
				  </Navbar.Brand>
			    
				  <Navbar.Toggle/>
			      <Navbar.Collapse id="navbarNavDropdown">
			         <Nav activeKey={0} className="ml-auto" onSelect={closeMenu}>
					
						<Nav.Link eventKey={0} as={NavLink} to="/" exact >
			               Home 
			            </Nav.Link>

			            <Nav.Link eventKey={1} as={NavLink}   to="/offers">
             				<Icofont icon='sale-discount'/> Offers  
			            </Nav.Link>
			            

						{state.username?										            
							<React.Fragment>
							<NavDropdown alignRight
			            	title={
			            		<DropDownTitle 
			            			className='d-inline-block' 
			            			image="img/general/usr.png"
			            			imageAlt='user'
			            			imageClass="nav-osahan-pic rounded-pill"
			            			title={state.username}
			            		/>
			            	}
			            >
					    	<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" to="/myaccount/profile"><Icofont icon='icofont-user'/> Profile</NavDropdown.Item>
				 		 
							<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" to="/myaccount/orders"><Icofont icon='food-cart'/> Orders</NavDropdown.Item>
							<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" to="/myaccount/pending"><Icofont icon='food-cart'/> Pending</NavDropdown.Item>
							<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" onClick={() => handleLogout()} to="/"><Icofont icon='icofont-logout'/> Logout</NavDropdown.Item>
				 		  </NavDropdown>
 
						  {rest.hasrest&&
						   <NavDropdown alignRight
			            	title={
			            		<DropDownTitle 
			            			className='d-inline-block' 
			            			image={"img/uploaded/"+rest.restimage}
			            			imageAlt='user'
			            			imageClass="nav-osahan-pic rounded-pill"
			            			title={'Admin ('+rest.hasrest+')'}
			            		/>
			            	}
			            >
					    	<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" to="/myrestaurant/profile"><Icofont icon='icofont-restaurant'/> Info</NavDropdown.Item>
							<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" to="/myrestaurant/Items"><i class="icofont-culinary"></i> Items</NavDropdown.Item>
							<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" to="/myrestaurant/orders"><Icofont icon='food-cart'/> Orders</NavDropdown.Item>
						 
						 	  </NavDropdown>
						}

			            <Cart/>
			            
							</React.Fragment>:
						

					
							<Nav.Link eventKey={1} as={NavLink} activeclassname="active" to="/login">
							<Icofont icon='login'/> Login
							</Nav.Link>
						
					}

					 </Nav>
			      </Navbar.Collapse>
			   </Container>
			</Navbar>
			</div>
		);
	}
 
export default Header;