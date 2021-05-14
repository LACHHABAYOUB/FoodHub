import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';  
import {Form,Image,Media} from 'react-bootstrap';
import Icofont from 'react-icofont';
import axios from 'axios'
import JwtUtil from '../../store/JwtUtil';
import { APIConfig } from '../../store/APIConfig';
 
const	OrderCard =(props)=>{
	const APIs = useContext(APIConfig);
	const order = APIs.order;


		const headers = {
		'Access-Control-Allow-Origin': '*',      
		'Content-Type': 'application/json',   
		'Authorization': 'Bearer ' + JwtUtil.getToken()
	 }
	 
	const [selectedOption, setSelectedOption] = useState(props.statusid);
 
    const PostDataHandler = () => {
		 
		if(selectedOption===undefined)
		{alert('Change the status to update!');
		return;} 
    
		const data = {"idOrder":props.orderid , "idStatus":selectedOption };
	
		axios.put(order, data, {headers}).then(response => {               
	  	  alert('Saved!');
			 
		}) ;

    }
 

	
    	return (
	      <div className="bg-white card mb-4 order-list shadow-sm">

	          <div className="gold-members p-4">
	                <Media>
					<div className="osahan-user text-center">
                             <div className="osahan-user-media">
							 <Image className="mr-4" src={props.image} alt={props.imageAlt} />
							   <div className="osahan-user-media-body">
                                   <p className="mr-4 mt-1"> {props.orderTitle}</p>
                               </div>
                             </div>
                          </div>
	                   <Media.Body>
	                   	 
	                     
	                      <p className="text-gray mb-1">
	                      	<Icofont icon="location-arrow" /> {props.address} 
	                      </p>
	                      <p className="text-gray mb-3">
	                      	<Icofont icon="list" /> ORDER #{props.orderNumber} 
	                      	<Icofont icon="clock-time" className="ml-2" /> {props.deliveredDate}  
	                      </p>
	                      <p className="text-dark">
	                      	{props.orderProducts} 
	                      </p>

						    
	                      <p className="mb-0 text-black text-primary pt-2">
	                      	<span className="text-black font-weight-bold"> Total :</span> ${props.orderTotal}
	                      </p>
	                      <hr />
	                  
						  <Form.Group className="col-md-12">
	                                             <Form.Label>Select Status
	                                             </Form.Label>
	                                             <br />
						  <Form.Control as="select" className="custom-select"  
						   value={selectedOption}
						   onChange={e => setSelectedOption(e.target.value)}>
						      
											      <option value='1'>Pending</option>
											      <option value='2'>Preperation</option>
											      <option value='3'>Delivery</option>
												  <option value='4'>Delivered</option>
											    
						  </Form.Control>
						  </Form.Group>

						  
					<button className="float-right col-2 btn btn-success btn-block btn-sm" onClick={PostDataHandler}>save</button>
       
	                   </Media.Body>
	                </Media>
	          </div>
	       </div>
    	);
    
}

OrderCard.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  orderNumber: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  deliveredDate: PropTypes.string,
  orderTitle: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  orderProducts: PropTypes.string.isRequired,
  helpLink: PropTypes.string.isRequired,
  detailLink: PropTypes.string.isRequired,
  orderTotal: PropTypes.string.isRequired,
  
};
export default OrderCard;	