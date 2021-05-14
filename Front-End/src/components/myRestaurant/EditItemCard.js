import axios from 'axios';
import React, { useContext, useEffect, useRef } from 'react';
import { Form, Modal, ButtonToolbar, Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'; 
import { APIConfig } from '../../store/APIConfig';
import JwtUtil from '../../store/JwtUtil';


const EditItemCard = (props) => {

	const formRef = useRef();

	const headers = {
		'Access-Control-Allow-Origin': '*',      
		'Content-Type': 'application/json',   
		'Authorization': 'Bearer ' + JwtUtil.getToken()
	}
	const APIs = useContext(APIConfig);
	const itemsEndpoint = APIs.Items;


	function isEdit(){
		return Object.keys(props.item).length !== 0 || props.item.constructor !== Object;
	}

	function getFormTitle(){
		if (isEdit()){
			return "Edit Item (under constructor)";
		}
		else {			
			return "Add New Item";
		}
	}

	function getButtonTitle(){
		if (isEdit()){
			return "Update";
		}
		else {			
			return "Add New";
		}
	}

	useEffect(() => {
		if (isEdit()){
			const form = formRef.current;
			form["id"].value = props.item.id;
			form["name"].value = props.item.name;
			form["ingredient"].value = props.item.ingredient;
			form["price"].value = props.item.price;
			form["portion"].value = props.item.portion;
			form["categoryId"].value = parseInt(props.item.categoryId);
			form["typeId"].value = parseInt(props.item.typeId);

		}

	}, [props]);

	function handleButton(){
		const form = formRef.current;
		const name = form["name"].value;
		const ingredient = form["ingredient"].value;
		const price = parseInt(form["price"].value);
		const portion = form["portion"].value;
		const categoryId = parseInt(form["categoryId"].value);
		const typeId = parseInt(form["typeId"].value);
		const id = parseInt(form["id"].value);
		const item = {id,name, ingredient, price, portion, categoryId, typeId};

		if (!isEdit())
		 {
			axios.post(itemsEndpoint, item, {headers}).then(response => props.onHide(true));	
		
		}
		else
		{
			 
		 	axios.put(itemsEndpoint, item, {headers}).then(response => props.onHide(true));	
		
		}

	}

	return (
		<Modal
			show={props.show}
			onHide={props.onHide}
			centered
		>
			<Modal.Header closeButton={true}>
				<Modal.Title as='h5' id="add-address">{getFormTitle()}</Modal.Title>
			</Modal.Header>

			<Modal.Body>

				<Form ref={formRef}>
				<Form.Control   type="hidden"      name={'id'} />
         
					<div className="form-row">
						<Form.Group className="col-md-12">
							<Form.Label>Name</Form.Label>
							<Form.Control name="name" type="text" placeholder="Item name" />								
						</Form.Group>

						<Form.Group className="col-md-12">
							<Form.Label>Ingredient</Form.Label>
							<Form.Control name="ingredient" type="text" placeholder="Ingredient e.g fish, beef, onion.." />
						</Form.Group>

						<Form.Group className="col-md-12">
							<Form.Label>Price</Form.Label>
							<Form.Control name="price" type="text" placeholder="Item price" />
						</Form.Group>

						<Form.Group className="col-md-12">
							<Form.Label>Portion</Form.Label>
							<Form.Control name="portion" type="text" placeholder="Item protion" />
						</Form.Group>

						<Form.Group className="mb-0 col-md-12">
							<Form.Label>Category</Form.Label>
							<ButtonToolbar>
								<ToggleButtonGroup value={props.item.categoryId} className="d-flex w-100" type="radio" name="categoryId" >
									<ToggleButton variant='info' value={1}>
										Dishes
    							    </ToggleButton>
									<ToggleButton variant='info' value={2}>
										Sandwiches
    							    </ToggleButton>
									<ToggleButton variant='info' value={3}>
										Salads
    							    </ToggleButton>
									<ToggleButton variant='info' value={4}>
										Drink
    							    </ToggleButton>
								</ToggleButtonGroup>
							</ButtonToolbar>
						</Form.Group>

						<Form.Group className="mb-0 col-md-12">
							<Form.Label>Type</Form.Label>
							<ButtonToolbar>
								<ToggleButtonGroup value={props.item.typeId} className="d-flex w-100" type="radio" name="typeId">
									<ToggleButton variant='info' value={1}>
										Veg
    							    </ToggleButton>
									<ToggleButton variant='info' value={2}>
										Chicks
    							    </ToggleButton>
									<ToggleButton variant='info' value={3}>
										Beef
    							    </ToggleButton>
									<ToggleButton variant='info' value={4}>
										Fish
    							    </ToggleButton>
									<ToggleButton variant='info' value={5}>
										Other
    							    </ToggleButton>
								</ToggleButtonGroup>
							</ButtonToolbar>
						</Form.Group>

					</div>
				</Form>
			</Modal.Body>

			<Modal.Footer>
				<Button type='button' onClick={() => props.onHide(false)} variant="outline-primary" className="d-flex w-50 text-center justify-content-center">CANCEL</Button>
				<Button type='button' onClick={() => handleButton()} variant="primary" className='d-flex w-50 text-center justify-content-center'>{getButtonTitle()}</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default EditItemCard;