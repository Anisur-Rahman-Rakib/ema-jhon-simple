import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css';

const Shipment = () => {
  
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser , setloggedInUser] = useContext(UserContext);
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
     
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
     
        {/* <input name="example" defaultValue="test" ref={register} /> */}
        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your name" />
        {errors.name && <span className="error">name is required</span>}

     {   console.log(loggedInUser.name)}

        <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}placeholder="Your email"/>
        {errors.email && <span className="error">email is required</span>}

        <input name="address" ref={register({ required: true })} placeholder="Your address" />
        {errors.address && <span className="error">address is required</span>}

        <input name="phone" ref={register({ required: true })} placeholder="Your phone number" />
        {errors.phone && <span className="error">phone number required</span>}
        
        <input type="submit" />
      </form>
    );
    
};

export default Shipment;