import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {
  
   const frist10 = fakeData.slice(0,10);
   const [products , setProducts] = useState(frist10);

    return (
   <div className="Shop-container">
         <div className="product-container">
            
                  {
                   products.map(pd => <Product product={pd}></Product>)
                  }
    
         </div>
         <div className="cart-containe">
             this is cart
         </div>
   </div>
    );
};

export default Shop;