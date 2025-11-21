# Sudoku Games 🎃

A modern, interactive Sudoku web application built with React. Features multiple difficulty levels, real-time validation, timer functionality, and a book-themed game selection interface.

## Features

- **Multiple Difficulty Levels**: Choose between Easy (6x6) and Normal (9x9) Sudoku puzzles
- **Book-Themed Selection**: Unique game selection interface with literary-themed puzzles
- **Real-Time Validation**: Instant feedback on incorrect entries with visual indicators
- **Timer**: Track your solving time with start/stop/reset functionality
- **Locked Prefilled Cells**: Original puzzle numbers are locked and cannot be edited
- **Responsive Design**: Full mobile and desktop support
- **Smart Sudoku Generator**: Automatically generates valid puzzles with unique solutions
- **Auto-Solver**: Stuck? Use the solve button to see the solution
- **Modern UI**: Clean, autumn-themed interface with smooth animations

## Tech Stack

- **Frontend**: React 18
- **Routing**: React Router DOM
- **Styling**: CSS3 with custom styling
- **State Management**: React Context API
- **Algorithm**: Backtracking algorithm for puzzle generation and solving

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ycchang4/YunChen-Chang-project2.git
cd sudoku-game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`


## How to Play

1. **Select a Game**: Choose from the book-themed game list on the Selection page
2. **Fill the Grid**: Click on empty cells and enter numbers 1-9 (or 1-6 for easy mode)
3. **Follow Sudoku Rules**:
   - Each row must contain unique numbers
   - Each column must contain unique numbers
   - Each box must contain unique numbers
4. **Watch the Timer**: Track how long it takes you to solve the puzzle
5. **Get Hints**: Wrong entries are highlighted in red
6. **Need Help?**: Use the "Solve" button to see the complete solution

## Game Controls

- **Solve**: Automatically fills in the solution
- **Refresh**: Generates a new puzzle of the same difficulty
- **Reset Timer**: Resets the timer back to 0:00
- **Easy Mode (6x6)**: Switch to a smaller, easier puzzle
- **Normal Mode (9x9)**: Switch to the standard Sudoku size

## Features Breakdown

### Sudoku Context
- Manages game state globally using React Context API
- Handles puzzle generation, validation, and solving
- Tracks selected game, board state, and solution

### Smart Validation
- Real-time checking of user inputs
- Visual feedback for incorrect entries
- Prevents invalid moves

### Timer System
- Starts automatically when game begins
- Stops when puzzle is solved
- Can be manually reset
- Displays time in MM:SS format

### Responsive Design
- Works on desktop, tablet, and mobile devices
- Touch-friendly interface
- Adaptive layout for different screen sizes

## Deployment

### Deploying to Render

1. Push your code to GitHub
2. Create a new Web Service on [Render](https://render.com)
3. Connect your GitHub repository
4. Use these settings:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview` or use a static site
   - **Environment**: Node

### Deploying to Netlify

1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

## Future Enhancements

- [ ] User authentication
- [ ] Score tracking and leaderboards
- [ ] Multiple save slots
- [ ] Hint system
- [ ] Difficulty progression
- [ ] Daily challenges
- [ ] Multiplayer mode
- [ ] Achievement system

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Grace - Computer Science Master's Student at Northeastern University

## Acknowledgments

- React team for the amazing framework
- Anthropic's Claude for development assistance
- Book titles and authors used for thematic elements

---

Enjoy solving puzzles! 🎃📚