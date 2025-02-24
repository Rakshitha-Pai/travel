
// src/pages/AdminLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Updated credentials: "Rakshi" / "1234"
    if (username === "Rakshi" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="admin-login-container">
      <form onSubmit={handleSubmit} className="admin-login-form">
        <h2>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
