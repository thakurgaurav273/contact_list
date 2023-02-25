import React from "react";
import "./App.css";
function Card(props){
    return( 
        
            <div className="card">
                <div className="upper">
                    <div className="Name">
                        <h4>{props.name}</h4>
                        <div className="profile_pic">
                            <img className="pic" src={props.src}/>
                        </div>
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