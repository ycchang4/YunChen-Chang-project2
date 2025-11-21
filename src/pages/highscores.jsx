// src/pages/HighScores.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";           
import "../assets/highscores-style.css"; 

export default function HighScores() {
  
  const scores = [
    { rank: 1, username: "Sudoku4life", score: 20 },
    { rank: 2, username: "tiffnyaaa", score: 19 },
    { rank: 3, username: "logicKing", score: 17 },
    { rank: 4, username: "saidtheSky", score: 14 },
    { rank: 5, username: "FlyByMidnight", score: 10 },
  ];

  return (
    <div>

      {/* Page content */}
      <div className="container">
        <h1>High Scores</h1>
        <table className="highscore-table">
          <caption>Top players ranked by puzzles completed</caption>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map(({ rank, username, score }) => (
              <tr key={username}>
                <td>{rank}</td>
                <td>{username}</td>
                <td>{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
