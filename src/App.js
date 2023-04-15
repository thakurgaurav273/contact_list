import './App.css';
import Card from "../src/Components/card.jsx";
import Contacts from "./contact.js";
import React from 'react';
function showCard(contact){
    return(
      <>
  <Card name={contact.name} src={contact.src} emailid={contact.email} mob={contact.mob}/>
  <br/>
      </>

    )
}
function App() {
  return (
    <>
    <div className='parent_container'>
        {Contacts.map(showCard)}
    </div>


</>
);
}

export default App;
