/* Korzysta z API  */
import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import "./Teams.css";

type Team = {
  id: number;
  name: string;
  logo: string;
};

function Teams() {
  const [teams, setTeams] = useState<Team[]>([]);

  
  useEffect(() => {
    fetch("https://v3.football.api-sports.io/teams?league=39&season=2023", {
      headers: {
        "x-apisports-key": "8325392c83dc4026c95011424959cce7"
      }
    })
      .then(res => res.json())
      .then(data => {
        const formattedTeams = data.response.map((teamData: any) => ({
          id: teamData.team.id,
          name: teamData.team.name,
          logo: teamData.team.logo
        }));
        formattedTeams.sort((a: Team, b: Team) => a.name.localeCompare(b.name));
        setTeams(formattedTeams);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="teams-container">
      {teams.map((team) => (
        <TeamCard
          key={team.id}
          id={team.id}
          name={team.name}
          logo={team.logo}
        />
      ))}
    </div>
  );
}

export default Teams;
 /**/

/* Bez requestów API 
import React from "react";
import TeamCard from "./TeamCard";
import "./Teams.css";

const exampleTeams = [
  {
    id: 1,
    name: "Arsenal",
    logo: "https://media-4.api-sports.io/football/teams/42.png",
    stadium: "Emirates Stadium",
    city: "London",
    type: "type1"
  },
  {
    id: 2,
    name: "Manchester City",
    logo: "https://media-4.api-sports.io/football/teams/50.png",
    stadium: "Etihad Stadium",
    city: "Manchester",
    type: "type2"
  },
  {
    id: 3,
    name: "Liverpool",
    logo: "https://media-4.api-sports.io/football/teams/40.png",
    stadium: "Anfield",
    city: "Liverpool",
    type: "type3"
  },
  {
    id: 4,
    name: "Chelsea",
    logo: "https://media-4.api-sports.io/football/teams/49.png",
    stadium: "Stamford Bridge",
    city: "London",
    type: "type4"
  },
];

function Teams() {
  return (
    <div className="teams-container">
      {exampleTeams.map((team) => (
        <TeamCard
          key={team.id}
          id={team.id}
          name={team.name}
          logo={team.logo}
        />
      ))}
    </div>
  );
}

export default Teams;
 */
