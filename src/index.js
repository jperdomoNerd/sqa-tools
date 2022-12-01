import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/style.css';
import SqaToolsContainer from './components/SqaToolsContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SqaToolsContainer />
  </React.StrictMode>
);
