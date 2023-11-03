import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, } from 'react-router-dom';
import ProjectProfile624748504 from './components/ProjectList/ProjectProfile/ProjectProfile624748504.js';
import ProjectProfile624691229 from './components/ProjectList/ProjectProfile/ProjectProfile624691229.js';
import CustomerProfile from './components/ProjectList/CustomerProfile/CustomerProfile.js';
import ProjectList from './components/ProjectList/ProjectList.js';
import LayoutComponent from './components/LayoutComponent/LayoutComponent.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Resources from './components/Resources/Resources.js';
import PublicResources from './components/Resources/PublicResources/PublicResources.js';
import Inspiration from './components/Inspiration/Inspiration.js';
import Requests from './components/Requests/Requests.js';
import MyAccount from './components/MyAccount/MyAccount.js';
import Leads from './components/Leads/Leads.js';
import { ProtectedRoute } from './components/Login/ProtectedRoute.js';
import { Login } from './components/Login/Login.js';
import { NotFoundPage } from './components/Login/NotFoundPage.js';



import './App.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const LayoutWithOutlet = () => (
  <LayoutComponent>
    <Outlet />
  </LayoutComponent>
);


function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* Protected Routes with Layout */}
        <Route element={<ProtectedRoute><LayoutWithOutlet /></ProtectedRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project-list" element={<ProjectList />} />
          <Route path="/project-list/proj/624748504" element={<ProjectProfile624748504 />} />
          <Route path="/project-list/proj/624691229" element={<ProjectProfile624691229 />} />
          <Route path="/project-list/cust/:id" element={<CustomerProfile />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/public-resources" element={<PublicResources />} />
          <Route path="/inspiration-space" element={<Inspiration />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/leads" element={<Leads />} />
        </Route>
        {/*  */}


      </Routes>
    </Router>
  );
}


export default App;

