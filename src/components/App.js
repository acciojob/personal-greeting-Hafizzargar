
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
         <label htmlFor="ne">Enter your name:</label>

        <input type="text" onchange="enter" id="ne value={txt}/>
       
        {name && ( <p>Hello {name}!</p>)}




    </div>
  )
}

export default App
