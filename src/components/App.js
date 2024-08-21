
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  let [txt,settxt]=useState("");
  function enter(e){
    return settxt(e.target.value);

  }
  return (
    <div>
        {/* Do not remove the main div */}
         <label htmlFor="ne">Enter your name:</label>

        <input type="text" onChange="enter" id="ne" value={txt}/>
       
        <p>Hello {txt}!</p>




    </div>
  )
}

export default App
