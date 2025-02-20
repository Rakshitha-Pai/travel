import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import UserDashboard from "./pages/UserDashboard";
import PaymentCart from "./pages/PaymentCart";
import PaymentReceipt from "./pages/PaymentReceipt";
import "./styles/App.css";


const App = () => {
  return (
    <Router>
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          
          <Route path="/payment-cart" element={<PaymentCart />} />
          <Route path="/payment-receipt" element={<PaymentReceipt />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
