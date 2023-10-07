import React, { useState } from "react";
import useConsoleLog from "./useConsoleLog";


function App() {
  const [number, updateNumber] = useState(0);
  const increment = () => {
    updateNumber(prevState => prevState + 1); 
  }
  useConsoleLog(number);
  return (
    <>
    <h1>Number: {number}</h1>
    <button onClick={increment}>Plus one</button>
    
  </>
  );
  
}

export default App;
