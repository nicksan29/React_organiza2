import React, { Children } from 'react';
import "./Button.css"

const Button = ({children, onClick}) => {
    return (
        <button onClick={onClick} className='button-task'>
            {children}
        </button>
     );
}
 
export default Button;