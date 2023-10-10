import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/homepage/homepage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectProfile from './components/projectlist/projectprofile/projectprofile.js'; 



const root = ReactDOM.createRoot(document.getElementById('root'));



ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Homepage /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/project-profile/:id" element={<ProjectProfile />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
