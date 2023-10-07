import * as React from "react"


export const RadioGroup = ({onChange, selected, children}) => {
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onChange,
      checked: child.props.value === selected,
    })
  })
  return <div>{RadioOptions}</div>
} 


export const RadioOption = ({value, onChange, checked ,children}) => {
  return (
    <div>
      <input 
        id={value}
        type="radio"
        name={value}
        value={value}
        onChange={(e)=> onChange(e.target.value)}
        checked = {checked}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  )
}
