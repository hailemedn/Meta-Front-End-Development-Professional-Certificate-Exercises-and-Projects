import FeedbackForm from "./FeedbackForm";
import './App.css'
export default function App() {

   const handleSubmit = () => {
    return  (
      console.log("Form Submitted")
    )
   }
    return (
      <FeedbackForm onSubmit= {handleSubmit}/>
    )
}