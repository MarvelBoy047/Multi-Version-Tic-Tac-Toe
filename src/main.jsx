// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css'; // Keep global styles if any
import './App.css'; // Ensure App.css is loaded (or imported in App.jsx)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provider still wraps App to provide store to the Redux version */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);