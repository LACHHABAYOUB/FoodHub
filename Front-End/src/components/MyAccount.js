import React, { useEffect, useState } from 'react';
import {Switch,Route} from 'react-router-dom';
import {NavLink } from 'react-router-dom';
import {Row,Col,Container,Image} from 'react-bootstrap';
import Orders from './myaccount/Orders';
import Profile from './myaccount/Profile';
import EditProfileModal from './modals/EditProfileModal';
import JwtUtil from '../store/JwtUtil'
import jwt_decode from 'jwt-decode';
import Pending from './myaccount/Pending';

 

const MyAccount= (props) => {
  

   const [state, setState] = useState({
		isNavExpanded: false,
		username: null
 }); 

   function componentDidMount() {				
	 
      const token = JwtUtil.getToken();
      if (token){
         const decoded = jwt_decode(token);
        
         setState({ username: decoded.sub });
      }
      else {
      props.history.push('/');
         //setState({ username: null });
      }
   }
      useEffect(componentDidMount, [props]); 
	 
    	return (
    		<>
        <EditProfileModal //show={this.state.showEditProfile}
         //onHide={this.hideEditProfile}
         />
        <section className="section pt-4 pb-4 osahan-account-page">
           <Container>
              <Row>
                 <Col md={3}>
                    <div className="osahan-account-page-left shadow-sm bg-white h-100">
                       <div className="border-bottom p-4">
                          <div className="osahan-user text-center">
                             <div className="osahan-user-media">
                                <Image className="mb-3 rounded-pill shadow-sm mt-1" src="/img/general/usr.png" alt="gurdeep singh osahan" />
                                <div className="osahan-user-media-body">
                                   <h6 className="mb-2">{state.username}</h6>
                               </div>
                             </div>
                          </div>
                       </div>
                       <ul className="nav flex-column border-0 pt-4 pl-4 pb-4">
                       <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myaccount/profile"><i className="icofont-user"></i> Profile</NavLink>
                          </li> 
                          <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myaccount/orders"><i className="icofont-food-cart"></i> Orders</NavLink>
                          </li>  
                          <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myaccount/Pending"><i className="icofont-food-cart"></i> Pending Orders</NavLink>
                          </li>  
                         
                       </ul>
                    </div>
                 </Col>
                 <Col md={9}>
                  <Switch>
                  <Route path="/myaccount/profile" exact component={Profile} />
                    
                     <Route path="/myaccount/orders" exact component={Orders} />
                     <Route path="/myaccount/Pending" exact component={Pending} /> 
                   </Switch>
                 </Col>
              </Row>
           </Container>
        </section>
    		</>
    	);
    }
 


export default MyAccount;