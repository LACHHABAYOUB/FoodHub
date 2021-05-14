import React from 'react'; 
import {Link} from 'react-router-dom';
import {Row,Col,Container, Image} from 'react-bootstrap'; 
class Footer extends React.Component {

	render() {
    	return (
    		<>
		
			    <section className="footer pt-5 pb-5">
			         <Container>
			            <Row>
			               <Col md={4} sm={12}>
			                 
			                  <div className="app">
			                     <p className="mb-2">Coming Soon</p>
			                     <Link to="#">
			                     	<Image src="img/google.png" alt='' fluid />
			                     </Link>
			                     <Link to="#">
			                     	<Image src="img/apple.png" alt='' fluid />
			                     </Link>
			                  </div>

							  
			               </Col>
			               <Col md={1} sm={6} className="mobile-none">
			               </Col>
			               <Col md={2} sm={4} xs={6}>
			                  <h6 className="mb-3">About OE</h6>
			                  <ul>
			                     <li><Link to="#">About Us</Link></li>
			                     <li><Link to="#">Culture</Link></li>
			                     <li><Link to="#">Blog</Link></li>
			                     <li><Link to="#">Careers</Link></li>
			                     <li><Link to="#">Contact</Link></li>
			                  </ul>
			               </Col>
			               <Col md={2} sm={4} xs={6}>
			                  <h6 className="mb-3">For Foodies</h6>
			                  <ul>
			                     <li><Link to="#">Community</Link></li>
			                     <li><Link to="#">Developers</Link></li>
			                     <li><Link to="#">Blogger Help</Link></li>
			                     <li><Link to="#">Verified Users</Link></li>
			                     <li><Link to="#">Code of Conduct</Link></li>
			                  </ul>
			               </Col>
			               <Col md={2} sm={4} xs={4} className="m-none">
			                  <h6 className="mb-3">For Restaurants</h6>
			                  <ul>
			                     <li><Link to="#">Advertise</Link></li>
			                     <li><Link to="#">Add a Restaurant</Link></li>
			                     <li><Link to="#">Claim your uling</Link></li>
			                     <li><Link to="#">For Businesses</Link></li>
			                     <li><Link to="#">Owner Guidelines</Link></li>
			                  </ul>
			               </Col>
			            </Row>
			         </Container>
			    </section>
		      <footer className="pt-4 pb-4 text-center">
		         <Container>		             
		            <small className="mt-0 mb-0"> Made by  Maharishi FoodHUB Team
		            </small>
		         </Container>
		      </footer>
		    </>
    	);
    }
}

 



export default Footer;