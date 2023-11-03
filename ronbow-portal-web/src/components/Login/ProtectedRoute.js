import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = () => {
    // Check if the user's authentication status is stored in local storage
    return localStorage.getItem("isAuthenticated") === "true";
  };

  if (!isAuthenticated()) {
    // Redirect them to the /login page if not authenticated
    return <Navigate to="/login" />;
  }

  return children;
};
