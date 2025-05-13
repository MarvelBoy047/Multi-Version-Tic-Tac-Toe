// src/App.jsx
import React from 'react';
import GameNative from './components_native/GameNative';
import GameRedux from './components_redux/GameRedux';
import ReduxStateInspector from './components_redux/ReduxStateInspector'; // Import the inspector
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Tic-Tac-Toe: Native State vs Redux</h1>
      </header>
      <main className="dual-view-container">
        {/* Left Column: Native React State Version */}
        <section className="game-column native-column">
          <h2 className="column-title">Native React State</h2>
          <p className="column-explanation">
            Uses React's built-in <code>useState</code> hook. State is managed locally
            within the <code>GameNative</code> component and passed down as props.
            Good for simpler state needs.
          </p>
          <div className="game-instance-wrapper">
            <GameNative />
          </div>
        </section>

        {/* Right Column: React Redux Version */}
        <section className="game-column redux-column">
          <h2 className="column-title">React Redux</h2>
          <p className="column-explanation">
            Uses a centralized Redux store. Components <code>dispatch</code> actions
            (e.g., 'makeMove') and <code>useSelector</code> to get data.
            State changes are predictable and managed by reducers.
          </p>
          <div className="game-instance-wrapper">
            <GameRedux />
          </div>
          {/* Add the Redux State Inspector here */}
          <ReduxStateInspector />
        </section>
      </main>
      <footer className="app-footer">
        <p>Comparing state management approaches in React.</p>
      </footer>
    </div>
  );
}

export default App;