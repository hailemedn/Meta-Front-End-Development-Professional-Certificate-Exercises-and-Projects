import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState([]);
  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
    .then(response => response.json())
    .then(data => setUser(data));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h2>Data returned</h2>
      <h3>First Name: {user.results[0].name.first}</h3>
      <h3>Last Name: {user.results[0].name.last}</h3>
    </div>
  ) : (<h2>Data Pending...</h2>);
} 


export default App;