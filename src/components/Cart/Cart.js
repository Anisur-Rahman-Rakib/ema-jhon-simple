import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // const total =cart.reduce((total ,prd) => total + prd.price , 0)
    let total=0;
    for (let i=0; i<cart.length; i++){
        const product = cart[i];
        total += product.price;
    }
    let shiping = 0;
    if(total > 35){
        shiping = 0;
    }
    else if (total > 15){
        shiping = 4;
    }else if (total > 0){
        shiping = 14;
    }
    const tax =(total / 10 ).toFixed(2);
    const grandTotal = (total + shiping + Number(tax)).toFixed(2);
    const FormetNumber = num => {
        const precision =num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="main-cart">
            <h4>Order Summery</h4>
    <h4> Items Order : {cart.length}</h4>
    <p>Product Price : $ {FormetNumber(total)}</p>
    <p><small>Shipping cost : $ {shiping}</small></p>
    <p><small>Tax + VAT : $ {tax}</small></p>
    <p>Total price : {grandTotal}</p>
    <br/>
   <Link to="/review">
   <button className="main-button">Review Order</button>
   </Link>
        </div>
    );
};

export default Cart;