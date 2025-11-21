// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Selection from "./pages/selection";
import Sudoku from "./pages/sudoku"; // Add this import
import HighScores from "./pages/highscores";
import Rules from "./pages/rules";
import Login from "./pages/login";
import Register from "./pages/register";
import NavBar from "./components/NavBar";
import { SudokuProvider } from "./components/SudokuContext";

function App() {
  return (
    <Router>
      <SudokuProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/sudoku" element={<Sudoku />} /> {/* Add this route */}
          <Route path="/highscores" element={<HighScores />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </SudokuProvider>
    </Router>
  );
}

export default App;