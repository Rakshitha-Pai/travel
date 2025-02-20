// src/components/TravelForm.js
import React, { useState, useEffect } from "react";
import { addBooking, updateBooking } from "../localStorageService";
import "../styles/Travel.css";

const TravelForm = ({ existingBooking, refreshList, clearEdit }) => {
  const [formData, setFormData] = useState({
    travellerName: "",
    type: "",
    stayType: "",
    contactNumber: "",
    travelArea: "",
  });

  useEffect(() => {
    if (existingBooking) {
      setFormData(existingBooking);
    } else {
      setFormData({
        travellerName: "",
        type: "",
        stayType: "",
        contactNumber: "",
        travelArea: "",
      });
    }
  }, [existingBooking]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingBooking) {
      updateBooking(existingBooking.id, formData);
    } else {
      addBooking(formData);
    }
    refreshList();
    clearEdit();
    setFormData({
      travellerName: "",
      type: "",
      stayType: "",
      contactNumber: "",
      travelArea: "",
    });
  };

  return (
    <div className="travel-form-container">
      <h3>{existingBooking ? "Update Booking" : "Add Booking"}</h3>
      <form onSubmit={handleSubmit} className="travel-form">
        <input
          type="text"
          name="travellerName"
          value={formData.travellerName}
          onChange={handleChange}
          placeholder="Traveller Name"
          required
        />
        <select name="type" value={formData.type} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="Train">Train</option>
          <option value="Airplane">Airplane</option>
          <option value="Bus">Bus</option>
          <option value="Car">Car</option>
          <option value="Cruise">Cruise</option>
        </select>
        <select
          name="stayType"
          value={formData.stayType}
          onChange={handleChange}
          required
        >
          <option value="">Select Stay Type</option>
          <option value="Hotel">Hotel</option>
          <option value="Resort">Resort</option>
        </select>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number"
          required
        />
        <select
          name="travelArea"
          value={formData.travelArea}
          onChange={handleChange}
          required
        >
          <option value="">Select Travel Area</option>
          <option value="Mountain">Mountain</option>
          <option value="City">City</option>
          <option value="Desert">Desert</option>
        </select>
        <button type="submit" className="btn-primary">
          {existingBooking ? "Update" : "Add"} Booking
        </button>
      </form>
    </div>
  );
};

export default TravelForm;
