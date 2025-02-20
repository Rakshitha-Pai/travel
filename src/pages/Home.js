import React from "react";
import { useNavigate } from "react-router-dom";  // Import hook for navigation
import "../styles/App.css";

const Home = () => {
  const navigate = useNavigate();

  const heroStyle = {
    background: 'url("/images/right_travel.png") center center no-repeat',
    backgroundSize: "contain", // or "cover"
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
    position: "relative",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: "40px",
    borderRadius: "8px",
  };

  // When "Get Started" is clicked, navigate to /user
  const handleGetStarted = () => {
    navigate("/user");
  };

  return (
    <div>
      {/* Header Section */}
      <header className="header-container">
        <div className="header-content">
          <img src="/images/logo.jpg" alt="Travel Logo" className="logo" />
          <h1 className="site-name">Avenue Travellers</h1>
        </div>
      </header>

      {/* Hero Section */}
      <div style={heroStyle}>
        <div style={overlayStyle}>
          <h2 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            Explore the World with Us
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
            Plan, Book, and Enjoy Your Dream Vacation
          </p>
          <button
            onClick={handleGetStarted}
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              backgroundColor: "#ef4339",
              border: "none",
              borderRadius: "4px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Additional Content Section */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Why Travel With Us?</h2>
        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
          We offer curated travel packages, expert advice, and a seamless booking
          experience. Whether you’re seeking adventure, relaxation, or cultural
          immersion, we have the perfect itinerary for you.
        </p>
      </section>
    </div>
  );
};

export default Home;
