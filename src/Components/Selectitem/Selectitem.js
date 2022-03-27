import React from 'react';

const Selectitem = (props) => {
    const {img,name}=props.product;
    return (
        <div>
            <h3>name:{name}</h3>
        </div>
    );
};

export default Selectitem;