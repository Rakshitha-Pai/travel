// src/pages/PaymentCart.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Payment.css";

// For demo purposes, we use localStorage to store the cart items.
// In a real app, you might have a dedicated cart service or state management.
const CART_KEY = "paymentCart";

const PaymentCart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [upiId, setUpiId] = useState("");
  const [billGenerated, setBillGenerated] = useState(false);
  const [receipt, setReceipt] = useState({});

  // For demonstration, load cart items from localStorage.
  // You can simulate that a package was added from the UserDashboard.
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    setCartItems(storedCart);
  }, []);

  // For simplicity, compute total amount from cart items.
  const totalAmount = cartItems.reduce((sum, item) => {
    // Assuming price is stored as string with ₹ prefix. Remove and convert.
    const price = Number(item.price.replace(/[₹,]/g, ""));
    return sum + price;
  }, 0);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing...
    const bill = {
      items: cartItems,
      total: totalAmount,
      paymentMethod,
      transactionId: "TXN" + Date.now(),
      date: new Date().toLocaleString(),
    };
    // For demo, save receipt to localStorage and set state.
    localStorage.setItem("paymentReceipt", JSON.stringify(bill));
    setReceipt(bill);
    setBillGenerated(true);
    // Optionally, clear the cart.
    localStorage.removeItem(CART_KEY);
  };

  if (billGenerated) {
    // If bill is generated, navigate to PaymentReceipt page.
    navigate("/payment-receipt");
  }

  return (
    <div className="payment-container">
      <h2>Payment Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Package</th>
                <th>Price</th>
                <th>Duration</th>
                <th>Destination</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.duration}</td>
                  <td>{item.destination}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="4" style={{ textAlign: "right", fontWeight: "bold" }}>
                  Total: ₹{totalAmount}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="payment-form-container">
            <h3>Choose Payment Method</h3>
            <form onSubmit={handlePaymentSubmit}>
              <div className="form-group">
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Credit Card"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    required
                  />
                  Credit Card
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Debit Card"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Debit Card
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="UPI"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  UPI
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Net Banking"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Net Banking
                </label>
              </div>

              {paymentMethod === "Credit Card" || paymentMethod === "Debit Card" ? (
                <div className="form-group">
                  <label>Card Number:</label>
                  <input
                    type="text"
                    placeholder="Enter card number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                </div>
              ) : null}

              {paymentMethod === "UPI" ? (
                <div className="form-group">
                  <label>UPI ID:</label>
                  <input
                    type="text"
                    placeholder="example@upi"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    required
                  />
                </div>
              ) : null}

              <button type="submit" className="btn-payment">
                Pay Now
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentCart;
