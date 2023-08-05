import './styles.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMessage from './components/StatusMessage';
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setXNext] = useState(true);
  const winner = calculateWinner(squares);

  console.log(squares);

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) return;

    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition == position) {
          return isXNext ? 'X' : 'O';
        } else return squareValue;
      });
    });
    setXNext(currentIsXNext => !currentIsXNext);
  };
  return (
    <div className="app">
      <h2>
        <div>
          <StatusMessage winner={winner} isXNext={isXNext} squares={squares} />
        </div>
      </h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}
export default App;
