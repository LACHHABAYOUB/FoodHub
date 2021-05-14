import React, { useContext, useEffect, useState } from 'react';
import { APIConfig } from '../../store/APIConfig';
import OrderCard from '../myRestaurant/OrderCard';
import axios from 'axios'
import JwtUtil from '../../store/JwtUtil';

const Orders =(props)=>{
 
	const APIs = useContext(APIConfig); 
	const OrderLink = APIs.order;
	
	const headers = {
		'Access-Control-Allow-Origin': '*',      
		'Content-Type': 'application/json',   
		'Authorization': 'Bearer ' + JwtUtil.getToken()
	 }
	 
	const [posts, setPosts] = useState([]);
	useEffect(fetchPostsHandler, [props]); // This will be fetched when mounted
	
	function fetchPostsHandler() {
	
	   axios(OrderLink+'/restopending', { headers })
			.then(response => {
		//		console.log(response.data)
				setPosts(response.data.orders);
				})
			.catch(error => {
			
			})

	}

	const ordrs = posts.map(post => {
		return  	 <OrderCard
		image='/img/general/usr.png'
		imageAlt=''
		orderNumber={post.ordernumber}
		 
		deliveredDate={post.createdOn}
		orderTitle={post.username}
		address={post.address}
		orderProducts={post.itemslist}
		orderTotal={post.totalPrice.toFixed(2)}
		statusid={post.statusId}
		orderid={post.id}
		helpLink='#'
	 
	/>

});

    	return (
    		<>
    		    <div className='p-4 bg-white shadow-sm'>
	              <h4 className="font-weight-bold mt-0 mb-4"> Pending Orders</h4>
			     
			      {ordrs}
			    </div>
		    </>
    	);
    }
 
export default Orders;