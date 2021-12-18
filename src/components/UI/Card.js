import React from "react";
import './Card.css'

const Card=(props)=>{
    const classes='card '+props.className; // we do because we must have take children  extra class for proper design
    return <div className={classes}>{props.children}</div> // and we added here classes variable

}


export default Card;