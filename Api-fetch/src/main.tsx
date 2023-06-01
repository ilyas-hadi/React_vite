import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRouter from './MainRouter';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
)
