import './App.css';
import Card from "../src/Components/card.jsx";
import Contacts from "./contact.js";
import React from 'react';

function App() {
  return (
  <>
    <div className='parent_container'>
      {/* arrow function don't need function keyword, function name etc. */}
        {Contacts.map(contact=>{
    return(
      <>
           <Card 
           key={contact.id}
           id={contact.id} 
           name={contact.name} 
           src={contact.src} 
           emailid={contact.email} 
           mob={contact.mob}/>
          <br/>
      </>
    )
  }
  )
  }
    </div>
  </>
);
}
export default App;
