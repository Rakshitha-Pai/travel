// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import UserDashboard from "./pages/UserDashboard";
import PaymentCart from "./pages/PaymentCart";
import PaymentReceipt from "./pages/PaymentReceipt";
import AdminLogin from "./pages/AdminLogin";
import "./styles/App.css";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (!isLoggedIn) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
};

const App = () => {
  return (
    <Router>
      <Sidebar />
      <div className="main-content">
        <Routes>
          {/* Public route: Admin Login */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee"
            element={
              <ProtectedRoute>
                <EmployeeDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment-cart"
            element={
              <ProtectedRoute>
                <PaymentCart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment-receipt"
            element={
              <ProtectedRoute>
                <PaymentReceipt />
              </ProtectedRoute>
            }
          />
          {/* Catch-all: redirect to admin-login if no route matches */}
          <Route path="*" element={<Navigate to="/admin-login" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
