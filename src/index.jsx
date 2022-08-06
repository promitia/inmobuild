import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //styles
import './components/Header/Header.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
