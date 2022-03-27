import React from 'react';
import Product from '../Product/Product';
import Card from '../Card/Card';
import './Shop.css';
import { useState } from 'react';
import { useEffect } from 'react';
const Shop = () => {
  const [products, setproducts]= useState([]);
    const [cart ,setcart] =useState([]) ;

   const randomSelection=(randomCart)=>{
   if(cart.length){
     const random =Math.floor(Math.random()*randomCart.length)
     const selectCart= [ randomCart[random]]
     setcart(selectCart)
   }
   else {
     alert ('please choose a product')
   }
 }
 const removeItem =()=> {
   setcart([])
 }



    useEffect(() =>{
         fetch('data.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])

    const addToCart = (product) =>{
     
       const newCart = [...cart,product ]
       setcart(newCart);
    
    } 
    console.log(cart)
    return (
        <div className='shops-container'>
            <div className='products-container'>
            {
                products.map(product=><Product
                key={product.id}
                product={product}
                addToCart={addToCart}
                >
                
                </Product>)
            }
            </div>
            <div className='order-container'>
              <Card cart={cart} removeItem={removeItem} randomSelection={randomSelection}></Card>
               
            </div>
        </div>
    );
}
export default Shop;




 