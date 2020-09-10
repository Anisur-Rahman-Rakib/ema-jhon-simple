import React from 'react';
import fakeData from '../../fakeData';
import { useState ,useEffect } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDatabaseCart ,getDatabaseCart}  from '../../utilities/databaseManager';
const Shop = () => {
  
   const frist10 = fakeData.slice(0,10);
   const [products , setProducts] = useState(frist10);
   const [cart , setCart] = useState([]);

  useEffect(() => {
   const savedCart = getDatabaseCart();
   const productKeys = Object.keys(savedCart);
   const previousCart= productKeys.map(existingkey =>{
      const product= fakeData.find(pd => pd.key === existingkey)
      product.quantity =savedCart[existingkey];
      return product;
   })
  setCart(previousCart);

  },[])


   const handleAddProduct = (product) => {
      const toBeAddedKey = product.key;
      const sameProduct = cart.find(pd => pd.key === toBeAddedKey );
      let count = 1 ;
      let newCart;
      if(sameProduct){
         count = sameProduct.quantity + 1;
         sameProduct.quantity = count;
         const others =cart.filter(pd => pd.key !== toBeAddedKey);
         newCart=[...others, sameProduct];
      }
      else{
         product.quantity = 1;
         newCart=[...cart, product];
      }
    
    //    console.log('added' , product);
   
       setCart(newCart);
     
    addToDatabaseCart(product.key , count);
   }

    return (
   <div className="twin-container">
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