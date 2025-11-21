import { useState, useEffect } from "react";
import { useSudoku } from "./SudokuContext";
import "../assets/games-style.css";

export default function Header() {
  const { generateNewBoard, board, setBoard, solveSudoku, size } = useSudoku();
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleSolve = () => {
    const newBoard = board.map((row) => [...row]);
    if (solveSudoku(newBoard, size)) {
      setBoard(newBoard);
      setIsRunning(false);
    } else {
      alert("No solution found.");
    }
  };

  const handleNewGame = (newSize) => {
    generateNewBoard(newSize);
    setSeconds(0);
    setIsRunning(true);
  };

  const handleResetTimer = () => {
    setSeconds(0);
    setIsRunning(true);
  };

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ marginBottom: "20px", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
      <div className="timer">
        <span>⏱️</span>
        <span className="time-display">
          {formatTime(seconds)}
        </span>
      </div>
      
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
        <button className="game-button" onClick={handleSolve}>Solve</button>
        <button className="game-button" onClick={() => handleNewGame(size)}>Refresh</button>
        <button className="game-button" onClick={handleResetTimer}>Reset Timer</button>
        <button className="game-button" onClick={() => handleNewGame(6)}>Easy Mode (6x6)</button>
        <button className="game-button" onClick={() => handleNewGame(9)}>Normal Mode (9x9)</button>
      </div>
    </div>
  );
}