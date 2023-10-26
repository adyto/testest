import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateContext } from './context/StateContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <StateContext>
      <App />
    </StateContext>
  </BrowserRouter>,
  // </React.StrictMode>,
);
