import * as React from "react"
import './App.css'

const Row = ({children, spacing}) => {

  const childStyle = {
    marginLeft: `${spacing}px`,
  }

  return (
    <div className="row">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle: {}),
          },
        });
      })}
    </div>
  )
}


export default function App() {
  return (
    <Row spacing = {32}>
      <p>Jordans</p>
      <p>$139</p>
      <p>White</p>
      <p>Size 42</p>
    </Row>
  )
}
