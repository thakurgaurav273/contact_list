import React from "react";
import "./App.css";
function Card(props){
    return( 
        
            <div className="card">
                <div className="upper">
                    <h4>{props.name}</h4>
                    <div className="profile_pic">
                        <img className="pic" src={props.src} alt={props}/>
                    </div> 
                </div>
                <div className="lower">
                    <span>{props.mob}</span> <br />
                    <span>{props.emailid}</span>
                </div>
            </div>
       
    )
   
}
export default Card;