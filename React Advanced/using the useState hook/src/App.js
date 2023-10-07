import { useState } from "react";

const GoalForm =(prop) => {
  const [formData, setFormData] = useState({goal: "", by:""});
  const changeHandler =(e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  const submitHander =(e) => {
    e.preventDefault();
    prop.addGoals(formData);
    setFormData({goal: "", by: ""});
  }
  return (
    <>
    <h1>Goals</h1>
    <form onSubmit={submitHander}>
      <input type="text" name="goal" placeholder="goal" value={formData.goal} onChange={changeHandler}></input>
      <input type="text" name="by" placeholder="by" value={formData.by} onChange={changeHandler}></input>
      <button>add</button>
    </form>
      
    </>
  )
}

const ListOfGoals =(props) => {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>Accomplish {g.goal}, by {g.by}</span>
        </li>
    ))}
    </ul>
    
  )
}



function App() {
  const [allGoals, updateAllGoals] = useState([]);
  const addGoals =(goal) => {
    updateAllGoals([...allGoals, goal])
  };
  return (
    <>
      <GoalForm addGoals={addGoals}/>
      <ListOfGoals allGoals={allGoals}/>
      
    </>
        
      );
  };


export default App;