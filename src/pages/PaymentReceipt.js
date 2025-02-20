// src/pages/PaymentReceipt.js
import React, { useEffect, useState } from "react";
import "../styles/Payment.css";
import { useNavigate } from "react-router-dom";

const PaymentReceipt = () => {
  const [receipt, setReceipt] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedReceipt = JSON.parse(localStorage.getItem("paymentReceipt"));
    if (storedReceipt) {
      setReceipt(storedReceipt);
    }
  }, []);

  if (!receipt) {
    return (
      <div className="payment-container">
        <h2>No Receipt Found</h2>
        <p>Please complete your payment first.</p>
        <button onClick={() => navigate("/payment-cart")}>Go to Payment</button>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <h2>Payment Receipt</h2>
      <p>Transaction ID: {receipt.transactionId}</p>
      <p>Date: {receipt.date}</p>
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
          {receipt.items.map((item, idx) => (
            <tr key={idx}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.duration}</td>
              <td>{item.destination}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" style={{ textAlign: "right", fontWeight: "bold" }}>
              Total: ₹{receipt.total}
            </td>
          </tr>
        </tbody>
      </table>
      <p>Thank you for your purchase!</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default PaymentReceipt;
