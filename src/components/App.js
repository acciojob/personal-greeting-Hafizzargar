
import React from "react";
import './../styles/App.css';

const App = () => {
  let [txt,settxt]=useState("");
  function enter(e){
    return settxt(e.target.value);

  }
  return (
    <div>
        {/* Do not remove the main div */}

        <input type="text" placeholder="Enter input" value="{txt}" onchange="enter"/>
        <div>Hello {txt}!
        </div>
       




    </div>
  )
}

export default App
