import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/homepage/homepage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectProfile from './components/projectlist/projectprofile/projectprofile.js'; 
import CustomerList from './components/projectlist/customerlist/customerlist.js';



const root = ReactDOM.createRoot(document.getElementById('root'));



ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Homepage /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/project-profile/:id" element={<ProjectProfile />} />
        <Route path="/customer-profile/:id" element={<CustomerList /> } />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
