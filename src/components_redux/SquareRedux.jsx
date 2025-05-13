// src/components_redux/SquareRedux.jsx
import React from 'react';

function SquareRedux({ value, onClick }) {
  // Add className="square" for styling
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
export default SquareRedux;