import React from "react";
import logo from "./logo.svg";
import "./App.css";
import teamsData from "./CollegeBasketballTeams.json";

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1>Welcome to my Website about College Basketball Teams!</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h3>{oneTeam.name}</h3>
        <h4>
          ({oneTeam.city}, {oneTeam.state})
        </h4>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamsData.teams.map((singleTeam) => (
        <Team {...singleTeam} />
      ))}
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
