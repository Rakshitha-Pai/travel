import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <button className="toggle-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <nav>
        <Link to="/employee">Employee Dashboard</Link>
        <Link to="/user">User Dashboard</Link>
        
      </nav>
    </div>
  );
};

export default Sidebar;
