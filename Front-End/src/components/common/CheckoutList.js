import React, { useContext, useEffect, useState } from 'react'; 
import axios from 'axios'; 
import { APIConfig } from '../../store/APIConfig';  
import CheckoutItem from './CheckoutItem';
import Icofont from 'react-icofont';

const CheckoutList = (props) => {

	const APIs = useContext(APIConfig);
	 const Itemslink = APIs.restaurantItem;

    const [items, setitems] = useState([]);
    const [selecteditems, setselecteditems] = useState([]);
    const [selectedrestaurant, setselectedrestaurant] = useState({});

    function fetchPostsHandler() {
       
        if(localStorage.getItem("cartrestaurant")!=null)
        {
          setselectedrestaurant(JSON.parse(localStorage.getItem("cartrestaurant")));
        }
        if(localStorage.getItem("cartItems")!=null)
        {
          setselecteditems(JSON.parse(localStorage.getItem("cartItems")));
        }
        const headers = {
            'Access-Control-Allow-Origin': '*', 
        } 
        let selectedrest=JSON.parse(localStorage.getItem("cartrestaurant"));
        if(selectedrest!=null){
            axios(Itemslink+selectedrest.restid, { headers })
        .then(response => {
            if(localStorage.getItem("cartItems")!=null)
           { 
             let slt=JSON.parse(localStorage.getItem("cartItems"));
              
            if(slt!=null)
            {
            let newList =[];
            slt.map(element => { 
            newList.push( response.data.restaurantItems.find((item) => item.id === element.idx));
            
            });
            setitems(newList);
        
          }
         }
      });
     
    }}
     
     useEffect(fetchPostsHandler, [props]); 
    


     const checkout  =   
      items.map(item => {
        return 	<CheckoutItem
        itemName={item.name}
       price={item.price}
       priceUnit="$"
       id={item.id}
       qty={selecteditems?(selecteditems.find(o => o.idx === item.id)? selecteditems.find(o => o.idx === item.id).qty:0):0}
       show={true}
       minValue={0}
       maxValue={7}
       />
     });


	return (    	<div className="generator-bg rounded shadow-sm mb-4 p-4 osahan-cart-item">
            <div className="d-flex mb-4 osahan-cart-item-profile">
             <div className="d-flex flex-column">
                <h6 className="mb-1 text-white">{selectedrestaurant.name}
                </h6>
                <p className="mb-0 text-white"><Icofont icon="location-pin" />{selectedrestaurant.address}</p>
            </div>
            </div>
            <div className="bg-white rounded shadow-sm mb-2">
         {checkout }
        </div>
        <div className="mb-2 bg-white rounded p-2 clearfix">

        <h6 className="font-weight-bold mb-0">Sub Total  <span className="float-right">${items.reduce((n, {price}, index ) => n + price *(selecteditems[index]?selecteditems[index].qty:0), 0).toFixed(2)}</span></h6>
        </div></div>
	);
    
}


export default CheckoutList;