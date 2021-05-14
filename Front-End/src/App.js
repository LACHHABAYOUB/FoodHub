import React  from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Index from './components/Index';
import Offers from './components/Offers';
import MyAccount from './components/MyAccount';
 
import NotFound from './components/NotFound';
 
import Login from './components/Login';
import Register from './components/Register'; 
import Checkout from './components/Checkout';
import Detail from './components/Detail';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-select2-wrapper/css/select2.css';
import './App.css';
import {APIConfig} from './store/APIConfig';

import MyRestaurant from './components/MyRestaurant'; 

  const APIs = {
      Authentication: 'http://localhost:8080/authentication',
      restaurant: 'http://localhost:8080/restaurants/',
      restaurantItem: 'http://localhost:8080/restaurantItem/',
      User: 'http://localhost:8080/api/users', 
      order: 'http://localhost:8080/api/order',
      UserRestaurent: 'http://localhost:8080/api/restaurants',
      offers: 'http://localhost:8080/restaurantOffer',
      Items: 'http://localhost:8080/api/restaurantItem',
     
  }
 

const App = (props) => {

  return (
    <APIConfig.Provider value={APIs}>
    <React.Fragment>
    <Header/>
       <Switch>
          <Route path="/" exact component={Index} />          
          <Route path="/offers" exact component={Offers} /> 
          <Route path="/myrestaurant" component={MyRestaurant} />
          <Route path="/myaccount" component={MyAccount} /> 
          <Route path="/login" exact component={Login} /> 
          <Route path="/register" exact component={Register} />  
          <Route path="/checkout"  component={Checkout} /> 
          <Route path="/detail"  component={Detail} />
          <Route exact component={NotFound} />
        </Switch>
      
         <Footer/>
    </React.Fragment>
    </APIConfig.Provider>
  
  );

}

export default App;
