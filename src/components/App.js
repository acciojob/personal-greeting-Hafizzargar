
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
   const [name, setName] = useState("");
    return(
            <div>
                  <label htmlFor="nam">Enter your name:</label>
                 // <input value={name} type="text" onChange={(e)=>setName(e.target.value)} onMouseLeave={(e)=>setName("")}/>
                  <input type="text" onChange={(e) => setName(e.target.value)} value={name} id="nam"/>      

                  {
                     name && <p>Hello {name}!</p>
                  }
                
            </div>
        );
}

export default App
