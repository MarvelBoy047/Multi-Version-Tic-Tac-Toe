// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Tic-Tac-Toe Versions</h1>
      <nav>
        <ul>
          <li>
            <Link to="/native">Native React State Version</Link>
          </li>
          <li>
            <Link to="/redux">React Redux Version</Link>
          </li>
        </ul>
      </nav>
      <p>Select a version to play.</p>
    </div>
  );
}
export default HomePage;