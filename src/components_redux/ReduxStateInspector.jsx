// src/components_redux/ReduxStateInspector.jsx
import React from 'react';
import { useSelector } from 'react-redux';

// Select the entire game slice for inspection
const selectGameSlice = (state) => state.game;

function ReduxStateInspector() {
  const gameState = useSelector(selectGameSlice);

  // Filter out the status for a cleaner display if it's too verbose or derived
  // const { status, ...stateToDisplay } = gameState;
  // Or display everything:
  const stateToDisplay = gameState;

  return (
    <div className="redux-state-inspector">
      <h4>Redux Store State (game slice):</h4>
      <pre>
        {JSON.stringify(stateToDisplay, null, 2)}
      </pre>
    </div>
  );
}

export default ReduxStateInspector;