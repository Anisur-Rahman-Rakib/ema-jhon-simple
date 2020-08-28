import React from 'react';
import './Product.css';
const Product = (props) => {
    const {img , name , seller , price , stock} = props.product;
    console.log(props.product.name);
    return (
        <div className="product">
            <div className="product-img"> 
                 <img src={img} alt=""/>
            </div>
            <div>
                 <h4 className="product-name">{name}</h4>
                 <br/>
                 <p><small>by :{seller}</small></p>
                 <p> $ {price}</p>
                 <br/>
    <p> <small>only {stock} left in stock - order soon</small></p>
            </div>
           
    
        </div>
    );
};

export default Product;