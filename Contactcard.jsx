import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

function Contactcard(props){
    return(

        <div className="contact-card">
              
    <h3 style={{color:props.question &&  "red"}}>question:{props.question}</h3>
    <h3 >Answer:{props.Answer}</h3>
   
         </div>
         
    )
}

export default Contactcard;