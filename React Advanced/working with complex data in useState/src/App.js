import { useState } from "react";

function App() {
    const [person, setPerson] = useState({
      name: "Haile",
      location: "Summit"
    });

     const updateLocation = ()=> {
      setPerson(prevState => {return {...prevState, location: "Arabsa"}})
     }
    return (
      <> 
        <h1>{person.name}</h1>
        <h2>Location: {person.location}</h2>
        <button onClick={updateLocation }>Update Location</button>
      </>
      
    )
  }


export default App;