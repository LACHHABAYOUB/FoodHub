import React, { useContext, useEffect, useRef, useState } from 'react';
import {Form, InputGroup, Button} from 'react-bootstrap';
import axios from 'axios'
import JwtUtil from '../../store/JwtUtil';
import { APIConfig } from '../../store/APIConfig';

const initialProfile = {
   fullName: "",
   email: "",
   mobile: "",
   address: "",
   instruction: ""
};

const Profile = (props) => {

   const [profile, setProfile] = useState(initialProfile);

   const APIs = useContext(APIConfig);
	const userEndpoint = APIs.User;

   const formRef = useRef();
   
   const headers = {
      'Access-Control-Allow-Origin': '*',      
      'Content-Type': 'application/json',   
      'Authorization': 'Bearer ' + JwtUtil.getToken()
   }
   
   useEffect(() => {
      axios.get(userEndpoint, {headers})
      .then(response => {    
         const form = formRef.current;
              
         form["fullName"].value = response.data.fullName;
         form["email"].value = response.data.email;
         form["mobile"].value = response.data.mobile;
         form["address"].value = response.data.address;
         form["instruction"].value = response.data.instruction;
         setProfile(response.data);
      })
     

   },[]);

   function handleUpdateProfile(){
      const form = formRef.current;

      const fullName = form["fullName"].value;
      const email = form["email"].value;
      const mobile = form["mobile"].value;
      const address = form["address"].value;
      const instruction = form["instruction"].value;

      //if data is change
      if (profile.fullName != fullName ||
         profile.email != email ||
         profile.mobile != mobile ||
         profile.address != address ||
         profile.instruction != instruction
         ){            
            const data = {fullName, email, mobile, address, instruction};
            axios.put(userEndpoint, data, {headers}).then(response => {               
               setProfile(data);
            });
      }
   }

   return (
         <div className='p-4 bg-white shadow-sm'>
         <Form ref={formRef}>
            <div className="form-row">
               <Form.Group className="col-md-12">
                  <Form.Label>Full Name</Form.Label>
                  <InputGroup>
                     <Form.Control type="text" placeholder="Full Name" name="fullName" /> 
                  </InputGroup> 
               </Form.Group>

               <Form.Group className="col-md-12">
                  <Form.Label>Email</Form.Label>
                  <InputGroup>
                     <Form.Control type="email" placeholder="Email" name="email" /> 
                  </InputGroup> 
               </Form.Group>

               <Form.Group className="col-md-12">
               <Form.Label>Mobile</Form.Label>
                  <InputGroup>
                  <InputGroup.Append>
                        <Button variant="outline-secondary" type="button" id="button-addon2">+1</Button>
                     </InputGroup.Append>   
                     <Form.Control type="text" placeholder="Mobile Number" name="mobile" />                  
                  </InputGroup>
               </Form.Group>
            
               <Form.Group className="col-md-12">
                  <Form.Label>Complete Address</Form.Label>
                  <Form.Control type="text" placeholder="Complete Address e.g. house number, street name, landmark" name="address" />
               </Form.Group>
               <Form.Group className="col-md-12">
                  <Form.Label>Delivery Instructions</Form.Label>
                  <Form.Control type="text" placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall" name="instruction" />
               </Form.Group>                                             
               <button onClick={() => handleUpdateProfile()} className="btn btn-sm btn-outline-info btn-block btn-login text-uppercase font-weight-bold mb-2">Save</button>
            </div>
         </Form>
         
         </div>
   );
    
}
export default Profile; 