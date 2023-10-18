import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProjectProfile from './components/ProjectList/ProjectProfile/ProjectProfile.js';
import CustomerProfile from './components/ProjectList/CustomerProfile/CustomerProfile.js';
import ProjectList from './components/ProjectList/ProjectList.js';
import LayoutComponent from './components/LayoutComponent/LayoutComponent.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Resource from './components/Resource/Resources.js';
import Inspiration from './components/Inspiration/Inspiration.js';
import MyAccount from './components/MyAccount/MyAccount.js';


import './App.css';


const root = ReactDOM.createRoot(document.getElementById('root'));


const App = () => {
  return (

    <Router>
      {/* Add any components that have the <Link to> component */}
      <LayoutComponent>
        <Routes>
          {/* Add Components you want to route */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project-list" element={<ProjectList />} />
          <Route path="/project-list/proj/:id" element={<ProjectProfile />} />
          <Route path="/project-list/cust/:id" element={<CustomerProfile />} />

          <Route path="/resources" element={<Resource />} />
          <Route path="/inspiration-space" element={<Inspiration />} />
          <Route path="/my-account" element={<MyAccount />} />

        </Routes>
      </LayoutComponent>
    </Router>


  )
}


export default App;

