// src/components_native/SquareNative.jsx
import React from 'react';

function SquareNative({ value, onSquareClick }) {
  // Add className="square" for styling
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
export default SquareNative;