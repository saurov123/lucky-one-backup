import React from 'react';
import './Product.css';
import { FaShoppingCart } from "react-icons/fa";

const Product = ({product,addToCart}) => {
   const {img,name,price}=product;
   
    return (
        <div className="product">
            <div className='product-info'>
            <img src={img} alt="" />
            <h4>price : {price}</h4>
            <h4>name : {name}</h4>
            
            </div>
            <button onClick={()=>addToCart(product)} className='btn-cart'><i>Add to cart  </i><FaShoppingCart/></button>
         </div>
        
    );
};

export default Product;