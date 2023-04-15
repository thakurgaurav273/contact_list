import React from "react";
import "../App.css";
import Avatar from "../Components/avatar.jsx";
function Card(props){
    return( 
        
            <div className="card">
                <div className="upper">
                    <h4>{props.name}</h4>
                    <Avatar src={props.src}/>
                    
                </div>
                <div className="lower">
                    <span>{props.mob}</span> <br />
                    <span>{props.emailid}</span>
                </div>
            </div>
       
    )
   
}
export default Card;