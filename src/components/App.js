
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
   const [name, setName] = useState("");
    return(
            <div>
                 <p>Enter your name:</p> 
                 // <input value={name} type="text" onChange={(e)=>setName(e.target.value)} onMouseLeave={(e)=>setName("")}/>
                         {
            name.trim() && <p>Hello {name}!</p>
         }

                  {
                     name && <p>Hello {name}!</p>
                  }
                
            </div>
        );
}

export default App
