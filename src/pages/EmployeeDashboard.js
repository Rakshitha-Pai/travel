// src/pages/EmployeeDashboard.js
import React from "react";
import TravelList from "../components/TravelList";

const EmployeeDashboard = () => {
  const containerStyle = {
    background: 'url("/images/travel_mode.png") no-repeat center center',
    backgroundSize: "contain", // Ensures the entire image is visible
    minHeight: "100vh",
    padding: "80px 20px 20px 20px",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    minHeight: "100%",
    padding: "20px",
    borderRadius: "8px",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <h2 style={{ color: "#fff" }}>Employee Dashboard</h2>
        <p style={{ color: "#fff" }}>Manage Travel Bookings below.</p>
        <TravelList />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
