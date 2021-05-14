import React, { useContext, useEffect, useState } from 'react';
import { APIConfig } from '../../store/APIConfig';
import OrderCard from '../common/OrderCard';
import axios from 'axios'
import JwtUtil from '../../store/JwtUtil';
 	const Pending  = (props) => {

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
		 
		   axios(OrderLink+'/pending', { headers })
				.then(response => {
					setPosts(response.data.orders);
					 
				})
				.catch(error => {
				
				})
	
		}


  const ordrs = posts.map(post => {
          return  	<OrderCard  
		orderNumber={1000+post.id}
		orderDate={post.createdOn}
	 	orderTitle={post.restaurantName}
		address={post.address}
		orderProducts={post.itemslist}
		orderTotal={post.totalPrice} 
		status={post.statusName}
	/>

});

    	return (
    		<>
    		    <div className='p-4 bg-white shadow-sm'>
	              <h4 className="font-weight-bold   mt-0 mb-4">Pending </h4>
			    {ordrs}
			      
			    </div>
		    </>
    	);
    } 



export default Pending;