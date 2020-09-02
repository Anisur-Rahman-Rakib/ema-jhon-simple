import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDatabaseCart}  from '../../utilities/databaseManager';
const Shop = () => {
  
   const frist10 = fakeData.slice(0,10);
   const [products , setProducts] = useState(frist10);
   const [cart , setCart] = useState([]);
   const handleAddProduct = (product) => {
    //    console.log('added' , product);
       const newCart = [...cart, product];
       setCart(newCart);
       const sameproduct = newCart.filter(pd => pd.key === product.key )
       const count = sameproduct.length;
    addToDatabaseCart(product.key , count);
   }

    return (
   <div className="Shop-container">
         <div className="product-container">
            
                  {
                   products.map(pd => <Product 
                    key={pd.key}
                    showAddToCart={true}
                      handleAddProduct= {handleAddProduct}
                   product={pd}
                   ></Product>)
                  }
    
         </div>
         <div className="cart-container">
             <Cart cart={cart}></Cart>
         </div>
   </div>
    );
};

export default Shop;