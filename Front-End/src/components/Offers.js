import React, { useContext, useEffect, useState } from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import PageTitle from './common/PageTitle';
import CouponCard from './common/CouponCard'; 
import { APIConfig } from '../store/APIConfig';
import axios from 'axios';

 
const Offers= (props)=>{


	const APIs = useContext(APIConfig);
	const orderLink = APIs.offers;
	const [posts, setPosts] = useState([]);
	
	function fetchPostsHandler() {
        const headers = {
            'Access-Control-Allow-Origin': '*',

        }
       
        axios(orderLink, { headers })
            .then(response => {
			   setPosts(response.data.restaurantOffers);
            })
            .catch(error => {
                
            })

    }

	   useEffect(() => {
		fetchPostsHandler();
    }, [props]);

	const rposts = posts.map(post => {
        
        return       <Col md={4}>
				<CouponCard 
				title= {post.name}
				couponCode={post.code} 
			 	restid={post.restaurant.id}
				 restname={post.restaurant.name}
				/>
		</Col>
		
    });



    return (
    		<>
	    		<PageTitle 
	    			title="Offers for you"
	    			subTitle="Explore top deals and offers exclusively for you!"
	    		/>
	    		<section className="section pt-5 pb-5">
			         <Container>
			            <Row>
			            
			         {rposts}
			             
			            </Row>
			            
			         </Container>
			    </section>
	    	</>
     );
    }



export default Offers;