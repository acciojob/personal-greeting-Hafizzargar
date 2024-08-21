
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
   let[name, setName] = useState("");
    return(
            <div>
                 <p>Enter your name:</p> 
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
                <p>
                  {
                    name==false?null:<p>Hello {name}!</p>
                  }
                </p>
            </div>
        );
}

export default App
