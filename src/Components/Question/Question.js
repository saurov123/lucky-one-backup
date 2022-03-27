import React from 'react';
import './Question.css';
const question = () => {
    return (
        <div className='question'>
          <h2>1. How does reacts work</h2>
          <p>React.js is one of the most famous JavaScript web frameworks <br/>
           It’s a library. For building user interfaces <br />
           It can be used for the development of both web and mobile apps <br />with react we can build single page applications and mobile apps, or complex apps
           </p>
           <h2>2. Props vs State</h2>
           props: <br />
           Props allow us to pass data from one component to other components. <br />
           Props are immutable. <br /> <br />
           state: <br />
           State holds information about the components. <br />
           State is mutable. 
        </div>
    );
};

export default question;