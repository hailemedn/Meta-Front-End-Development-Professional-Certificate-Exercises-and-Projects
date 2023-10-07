import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const changeHandler = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    document.title = toggle ? "Welcome to the website" : "using the useEffect hook"
  },[toggle])


  return (
    <div>
      <h2>using the useEffect hook</h2>
      <button onClick={changeHandler}>toggle message</button>
      {toggle && (<p>Welcome to the website</p>)}
    </div>
  )
} 


export default App;