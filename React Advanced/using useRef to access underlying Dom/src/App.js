import React, { useReducer, useRef } from "react";

function App() {
  const focusInputRef = useRef(null);
  const focusInput = () => {
    focusInputRef.current.focus();
  }
  return (
    <>
      <input ref={focusInputRef}></input>
      <button onClick={focusInput}>focus</button>
    </>
  )
}

export default App;
