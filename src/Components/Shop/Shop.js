import React from 'react';
import Product from '../Product/Product';
// import Card from '../Card/Card';
import './Shop.css';
import { useState } from 'react';
import { useEffect } from 'react';
const Shop = () => {
 const [products , setProducts] =useState ([]);
 const [cart , setCart] =useState ([]);
 useEffect(()=>{
   fetch('data.json')
   .then(res=>res.json())
   .then(data=>setProducts(data))
 },[])

 const addToCart = (product) => {
    console.log(product)
    const newCart =[...cart,product];
    setCart(newCart)
}
    return (
        <div>

            <div className='shops-container'>
               
               <div className='products-container'>
                   {
               products.map(product=><Product
                 key={product.id}
               product={product}
               addToCart={addToCart}
               > </Product>)
                   }
                   
               </div>
                    
                  
           <div className='order-container'>
        
                <h1>hello</h1>
                  {/* {
                      cart.map(item=>{
                        <h1 key={item.id}>{item.name}</h1>
                    })
                  }             
                   */}
               </div>  

           </div>

         </div>
    );
};

export default Shop;




//   {/* <Card cart={cart}></Card> */}

// cart.map(item=>{
//     <h1 key={item.id}>{item.name}</h1>
// })