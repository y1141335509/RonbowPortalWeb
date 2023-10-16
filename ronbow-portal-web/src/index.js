import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/homepage/homepage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectProfile from './components/projectlist/projectprofile/projectprofile.js'; 
import CustomerProfile from './components/projectlist/customerprofile/customerprofile.js';
import ProjectList from './components/projectlist/projectlist.js';
import LayoutComponent from './components/homepage/LayoutComponent/LayoutComponent.js';



const root = ReactDOM.createRoot(document.getElementById('root'));


ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* Add any components that have the <Link to> component */}
      <LayoutComponent />
      <Routes>
        {/* Add Components you want to route */}
        <Route path="/" element={<Homepage />} />
        <Route path="/project-list" element={<ProjectList /> } />
        <Route path="/project-list/:id" element={<ProjectProfile />} />
        <Route path="/customer-profile/:id" element={<CustomerProfile /> } />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
