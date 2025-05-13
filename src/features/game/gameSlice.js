// src/features/game/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { calculateWinner } from '../../utils/calculateWinner';

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
  status: 'Next player: X',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    makeMove: (state, action) => {
      const i = action.payload;
      if (state.winner || state.squares[i]) return;

      // Immer handles immutability
      state.squares[i] = state.xIsNext ? 'X' : 'O';
      state.xIsNext = !state.xIsNext;

      const winner = calculateWinner(state.squares);
      state.winner = winner;
       if (winner) {
           state.status = winner === 'Draw' ? 'Result: Draw' : 'Winner: ' + winner;
       } else {
           state.status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
       }
    },
    restartGame: (state) => {
       // Reset state to initial values
       Object.assign(state, initialState); // More robust reset
    },
  },
});

export const { makeMove, restartGame } = gameSlice.actions;

// Selectors
export const selectSquares = (state) => state.game.squares;
export const selectStatus = (state) => state.game.status;
export const selectWinner = (state) => state.game.winner;

export default gameSlice.reducer;