import React from 'react';
import {Link} from 'react-router-dom';
import {Card,Media} from 'react-bootstrap';
import Icofont from 'react-icofont';
import PropTypes from 'prop-types'; 

const ItemCard =(props)=>{
 
    	return (
        <Card className={"bg-white addresses-item mb-4 " + (props.boxClass)}>
            <div className="gold-members p-4">
               <Media>
                  <div className="mr-3"><Icofont icon={props.icoIcon} className={props.iconclassName} /></div>
                  <div className="media-body">
                     <h6 className="mb-1 text-secondary">{props.item.name}</h6>
                     <p className="text-black">{props.item.categoryName}</p>
                     <p className="text-black">$ {props.item.price}</p>

                     <p className="mb-0 text-black font-weight-bold">
                        <Link className="text-primary mr-3" to="#" onClick={props.onEditClick}><Icofont icon="ui-edit" /> EDIT</Link>
                        <Link className="text-danger" to="#" onClick={props.onDeleteClick}><Icofont icon="ui-delete" /> DELETE</Link></p>
                  </div>
               </Media>
            </div>
        </Card>
    	);
    }


    ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  icoIcon: PropTypes.string.isRequired,
  iconclassName: PropTypes.string,
  address: PropTypes.string,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default ItemCard;