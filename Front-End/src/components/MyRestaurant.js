import React, { useEffect } from 'react';
import {Switch,Route} from 'react-router-dom';
import {NavLink  } from 'react-router-dom';
import {Row,Col,Container } from 'react-bootstrap';
import Orders from './myRestaurant/Orders'; 
import Profile from './myRestaurant/Profile';
import EditProfileModal from './modals/EditProfileModal';
import Items from './myRestaurant/Items';

import JwtUtil from '../store/JwtUtil' 
      const MyRestaurant=(props)=>{
         
   function componentDidMount() {				
	 
      const token = JwtUtil.getToken();
      if (!token){
        
     
      props.history.push('/');
       }
   }
      useEffect(componentDidMount, [props]); 
	 
    	return (
    		<>
        <EditProfileModal 
        //show={this.state.showEditProfile} onHide={this.hideEditProfile}
        />
        <section className="section pt-4 pb-4 osahan-account-page">
           <Container>
              <Row>
                 <Col md={3}>
                    <div className="osahan-account-page-left shadow-sm bg-white h-100">
                      
                       <ul className="nav flex-column border-0 pt-4 pl-4 pb-4">
                       <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myrestaurant/profile"><i className="icofont-restaurant"></i> Profile</NavLink>
                          </li> 
                          <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myrestaurant/Items"><i class="icofont-culinary"></i> Items</NavLink>
                          </li>  

                          <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myrestaurant/orders"><i className="icofont-food-cart"></i> Pending</NavLink>
                          </li>  
                        
                         
                       </ul>
                    </div>
                 </Col>
                 <Col md={9}>
                  <Switch>
                     <Route path="/myrestaurant/profile" exact component={Profile} />    
                     <Route path="/myrestaurant/Items" exact component={Items} />                      
                     <Route path="/myrestaurant/orders" exact component={Orders} />                                         
                   </Switch>
                 </Col>
              </Row>
           </Container>
        </section>
    		</>
    	);
    }


export default MyRestaurant;