import React, { useState } from "react";
import "../styles/Travel.css";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  // A list of packages (10 unique states/destinations in India)
  const allPackages = [
    {
      id: 1,
      title: "Beach Bliss in Goa",
      duration: "3 Nights / 4 Days",
      destination: "Goa",
      price: "₹7,999",
      img: "/images/beachgoa.jpg",
    },
    {
      id: 2,
      title: "Majestic Mountains in Himachal Pradesh",
      duration: "4 Nights / 5 Days",
      destination: "Himachal Pradesh",
      price: "₹12,500",
      img: "/images/himachal.jpg",
    },
    {
      id: 3,
      title: "Royal Heritage of Rajasthan",
      duration: "3 Nights / 4 Days",
      destination: "Rajasthan",
      price: "₹9,999",
      img: "/images/raja.jpg",
    },
    {
      id: 4,
      title: "Serene Backwaters of Kerala",
      duration: "5 Nights / 6 Days",
      destination: "Kerala",
      price: "₹14,999",
      img: "/images/kerala.jpg",
    },
    {
      id: 5,
      title: "Enchanting Valleys of Kashmir",
      duration: "4 Nights / 5 Days",
      destination: "Jammu and Kashmir",
      price: "₹13,000",
      img: "/images/kashmir.jpg",
    },
    {
      id: 6,
      title: "Cultural Tour of West Bengal",
      duration: "2 Nights / 3 Days",
      destination: "West Bengal",
      price: "₹6,999",
      img: "/images/westbengal.jpg",
    },
    {
      id: 7,
      title: "Historic Temples of Tamil Nadu",
      duration: "3 Nights / 4 Days",
      destination: "Tamil Nadu",
      price: "₹8,500",
      img: "/images/tamil.jpg",
    },
    {
      id: 8,
      title: "Wildlife Safari in Madhya Pradesh",
      duration: "3 Nights / 4 Days",
      destination: "Madhya Pradesh",
      price: "₹10,000",
      img: "/images/mp.jpg",
    },
    {
      id: 9,
      title: "City Lights of Maharashtra",
      duration: "2 Nights / 3 Days",
      destination: "Maharashtra",
      price: "₹7,500",
      img: "/images/Maha.jpg",
    },
    
  ];

  // State for search query and filtered packages
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPackages, setFilteredPackages] = useState(allPackages);

  // Handler for the search
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredPackages(allPackages);
      return;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    const newFiltered = allPackages.filter(
      (pkg) =>
        pkg.destination.toLowerCase().includes(lowerCaseQuery) ||
        pkg.title.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredPackages(newFiltered);
  };

  // When user clicks "Add Booking", add package to cart and navigate to payment page
  const handleAddBooking = (selectedPackage) => {
    const CART_KEY = "paymentCart";
    // Retrieve existing cart items from localStorage (if any)
    const existingCart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    // Add the selected package to the cart
    existingCart.push(selectedPackage);
    localStorage.setItem(CART_KEY, JSON.stringify(existingCart));
    // Navigate to Payment Cart page
    navigate("/payment-cart");
  };

  // Get top 2 packages from the filtered packages list for the best selling table.
  const topSellingPackages = filteredPackages.slice(0, 2);

  const containerStyle = {
    background: 'url("/images/travel_mode.png") no-repeat center center/cover',
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
        {/* Hero Section */}
        <div style={{ textAlign: "center", color: "#fff", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
            Plan Your Holiday Packages
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
            Customize & Book Amazing Tours
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: "10px",
                width: "300px",
                border: "none",
                borderRadius: "4px 0 0 4px",
                outline: "none",
              }}
            />
            <button
              onClick={handleSearch}
              style={{
                padding: "10px 20px",
                backgroundColor: "#ef4339",
                border: "none",
                borderRadius: "0 4px 4px 0",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Search
            </button>
          </div>
        </div>

        {/* Popular Packages Section - Filtered by search */}
        <div
          style={{
            marginTop: "40px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Popular Packages</h2>
          <div className="travel-cards">
            {filteredPackages.map((pkg) => (
              <div className="travel-card" key={pkg.id}>
                <img src={pkg.img} alt={pkg.title} className="travel-image" />
                <div className="travel-card-content">
                  <h4>{pkg.title}</h4>
                  <p>{pkg.duration}</p>
                  <p>{pkg.price}</p>
                  <button className="btn-primary" onClick={() => handleAddBooking(pkg)}>
                    Add Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
          {filteredPackages.length === 0 && (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              No packages found for "{searchQuery}".
            </p>
          )}
        </div>

        {/* Best Selling Tour Packages Table - Only Top 2 Packages */}
        <div
          style={{
            marginTop: "40px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Best Selling Tour Packages</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ backgroundColor: "#ef4339", color: "#fff" }}>
              <tr>
                <th style={{ padding: "10px", textAlign: "left" }}>Package</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Price</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Duration</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Destination</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {topSellingPackages.map((pkg) => (
                <tr key={pkg.id} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "10px" }}>{pkg.title}</td>
                  <td style={{ padding: "10px" }}>{pkg.price}</td>
                  <td style={{ padding: "10px" }}>{pkg.duration}</td>
                  <td style={{ padding: "10px" }}>{pkg.destination}</td>
                  <td style={{ padding: "10px" }}>
                    <button className="btn-primary" onClick={() => handleAddBooking(pkg)}>
                      Add Booking
                    </button>
                  </td>
                </tr>
              ))}
              {topSellingPackages.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ padding: "10px", textAlign: "center" }}>
                    No packages found for "{searchQuery}".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
