import React from "react";
import './Card.css';

const Card = props => {
    //console.log(props.children)
    return(
        <div className="card">
            {props.children}
        </div>
    )
};

export default Card;