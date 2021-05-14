import React from 'react';
import PropTypes from 'prop-types';  
import {Media} from 'react-bootstrap';
import Icofont from 'react-icofont';

class OrderCard extends React.Component {

	render() {
    	return (
	      <div className="bg-white card mb-4 order-list shadow-sm">
	          <div className="gold-members p-4">
	                <Media>
	                   <Media.Body>
					   {this.props.orderTitle&&
						   <h5 className="text-danger  mb-1">
	                      {this.props.orderTitle} 
	                      </h5>}

						    	 
					       {this.props.status&&
	                       <h5 className="text-info float-right mb-1">
	                      {this.props.status} 
	                      </h5>}

	                      <p className="text-gray mb-1">
	                      	<Icofont icon="location-arrow" /> {this.props.address} 
	                      </p>
						
	                      <p className="text-gray mb-3">
	                      	<Icofont icon="list" /> ORDER #{this.props.orderNumber} 
	                      	<Icofont icon="clock-time" className="ml-2" /> {this.props.orderDate} 
	                      </p>
	                      <p className="text-dark">
	                      	{this.props.orderProducts} 
	                      </p>
	                      <hr />
	                    
	                      <p className="mb-0 text-black text-primary pt-2">
	                      	<span className="text-black font-weight-bold"> Total Paid:</span>  ${this.props.orderTotal}
	                      </p>
	                   </Media.Body>
	                </Media>
	          </div>
	       </div>
    	);
    }
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