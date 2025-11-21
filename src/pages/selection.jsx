import React from "react";
import { Link } from "react-router-dom";
import { useSudoku } from "../components/SudokuContext"; // Update path to match your structure
import "../assets/style.css";
import "../assets/selection-style.css";

export default function Selection() {
  const { setSelectedGame } = useSudoku();
  
  const games = [
    { title: "How To Solve Your Own Murder", author: "Anne Shiley Cuthbert" },
    { title: "The Thursday Murder Club", author: "Rachel Lynde" },
    { title: "Martyr!", author: "Diana Barry" },
    { title: "James", author: "Sebastian Lacroix" },
    { title: "Being Mortal", author: "Gilbert Blythe" },
  ];

  const handleSelect = (game) => {
    setSelectedGame(game);
  };

  return (
    <div className="container">
      <h1>Select a Game</h1>
      <ul className="game-list" style={{ lineHeight: "1.8", color: "rgb(85, 60, 20)", fontSize: "1.1rem" }}>
        {games.map((game, idx) => (
          <li key={idx}>
            <Link 
              to="/sudoku" 
              className="game-link" 
              onClick={() => handleSelect(game)}
            >
              {game.title}
            </Link> – Author: {game.author}
          </li>
        ))}
      </ul>
    </div>
  );
}