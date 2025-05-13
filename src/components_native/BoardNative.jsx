// src/components_native/BoardNative.jsx
import React from 'react';
import SquareNative from './SquareNative';
import { calculateWinner } from '../utils/calculateWinner';

function BoardNative({ squares, xIsNext, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
   if (winner) {
    status = winner === 'Draw' ? 'Result: Draw' : 'Winner: ' + winner;
   } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
   }

  const boardRows = [];
  for (let row = 0; row < 3; row++) {
    const squaresInRow = [];
    for (let col = 0; col < 3; col++) {
      const index = row * 3 + col;
      squaresInRow.push(
        <SquareNative
          key={index}
          value={squares[index]}
          onSquareClick={() => handleClick(index)}
        />
      );
    }
    boardRows.push(<div key={row} className="board-row">{squaresInRow}</div>);
  }

  return (
    <>
      <div className="status">{status}</div>
      {/* Wrap rows in game-board for consistent structure if needed by CSS */}
      <div className="game-board">
        {boardRows}
      </div>
    </>
  );
}
export default BoardNative;