import { useEffect, useState } from 'react'
import './App.css'


//HOC
const withMousePostion = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        }, []);
      };
  
      window.addEventListener("mousemove", handleMousePositionChange);
      return () => {window.removeEventListener("mousemove", handleMousePositionChange);} 
    })

    return (<WrappedComponent {...props} mousePosition = {mousePosition}/>)
  }
}

const  PanelMouseLogger = ({mousePosition}) => {
  if(!mousePosition) {
    return null;
  }
  return (
   <p>{mousePosition.x}, {mousePosition.y}</p> 
  )
}

const PanelMouseTracker = withMousePostion(PanelMouseLogger);

export default function App() {
  return (
    <>
      <h2>Mouse Position</h2>
      <PanelMouseTracker />
    </>
    
  )
}