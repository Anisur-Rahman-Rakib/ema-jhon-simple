import React, { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

const Review = () => {
    const {cart , setCart} =useState([]);
    useEffect(() => {
        // cart data loaded
        const savedcart = getDatabaseCart();
        const productkeys = Object.keys(savedcart);
        const counts = productkeys.map(key => {
        const product = fakeData.find
        });
        console.log(productkeys)

        
    })
    return (
        <div>
            <h1>this is review</h1>
        </div>
    );
};

export default Review;