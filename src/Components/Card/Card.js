import React from 'react';

const Card = ({cart}) => {
   
    return (
        <div>
            <h4>selected item:{cart.length} </h4>
        </div>
    );
};

export default Card;