import React, { useContext, useEffect, useState } from 'react';
import {Row,Col,Container} from 'react-bootstrap'; 
import TopSearch from './home/TopSearch'; 
import CardItem from './common/CardItem';
import SectionHeading from './common/SectionHeading'; 
import axios from 'axios';
import { APIConfig } from '../store/APIConfig';
 
	const Index  = (props) => {
 
		const APIs = useContext(APIConfig);
		const link = APIs.restaurant;
		const [posts, setPosts] = useState([]);
   
	 

	useEffect(fetchPostsHandler, []);  
   
	function fetchPostsHandler() {
        const headers = {
            'Access-Control-Allow-Origin': '*', 
        } 
    	   axios(link, { headers })
            .then(response => {
				 setPosts(response.data.restaurants);
		 
            })
            .catch(error => {
               
            })

    }

	
    const cards = posts.map(post => {
       
		return <Col md={3} xs={6}>
		<div className="item">
					<CardItem 
				   key={post.id}
				  title={post.name}
				  subTitle={post.smalldescription}
				  imageAlt='Product'
				  image={post.profileimage} 
				  imageClass='img-fluid item-img'
				  linkUrl={'detail/'+ post.id}
				  offerText='65% off | Use Coupon OSAHAN50'
				  time={post.deliveredtime}//'20–25 min'
				  price='$250 FOR TWO'
				  showPromoted={true}
				  promotedVariant='dark'
				  favIcoIconColor='text-danger'
				  rating='3.1 (300+)'
				 />
		   </div>	</Col>
		  });
 


    	return (
    		<>
    			<TopSearch />
				<section className="section pt-5 pb-5 bg-white homepage-add-section">
					<Container>
						<SectionHeading 
								heading='Promoted Restaurants'
								subHeading='Top Four Trending Chosen for You'
							/>
						 <Row>
					
						 {cards}
						 
						</Row>
					</Container>
				</section>

			  

    		</>
    	);
    }
 




export default Index;