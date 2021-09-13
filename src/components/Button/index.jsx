import React from "react";
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Button = ({text, icon, btnClass='', type='button'})=>{
    return(
        <button className={`btn-default ${btnClass}`}  type={type}>
            <FontAwesomeIcon icon={icon} size="lg"/>
            <span>{text}</span>
        </button>
    )
}

export {Button}
