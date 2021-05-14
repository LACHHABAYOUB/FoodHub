import React, { useContext, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';  
import DeleteAddressModal from '../modals/DeleteAddressModal';
import OrderCard from '../myRestaurant/OrderCard';
import EditItemCard from './EditItemCard';
import ItemCard from './ItemCard';
import axios from 'axios';
import { APIConfig } from '../../store/APIConfig';
import JwtUtil from '../../store/JwtUtil';

const Items= (props)=>{
	 
	const [state, setState] = useState({});
	const [items, setItems] = useState([]);
	const [activeItem, setActiveItem] = useState({});

	const APIs = useContext(APIConfig);
	const itemsEndpoint = APIs.Items;
   
  	const hideDeleteModal = () => setState({ showDeleteModal: false });
  	const hideAddressModal = (reload = false) => {
		  setState({ showAddressModal: false });

		  if (reload){
			  loadItems();
		  }
	};

	const headers = {
		'Access-Control-Allow-Origin': '*',      
		'Content-Type': 'application/json',   
		'Authorization': 'Bearer ' + JwtUtil.getToken()
	}

	function handleChange(action, currentItem){
		if (action === 'delete'){
			setState({ showDeleteModal: true });
			setActiveItem({...currentItem});
		}
		else if (action === 'edit'){
			setState({ showAddressModal: true });
			setActiveItem({...currentItem});
		}
		else if (action === 'add'){
			setState({ showAddressModal: true });
			setActiveItem({...currentItem});
		}

		
	}

	const handleDelete = () => {
		const id = activeItem.id;
		axios.delete(itemsEndpoint + "/" + id, {headers})
		.then(resp => {
			const newItems = items.filter(item => item.id != id);
			setItems(newItems);
		})
		.catch(err => {
			alert("Can not delete the item: (" + activeItem.name+") It is already used in other orders ");
		})

		hideDeleteModal();		
	}

	function loadItems(){
		axios.get(itemsEndpoint, {headers}).then(response => {
			const restaurantItems = response.data.restaurantItems;
		//	console.log(restaurantItems);
			setItems(restaurantItems);
		});
	}

	function displayItems(){
		return items.map(item => 
			<React.Fragment>
				<Col md={6}>
						<ItemCard
							item={item}
							boxClass="border border-primary shadow"
							title= 'Chicken crispy'
							icoIcon= 'icofont-culinary'
							iconclassName= 'icofont-3x'
							address= 'Osahan House, Jawaddi Kalan, Ludhiana, Punjab 141002, India'
							onEditClick= {() => handleChange("edit", item)}
							onDeleteClick={() => handleChange("delete", item)}
						/>
				</Col>
			</React.Fragment>
		);
		
	}

	useEffect(() => {
		loadItems();
	} ,[]);


	return (
		<React.Fragment>
			<EditItemCard show={state.showAddressModal} onHide={hideAddressModal} item={state.showAddressModal?activeItem:{}} />
			<DeleteAddressModal show={state.showDeleteModal} onHide={hideDeleteModal} onDelete={handleDelete} item={activeItem.name}/>

			<div className='p-4 bg-white shadow-sm'>
				<Row>
					<Col md={12}>
						<h4 className="font-weight-bold mt-0 mb-3 m-2" style={{display: "inline"}}>Items</h4>
						<button onClick={() => handleChange("add", {})} className="btn btn-sm btn-outline-info btn-inline text-uppercase font-weight-bold mb-2">ADD NEW ITEM</button>
					</Col>				
					{displayItems()}
				</Row>
			</div>
		</React.Fragment>
	);
}
 
export default Items;