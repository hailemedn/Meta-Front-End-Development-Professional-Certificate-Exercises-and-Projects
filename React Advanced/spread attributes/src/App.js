import './App.css'
const Button = ({type, children, ...buttonProps}) => {
  const buttonType = type === "primary"? "primaryButton": "secondaryButton";
  return (
    <button className={`button ${buttonType}`} {...buttonProps}>{children}</button>
  )
}

const LoginButton = ({children , ...buttonProps}) => {
  return (
    <Button type="secondary" {...buttonProps} onClick={()=> alert("loging in")}>{children}</Button>
  )
}

export default function App() {
  return (
    <>
      <Button type="primary" onClick = {() => {alert("Signing up")}}>Sign up</Button>
      <LoginButton onClick={() => {alert("signing up")}}>Login</LoginButton>
    </>
    
  )
}