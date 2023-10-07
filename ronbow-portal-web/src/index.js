import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/homepage/homepage.js';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Homepage />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
