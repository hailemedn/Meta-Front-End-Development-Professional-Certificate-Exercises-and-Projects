import { useState, useEffect, useRef } from "react";
const Button = ({backgroundColor, children}) => {
  return <button style={{backgroundColor}}>{children}</button>
}



export default function App() {
  return (
    <Button backgroundColor = "red">Remove</Button>
  )
}
