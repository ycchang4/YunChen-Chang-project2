import { useSudoku } from "./SudokuContext";
import "../assets/games-style.css";

export default function Cell({ row, col, value, size, boxRows, boxCols }) {
  const { board, setBoard, solution } = useSudoku();

  const handleChange = (e) => {
    const val = e.target.value;
    const maxNum = size === 6 ? /^[1-6]$/ : /^[1-9]$/;
    if (val === "" || maxNum.test(val)) {
      const newBoard = board.map((r) => [...r]);
      newBoard[row][col] = val;
      setBoard(newBoard);
    }
  };

  const isWrong = solution[row]?.[col] && value && value !== solution[row][col];

  return (
    <input
      value={value}
      onChange={handleChange}
      maxLength={1}
      style={{
        width: "38px",
        height: "38px",
        textAlign: "center",
        fontSize: "20px",
        borderTop: row % boxRows === 0 ? "2px solid black" : "1px solid gray",
        borderLeft: col % boxCols === 0 ? "2px solid black" : "1px solid gray",
        borderRight: (col + 1) % boxCols === 0 ? "2px solid black" : "1px solid gray",
        borderBottom: (row + 1) % boxRows === 0 ? "2px solid black" : "1px solid gray",
        backgroundColor: isWrong ? "#fdd" : "white",
      }}
    />
  );
}