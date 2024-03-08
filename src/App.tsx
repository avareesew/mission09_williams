import React from "react";
import logo from "./logo.svg";
import "./App.css";
import teamsData from "./CollegeBasketballTeams.json";
function Welcome() {
  return <h1>Welcome to my Website about College Basketball Teams!</h1>;
}
function App() {
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default App;
