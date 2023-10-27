import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProjectProfile624748504 from './components/ProjectList/ProjectProfile/ProjectProfile624748504.js';
import ProjectProfile624691229 from './components/ProjectList/ProjectProfile/ProjectProfile624691229.js';
import CustomerProfile from './components/ProjectList/CustomerProfile/CustomerProfile.js';
import ProjectList from './components/ProjectList/ProjectList.js';
import LayoutComponent from './components/LayoutComponent/LayoutComponent.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Resource from './components/Resource/Resources.js';
import Inspiration from './components/Inspiration/Inspiration.js';
import Showroom from './components/Showroom/Showroom.js';
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
          <Route path="/project-list/proj/624748504" element={<ProjectProfile624748504 />} />
          <Route path="/project-list/proj/624691229" element={<ProjectProfile624691229 />} />
          <Route path="/project-list/cust/:id" element={<CustomerProfile />} />
          
          <Route path="/resources" element={<Resource />} />
          <Route path="/inspiration-space" element={<Inspiration />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/my-account" element={<MyAccount />} />

        </Routes>
      </LayoutComponent>
    </Router>


  )
}


export default App;

