
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [txt,settxt]=useState("");
  function enter(e){
    return settxt(e.target.value);

  }
  return (
    <div>
        {/* Do not remove the main div */}

        <input type="text" placeholder="Enter your name:" value="{txt}" onchange="enter"/>
       
        {name && <h1>Hello {name}!</h1>}




    </div>
  )
}

export default App
