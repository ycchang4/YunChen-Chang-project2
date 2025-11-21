import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSudoku } from "../components/SudokuContext";
import Board from "../components/Board";
import Header from "../components/Header";

export default function SudokuGame() {
  const { selectedGame, board, generateNewBoard } = useSudoku();
  const navigate = useNavigate();

  useEffect(() => {
    // If no game is selected, redirect back to selection
    if (!selectedGame) {
      navigate("/");
      return;
    }
    
    // Generate a new board when component mounts
    generateNewBoard(9);
  }, [selectedGame, navigate]);

  if (!selectedGame) {
    return null;
  }

  // Wait for board to be generated
  if (!board || board.length === 0) {
    return <div>Loading board...</div>;
  }

  return (
    <div className="container">
      <h1>{selectedGame.title}</h1>
      <p>by {selectedGame.author}</p>
      
      <Header />
      <Board />
    </div>
  );
}