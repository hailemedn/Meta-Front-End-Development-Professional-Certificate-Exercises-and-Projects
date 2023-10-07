import React, { useReducer } from "react";

function App() {
  const reducer = (state, action) => {
    if(action.type === "buy_ingredients") return {money: state.money - 10}
    if(action.type === "sell_a_meal") return {money: state.money + 10}
    return state
  }
  const initialState = {money: 100}
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <button onClick={() => dispatch({type: "buy_ingredients"})}>buy ingredients</button>
      <button onClick={() => dispatch({type: "sell_a_meal"})}>sell a meal</button>
    </div>
  )
}

export default App;
