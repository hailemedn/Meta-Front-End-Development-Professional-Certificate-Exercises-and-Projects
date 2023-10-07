import { useState } from "react";

function App() {
  const [restaurantName , setRestaurantName] = useState("Lemon");
  const handleChange = () => setRestaurantName("Not Lemon")
  return (
    <>
      <h1>{restaurantName}</h1>
    <button onClick={handleChange}>do stuff</button>
    </>
    
  )
  }
export default App;