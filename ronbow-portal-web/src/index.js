// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import Homepage from './components/homepage/homepage';


// createRoot(document.getElementById('container')).render(<Homepage />);




import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/homepage/homepage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
  document.getElementById('root')
);
