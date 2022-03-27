import React from 'react';
import './Card.css';
import Selectitem from '../Selectitem/Selectitem';
const Card = (props) => {
  const {cart,randomSelection,removeItem}=props;
   
    return (
        <div className="card">

      
        
           <h3>selected item: {cart.length}</h3>
            {
                   cart.map(product=><Selectitem
                   product={product}
                   ></Selectitem>)
               }


           <div className="selection-item">
                <button onClick={()=>randomSelection(cart)}>
                <p>choose one</p>
                </button>
                <button onClick={()=>removeItem(cart)}>
                <p>remove</p>
                </button>
            </div>
        </div>
    );
};

export default Card;