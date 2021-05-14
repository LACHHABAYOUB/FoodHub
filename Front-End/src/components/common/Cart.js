import React, { useContext, useEffect , useState } from 'react';
import {Link } from 'react-router-dom';
import {NavDropdown } from 'react-bootstrap';
import DropDownTitle from '../common/DropDownTitle';
import axios from 'axios'; 
import { APIConfig } from '../../store/APIConfig'; 
import CartDropdownItem from '../cart/CartDropdownItem';

const Cart = (props) => {

	const APIs = useContext(APIConfig);
	 const Itemslink = APIs.restaurantItem;

    const [items, setitems] = useState([]);
    const [selecteditems, setselecteditems] = useState([]);
    const [selectedrestaurant, setselectedrestaurant] = useState({});

    function fetchPostsHandler() {
     
      if(localStorage.getItem("cartItems")!=null)
      {
        setselecteditems(JSON.parse(localStorage.getItem("cartItems")));
      }
      else
      {
        setselectedrestaurant([]);
        setselecteditems([]);
        return;
      }
      if(localStorage.getItem("cartrestaurant")!=null)
      {
        setselectedrestaurant(JSON.parse(localStorage.getItem("cartrestaurant")));
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
    


     const checkout =  ()=> { 
      return <div >
        { 
      items.map(item => {
                   
       return     <CartDropdownItem 
    icoIcon='ui-press'
    iconClass='text-success  food-item'
     title= {item.name+' x '+(selecteditems.find(o => o.idx === item.id)? selecteditems.find(o => o.idx === item.id).qty:0)} 
     price={(selecteditems.find(o => o.idx === item.id)? selecteditems.find(o => o.idx === item.id).qty*item.price:0).toFixed(2)}
  
     />})

      }
      
      </div>
     };


	return (
        <NavDropdown activeclassname="active" alignRight className="dropdown-cart" 

        title={
            <DropDownTitle 
                className='d-inline-block' 
                faIcon='shopping-basket'
                iconClass='mr-1'
                title='Cart'
                badgeClass='ml-1'
                badgeVariant='success'
                badgeValue={ ( selecteditems ? selecteditems.reduce((n, {qty} ) => n  + qty,0):0)}
            />
        }
    >
        <div className="dropdown-cart-top shadow-sm">
	  <div className="dropdown-cart-top-body border-top p-4">
            
        {checkout()}
           
        </div>
        <div className="dropdown-cart-top-footer border-top p-4">
           <p className="mb-0 font-weight-bold text-secondary">Sub Total <span className="float-right text-dark">$  {items.reduce((n, {price}, index ) => n + price *(selecteditems[index]?selecteditems[index].qty:0), 0).toFixed(2)}</span></p>
           <small className="text-info">Extra charges may apply</small>  
        </div>
        <div className="dropdown-cart-top-footer border-top p-2">
          <Link to="/checkout" className="btn btn-success btn-block btn-lg">Checkout</Link>
          <Link to={"/detail/"+selectedrestaurant.restid} className="btn btn-info btn-block btn-lg">Add more from {selectedrestaurant.name}</Link>
   
        </div>
      </div>
      </NavDropdown>
	);
    
}


export default Cart;