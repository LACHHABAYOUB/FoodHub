import React, { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container, Button,Tab,Nav,Image,Badge} from 'react-bootstrap';
 
import CheckoutItem from './common/CheckoutItem';
 
import QuickBite from './common/QuickBite'; 
import Icofont from 'react-icofont';
import { matchPath } from 'react-router'
import { APIConfig } from '../store/APIConfig';
  
 
import axios from 'axios';

	const Detail  = (props) => {

			
		const APIs = useContext(APIConfig);
		const Restlink = APIs.restaurant;
		const Itemslink = APIs.restaurantItem;

		const [restaurant, setrestaurant] = useState({});
		 const [items, setitems] = useState([]);

	 	 const [groupedItem, setgroupedItem] = useState({});
		 const [selecteditems, setselecteditems] = useState([]);
	 	 
		 const [selectedrestaurant, setselectedrestaurant] = useState({});
	 	 
		const match = matchPath(props.history.location.pathname, {
			path: '/Detail/:id',
			exact: true,
			strict: false
		})

		useEffect(fetchRestaurantHandler, [props]);  
    
		function fetchRestaurantHandler() {
		
			if(localStorage.getItem("cartItems")!=null)
			{
			  setselecteditems(JSON.parse(localStorage.getItem("cartItems")));
			}
			if(localStorage.getItem("cartrestaurant")!=null)
			{
				setselectedrestaurant(JSON.parse(localStorage.getItem("cartrestaurant")) );
			}

			const headers = {
				'Access-Control-Allow-Origin': '*', 
			} 
			  axios(Restlink+match.params.id, { headers })
				.then(response => {
					console.log(response.data.restaurant)
				 	setrestaurant(response.data.restaurant);
				 })
				.catch(error => {    
				})

				axios(Itemslink+match.params.id, { headers })
				.then(response => {
				  
					 let group = response.data.restaurantItems.reduce((r, a) => {
					 	r[a.categoryName] = [...r[a.categoryName] || [], a];
						return r;
					   }, {});
					   setgroupedItem(group);
					      
					})
				.catch(error => {    
				})
 
		}
 

		  function fetchItemsHandler() {
			  
			const headers = {
				'Access-Control-Allow-Origin': '*', 
			} 
				axios(Itemslink+match.params.id, { headers })
			.then(response => {
				if(localStorage.getItem("cartItems")!==null)
			   {
			 	let slt=JSON.parse(localStorage.getItem("cartItems"));
				if(slt!==null)
				{
				let newList =[];
				slt.map(element => { 
				newList.push( response.data.restaurantItems.find((item) => item.id === element.idx));
			 
				});
				setitems(newList);
				 
			  }
			 }
		  });
		 
		}
		 
		 useEffect(fetchItemsHandler, [props]); 

	
		 
 const  getQty = ({id,quantity}) => {
     
		let idx = selecteditems.findIndex((obj => obj.idx === id));
		if(idx>-1)
		{ 
			selecteditems[idx].qty=quantity;
			 if(quantity>0)
			{selecteditems[idx].qty=quantity;}
			else
			{selecteditems.splice(idx, 1)}
		}else
		{
			selecteditems.push( {
				idx: id,
				qty: quantity
			}); 
		}
		if(selecteditems.length>0  )
		{
			 localStorage.setItem("cartrestaurant", JSON.stringify(
				{
					restid: match.params.id,
					name: restaurant.name,
					address:restaurant.address,
				}
				));
			 
		}else
		{
			localStorage.removeItem("cartrestaurant");
		}
		
		props.history.push(props.match.url+'/'+match.params.id);
		
		localStorage.setItem("cartItems", JSON.stringify(selecteditems));
		 
 }
 

	
	const checkout =  ()=> { 
		
				return <div className="bg-white rounded shadow-sm mb-2">
				{ 
			  items.map(item => {
						   
			   return  <CheckoutItem 
					 itemName={item.name}
				 price={item.price}
				 priceUnit="$"
				 id={item.id}
				 qty={selecteditems?(selecteditems.find(o => o.idx === item.id)? selecteditems.find(o => o.idx === item.id).qty:0):0}
				 show={true}
				 minValue={0}
				 maxValue={7}
				 getValue={getQty}
				 />
			 }) }
		 
				 <div className="mb-2 bg-white rounded p-2 clearfix">
				 <Image fluid className="float-left" src="/img/wallet-icon.png" />
				 <h6 className="font-weight-bold text-right mb-2">Subtotal : <span className="text-danger">$  {items.reduce((n, {price}, index ) => n + price *(selecteditems[index]?selecteditems[index].qty:0), 0).toFixed(2)}</span></h6>
			  
			 </div>
			 </div>  
			}
		
 
	const menu= 	Object.keys(groupedItem).map(key => {
	  
	return  <Col md={12}>
				<h5 className="mb-4 mt-3 col-md-12">{key}
	 <small className="h6 text-black-50"> {groupedItem[key].length} Item(s)</small>
	  </h5>
	  <div className="bg-white rounded border shadow-sm mb-4">
 
	  { groupedItem[key].map(post => {
			return   <QuickBite 
					id={post.id} 
				    title={post.name}
					price={post.price}
					priceUnit='$'
					getValue= { getQty }
					qty={selecteditems?(selecteditems.find(o => o.idx === post.id)?selecteditems.find(o => o.idx === post.id).qty:0):0}
					badgeVariant= {post.typeName}  
					disabled= { items.filter(s=>s===undefined).length>0 ?true:false}//in case the selected items don't match with the current page restaurant menu disable +- button
			   />
	 	})}

	 </div>
	 </Col>
		
	}); 
	 
	 
    	return (
		<>
    	  <section className="restaurant-detailed-banner">
	         <div className="text-center">
	            <Image fluid className="cover" src={'/img/uploaded/'+restaurant.coverImage} style={{width:"100%" ,height:"250px"}}/> 
	        </div>
	         <div className="restaurant-detailed-header">
	            <Container>
	               <Row className="d-flex align-items-end">
	                  <Col md={8}>
					    
	                     <div className="restaurant-detailed-header-left">
	                     <Image fluid className="mr-3 float-left" alt="osahan" src={"/img/uploaded/"+ restaurant.profileImage}/>
	                       <h2 className="text-white">{restaurant.name}</h2>
	                        <p className="text-white mb-1"><Icofont icon="location-pin" /> {restaurant.address}  
	                        </p>
	                        <p className="text-white mb-0"><Icofont icon="food-cart" />  {restaurant.smalldescription}  
	                        </p>
	                     </div>
	                  </Col>
	                  <Col md={4}>
	                     <div className="restaurant-detailed-header-right text-right">
	                        
	                     </div>
	                  </Col>
	               </Row>
	            </Container>
	         </div>
	          
	      </section>

          <Tab.Container defaultActiveKey="first">
		  <section className="offer-dedicated-nav bg-white border-top-0 shadow-sm">
		         <Container>
		            <Row>
		               <Col md={12}>
		                  <span className="restaurant-detailed-action-btn float-right">

							  {restaurant.hasVeg&&
							    <Button variant='light' size='sm' className="border-light-btn mr-1" type="button"><i className="icofont-cauli-flower text-success"  />  Vegi Menu</Button>
		               
		                    }
		                     {restaurant.hasChicken &&
							    <Button variant='light' size='sm' className="border-light-btn mr-1" type="button"><i className="icofont-chicken text-warning"  />  Chicken Menu </Button>
		                    }
 							 {restaurant.hasMeat &&
							    <Button variant='light' size='sm' className="border-light-btn mr-1" type="button"><i className="icofont-cow-head text-danger"   />  Meat Menu </Button>
		                    }
 							{restaurant.hasfish &&
							    <Button variant='light' size='sm' className="border-light-btn mr-1" type="button"><i   className='icofont-fish text-info' />  Chicken Menu </Button>
		                    }
		                  </span>
		                  <Nav  id="pills-tab">
		                     <Nav.Item>
		                        <Nav.Link eventKey="first">Order Online</Nav.Link>
		                     </Nav.Item>
		                  
		                     <Nav.Item>
		                        <Nav.Link eventKey="second">Restaurant Info</Nav.Link>
		                     </Nav.Item> 
		                   
		                  </Nav>
		               </Col>
		            </Row>
		         </Container>
	      	</section>
		      <section className="offer-dedicated-body pt-2 pb-2 mt-4 mb-4">
		        <Container>
		            <Row>
		                <Col md={8}>
	                  		<div className="offer-dedicated-body-left">
							    <Tab.Content className='h-100'>
						            <Tab.Pane eventKey="first">
						       		   <Row>
			                           

										  {menu}
			                           </Row>
			                        	</Tab.Pane>
									 
						            <Tab.Pane eventKey="second">
						            	<div id="restaurant-info" className="bg-white rounded shadow-sm p-4 mb-4">
			                              <div className="address-map float-right ml-5">
			                                 <div className="mapouter">
			                                    <div className="gmap_canvas">
			                                    <iframe title='addressMap' width="300" height="170" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=9&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div>
			                                 </div>
			                              </div>
			                              <h5 className="mb-4">Restaurant Info</h5>
			                              <p className="mb-3"> {restaurant.smallDescription}
			                              </p>
			                              <p className="mb-2 text-black"><Icofont icon="phone-circle text-primary mr-2" />{restaurant.contact}</p>
			                              <p className="mb-2 text-black"><Icofont icon="clock-time text-primary mr-2" /> Delivery Time    {restaurant.deliveredTime}
			                                 <Badge variant="success" className='ml-1'> OPEN NOW </Badge>
			                              </p>
			                           
			                              <hr className="clearfix" />
			                              <h5 className="mt-4 mb-4">More Info</h5>
			                              <p className="mb-3"> {restaurant.description}</p>
			                              
			                           </div>
						          	</Tab.Pane>
						              </Tab.Content>
						    </div>
						</Col>
		               <Col md={4}>
						   
						{items.filter(s=>s===undefined).length>0 ?//in case the selected items don't match with the current page restaurant menu show this message
						<div class="alert alert-danger" role="alert">
						<Image fluid className="img-fluid center" src="/img/general/FoodHubsmall.png" />	<br/> 	<br/> You are only allowed to  Checkout from one restaurant only! 
				  		<Link to={"/detail/"+selectedrestaurant.restid} className="btn btn-danger btn-block btn-lg mt-2">Go to my Order</Link>
   							 
		 				</div>:
		               	<div className="generator-bg rounded shadow-sm mb-4 p-4 osahan-cart-item">
	                     
                           <h5 className="mb-1 text-white">Your Order
                           </h5>
                           <p className="mb-4 text-white">{  selecteditems.reduce((n, {qty} ) => n  + qty,0)} Items</p>
			 
			  				{items.filter(s=>s!==undefined).length>0 && selecteditems.length>0  && checkout()}
	                     	 
		                     
	              		 
	               
                     	 <Link to="/checkout" className="btn btn-success btn-block btn-lg">Checkout
                     	 <Icofont icon="long-arrow-right" />
						  </Link>
					      <div className="pt-2"></div>
		                
		   				 
		   				</div>}
		               </Col>
					</Row>
				</Container>
		      </section>

	      </Tab.Container>
	    </>
    	);

		}

export default Detail;