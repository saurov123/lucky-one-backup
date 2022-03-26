import React from 'react';
import './Product.css';

const Product = (props) => {
   const {img,name,price}=props.product;
    return (
        <div className="product">
            <div className='product-info'>
            <img src={img} alt="" />
            <h4>price : {price}</h4>
            <h4>name : {name}</h4>
            
            </div>
            <button onClick={()=>props.addToCart(props.product)} className='btn-cart'><p>Add to cart</p></button>
         </div>
        
    );
};

export default Product;