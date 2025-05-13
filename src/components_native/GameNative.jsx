// src/components_native/GameNative.jsx
import React, { useState } from 'react';
import BoardNative from './BoardNative';

function GameNative() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = history.slice(0, currentMove + 1);
    setHistory([...nextHistory, nextSquares]);
    setCurrentMove(nextHistory.length);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

   function handleRestart() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
   }

  const moves = history.map((_squares, move) => {
    const description = move > 0 ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    // Removed outer 'game-board' div, handled by BoardNative now
    // Added main 'game' class wrapper for layout
    <div className="game">
        <BoardNative
          squares={currentSquares}
          xIsNext={xIsNext}
          onPlay={handlePlay}
        />
        {/* Restart button moved below Board */}
        <button onClick={handleRestart}>Restart Game</button>
      <div className="game-info">
        {/* Only show move list if there's history */}
        {history.length > 1 && <ol>{moves}</ol>}
      </div>
    </div>
  );
}
export default GameNative;