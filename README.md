# Tic-Tac-Toe State Management Comparison

This project demonstrates a simple Tic-Tac-Toe game built using React, showcasing two different approaches to state management:

1.  **Native React State:** Using `useState` and prop drilling.
2.  **React Redux:** Using `@reduxjs/toolkit` and `react-redux` for centralized state management.

The goal is to provide a side-by-side comparison of the implementation complexity and patterns for a basic application.

## Features

*   Play a standard 3x3 Tic-Tac-Toe game.
*   Indicates the current player.
*   Announces the winner or a draw.
*   Restart game button.
*   Includes both Native React and React Redux implementations.

## Prerequisites

*   Node.js (LTS version recommended) - You can download it from [nodejs.org](https://nodejs.org/).
*   npm or yarn (comes with Node.js installation).

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository-url> multi-version-tic-tac-toe
    cd multi-version-tic-tac-toe
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

## Running the Application

The project is configured to run via Vite. By default, it might be set up to run either the Native React or Redux version. You can switch between them by modifying the `src/App.jsx` file.

1.  **Choose the State Management Version:**

    Open `src/App.jsx`. You will find code similar to this:

    ```jsx
    import React from 'react';
    import NativeGame from './components/Game'; // Assuming Native React version is named Game.jsx
    import ReduxGame from './components/GameRedux'; // Assuming Redux version is named GameRedux.jsx
    import './App.css';
    import { Provider } from 'react-redux'; // Only needed for Redux version
    import { store } from './app/store';      // Only needed for Redux version

    function App() {
      // --- Uncomment ONE of the following blocks to choose the version ---

      // --- Native React Version ---
      // return (
      //   <div className="App">
      //     <h1>Tic-Tac-Toe (Native React State)</h1>
      //     <NativeGame />
      //   </div>
      // );

      // --- React Redux Version ---
      // return (
      //   <Provider store={store}>
      //     <div className="App">
      //       <h1>Tic-Tac-Toe (React Redux)</h1>
      //       <ReduxGame />
      //     </div>
      //   </Provider>
      // );

      // --- Default (e.g., showing one version) ---
      return (
         <div className="App">
           <h1>Tic-Tac-Toe (Native React State)</h1> {/* Or Redux title */}
           <NativeGame /> {/* Or <Provider store={store}><ReduxGame /></Provider> */}
         </div>
       );
    }

    export default App;
    ```

    Modify `src/App.jsx` to uncomment the block corresponding to the version you want to run and comment out the others.

2.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The application will open in your browser (usually at `http://localhost:5173/` or similar).

## Code Structure Overview

*   `src/components/`: Contains reusable React components like `Square.jsx`, `Board.jsx`, and the main game component (`Game.jsx` for Native, potentially `GameRedux.jsx` for Redux, or similar).
*   `src/utils/calculateWinner.js`: Helper function for determining the game winner.
*   `src/app/store.js` (Redux version): Configures the Redux store.
*   `src/features/game/gameSlice.js` (Redux version): Defines the Redux slice for the game state (initial state, reducers, actions, selectors) using `@reduxjs/toolkit`.
*   `src/App.jsx`: The main application component, used to switch between the two implementations.
*   `src/main.jsx` (or `index.js`): The entry point that renders the React application.
*   `public/`: Static assets (like `index.html`).
*   `package.json`: Project dependencies and scripts.

## Comparing the Implementations

Explore the code in `src/components/Game.jsx` (Native React) and compare it to the structure involving `src/features/game/` and components like `Board.jsx` using `useSelector` and `useDispatch` (React Redux).

Key differences to observe:

*   **State Location:** State (`squares`, `xIsNext`) is managed within the `Game` component in the Native React version. In the Redux version, it's in the central Redux store, defined in `gameSlice.js`.
*   **State Updates:** Native React uses `setSquares`, `setXIsNext`, etc., called directly or passed down via callbacks. Redux uses `dispatch(actionCreator(...))` to send an action, which is then processed by a reducer.
*   **Data Access:** Native React passes state down as props (`squares`, `xIsNext` to `Board`). Redux components use `useSelector` to read state directly from the store.
*   **Prop Drilling:** More noticeable in the Native React version (e.g., `onSquareClick` callback passed from `Game` to `Board` to `Square`). Redux reduces this as components connect directly to the store via hooks.
*   **Boilerplate:** Redux requires more initial setup (store, slice) compared to simply using `useState`.
