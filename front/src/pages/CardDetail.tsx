/* Korzysta z API 
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardDetail.css";

function CardDetail() {
  const { id } = useParams();
  const [team, setTeam] = useState<any>(null);

  useEffect(() => {
    fetch(`https://v3.football.api-sports.io/teams?id=${id}`, {
      headers: {
        "x-apisports-key": "8325392c83dc4026c95011424959cce7"
      }
    })
      .then(res => res.json())
      .then(data => {
        const teamData = data.response[0];
        const formattedTeam = {
          id: teamData.team.id,
          name: teamData.team.name,
          logo: teamData.team.logo,
          country: teamData.team.country,
          city: teamData.venue.city,
          stadium: teamData.venue.name,
          founded: teamData.team.founded,
          capacity: teamData.venue.capacity,
        };
        setTeam(formattedTeam);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!team) return <p>Ładowanie...</p>;

  return (
    <div className="team-detail-card">
      <div className="team-logo-section">
        <img src={team.logo} alt={team.name} className="team-detail-logo" />
      </div>

      <div className="team-info-section">
        <h1 className="teamDetail-name">{team.name}</h1>

        <div className="team-details-vertical">
          <div className="detail-item">
            <span className="detail-label">Kraj:</span>
            <span className="detail-value">{team.country}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Miasto:</span>
            <span className="detail-value">{team.city}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Stadion:</span>
            <span className="detail-value">{team.stadium}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Rok założenia:</span>
            <span className="detail-value">{team.founded}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Pojemność stadionu:</span>
            <span className="detail-value">{team.capacity?.toLocaleString() || "Brak danych"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
 */

/* Bez API */
import React from "react";
import { useParams } from "react-router-dom";
import "./CardDetail.css";

function CardDetail() {
  const { id } = useParams();

  const teamsData: any = {
    1: {
      name: "Arsenal FC",
      logo: "https://media-4.api-sports.io/football/teams/42.png",
      country: "Anglia",
      city: "London",
      stadium: "Emirates Stadium",
      founded: 1886,
      capacity: 60704,
    },
    2: {
      name: "Manchester City",
      logo: "https://media-4.api-sports.io/football/teams/50.png",
      country: "Anglia",
      city: "Manchester",
      stadium: "Etihad Stadium",
      founded: 1880,
      capacity: 55097,
    },
    3: {
      name: "Liverpool FC",
      logo: "https://media-4.api-sports.io/football/teams/40.png",
      country: "Anglia",
      city: "Liverpool",
      stadium: "Anfield",
      founded: 1892,
      capacity: 54074,
    },
    4: {
      name: "Chelsea FC",
      logo: "https://media-4.api-sports.io/football/teams/49.png",
      country: "Anglia",
      city: "London",
      stadium: "Stamford Bridge",
      founded: 1905,
      capacity: 40834,
    },
  };

  const team = teamsData[id as keyof typeof teamsData];

  if (!team) return <p>Nie znaleziono drużyny.</p>;

  return (
    <div className="team-detail-card">
      <div className="team-logo-section">
        <img src={team.logo} alt={team.name} className="team-detail-logo" />
      </div>

      <div className="team-info-section">
        <h1 className="teamDetail-name">{team.name}</h1>

        <div className="team-details-vertical">
          <div className="detail-item">
            <span className="detail-label">Kraj:</span>
            <span className="detail-value">{team.country}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Miasto:</span>
            <span className="detail-value">{team.city}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Stadion:</span>
            <span className="detail-value">{team.stadium}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Rok założenia:</span>
            <span className="detail-value">{team.founded}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Pojemność stadionu:</span>
            <span className="detail-value">{team.capacity.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;

/* */
