import React from "react";
import './Button.css'

const Button = ({children, type='primary'}) =>{
    return (
        <button className={`Button Button--${type}`}>{children}</button>
    )
}

export default Button