import React, { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';


const Review = () => {
    const [cart , setCart] =useState([]);
    const removeProduct = (productKey) => {
       
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        // cart data loaded
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts  = productKeys.map(key => {
        const product = fakeData.find(pd => pd.key === key);
        product.quantity = savedCart[key];
        return product;
        });
        // console.log(cartProducts)
        setCart(cartProducts);

        
    },[])
    return (
        <div className="twin-container">
           
   <div className="product-container">
   <h1>cart items : {cart.length}</h1>
    {
        cart.map(pd => <ReviewItem removeProduct={removeProduct} key={pd.key} product={pd}></ReviewItem>)
    }
   
   </div>
   <div className="cart-container">
       <Cart cart={cart}></Cart>

   </div>
        </div>
    );
};

export default Review;