// src/components_redux/BoardRedux.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SquareRedux from './SquareRedux';
import { makeMove, selectSquares, selectStatus } from '../features/game/gameSlice';

function BoardRedux() {
  const squares = useSelector(selectSquares);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  function handleSquareClick(i) {
    dispatch(makeMove(i));
  }

  const boardRows = [];
  for (let row = 0; row < 3; row++) {
    const squaresInRow = []; // Create this array inside the outer loop
    for (let col = 0; col < 3; col++) {
      const index = row * 3 + col;
      squaresInRow.push(
        <SquareRedux
          key={index}
          value={squares[index]}
          onClick={() => handleSquareClick(index)}
        />
      );
    }
    // Push the completed row of squares
    boardRows.push(<div key={row} className="board-row">{squaresInRow}</div>);
  }

  return (
    <>
      <div className="status">{status}</div>
      {/* Wrap rows in game-board for consistent structure */}
      <div className="game-board">
          {boardRows}
      </div>
    </>
  );
}

export default BoardRedux;