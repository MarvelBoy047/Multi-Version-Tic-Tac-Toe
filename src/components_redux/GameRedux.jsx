// src/components_redux/GameRedux.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector
import BoardRedux from './BoardRedux';
import { restartGame } from '../features/game/gameSlice';
// Optional: Import the whole game slice selector if you want to save everything
// import { selectGameSlice } from '../features/game/gameSlice'; // Assuming you have a selector for the whole slice

function GameRedux() {
    const dispatch = useDispatch();
    // Get the parts of the state you want to save
    const squares = useSelector((state) => state.game.squares);
    const winner = useSelector((state) => state.game.winner);
    const status = useSelector((state) => state.game.status);
    // Alternatively, get the whole game slice:
    // const fullGameState = useSelector(selectGameSlice); // If you defined such a selector

    const handleRestartClick = () => {
        dispatch(restartGame());
    }

    const handleSaveResult = () => {
        const gameResult = {
            finalBoard: squares,
            winner: winner,
            finalStatus: status,
            timestamp: new Date().toISOString(),
            // If using fullGameState:
            // ...fullGameState
        };

        const jsonString = JSON.stringify(gameResult, null, 2); // Pretty print JSON
        const blob = new Blob([jsonString], { type: 'application/json' });
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = 'result.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(href); // Clean up
    };

  return (
    <div className="game">
        <BoardRedux />
        <div className="game-actions"> {/* Wrapper for buttons */}
            <button onClick={handleRestartClick}>Restart Game</button>
            <button onClick={handleSaveResult} className="save-button">Save Result (JSON)</button>
        </div>
      <div className="game-info">
        {/* No move history implemented here, placeholder */}
        <ol>{/* Redux move history could go here if implemented */}</ol>
      </div>
    </div>
  );
}

export default GameRedux;