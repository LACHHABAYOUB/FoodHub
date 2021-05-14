import React from 'react';
import {Link} from 'react-router-dom'; 
import PropTypes from 'prop-types'; 

class CouponCard extends React.Component {

	render() {
    	return (
    		<div className={"card offer-card shadow-sm mb-4" + (this.props.noBorder ? ' border-0' : '')}>
	             <div className="card-body">
	             	{(  this.props.couponCode)?
		                (<h5 className="card-title">
		                 
		                	{this.props.couponCode?
		                		this.props.couponCode
		                		:""
		                	}
		                </h5>)
		                :""
		            }
	                <h6 className="card-subtitle mb-2 text-block">{this.props.title}</h6>
	                {this.props.subTitle?
	                	<p className="card-text">
	                		{this.props.subTitle}
	                	</p>
	                	:""
	                }
	                {this.props.restid?
	                	// <button to={"/detail/"+this.props.restid} variant="link" className="card-btn mr-3 p-0">Go to {this.props.restname}</button>
						 <Link to={"/detail/"+this.props.restid} className="btn btn-primary btn-block btn-sm">Go to {this.props.restname}</Link>
						
						:""
	                }
	                
	             </div>
	        </div>
    	);
    }
}

CouponCard.propTypes = {
  title: PropTypes.string.isRequired,
  logoImage: PropTypes.string,
  subTitle: PropTypes.string,
  imageAlt: PropTypes.string,
  imageclassName: PropTypes.string,
  morelinkUrl: PropTypes.string,
  moreLinkText: PropTypes.string,
  copyBtnText: PropTypes.string,
  couponCode: PropTypes.string,
  noBorder: PropTypes.bool,
  restid:PropTypes.string,
  restname: PropTypes.string,
};
CouponCard.defaultProps = {
  logoImage: '',
  subTitle: '',
  imageAlt: '',
  imageclassName: '',
  morelinkUrl: '#',
  moreLinkText: 'KNOW MORE',
  copyBtnText: '',
  couponCode: '',
  noBorder: true,
  restname:'',
  restid:''
}

export default CouponCard;