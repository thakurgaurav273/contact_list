import React from "react";
import "../App.css";

function Avatar(props){
    return (
            <img className="pic" src={props.src} alt="No image found"/>

    )
}
export default Avatar;