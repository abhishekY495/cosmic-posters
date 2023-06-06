import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  return !user ? <Navigate to="/login" state={{ from: location }} /> : children;
}
