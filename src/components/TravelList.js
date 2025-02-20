// src/components/TravelList.js
import React, { useState, useEffect } from "react";
import { getBookings, deleteBooking } from "../localStorageService";
import TravelForm from "./TravelForm";
import "../styles/Travel.css";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";

const TravelList = () => {
  const [bookings, setBookings] = useState([]);
  const [editBooking, setEditBooking] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [open, setOpen] = useState(false);

  const refreshList = () => {
    setBookings(getBookings());
  };

  useEffect(() => {
    refreshList();
  }, []);

  const clearEdit = () => {
    setEditBooking(null);
  };

  // Open confirmation dialog for delete
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setOpen(true);
  };

  // Confirm delete operation
  const confirmDelete = () => {
    deleteBooking(deleteId);
    refreshList();
    setOpen(false);
    setDeleteId(null);
  };

  return (
    <div className="travel-list-container">
      <TravelForm
        existingBooking={editBooking}
        refreshList={refreshList}
        clearEdit={clearEdit}
      />
      <h3 className="section-title">Booking Details</h3>
      {bookings.length > 0 ? (
        <table className="booking-table">
          <thead>
            <tr>
              <th>Traveller Name</th>
              <th>Type</th>
              <th>Stay Type</th>
              <th>Contact Number</th>
              <th>Travel Area</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.travellerName}</td>
                <td>{b.type}</td>
                <td>{b.stayType}</td>
                <td>{b.contactNumber}</td>
                <td>{b.travelArea}</td>
                <td>
                  <button onClick={() => setEditBooking(b)} className="btn-edit">
                    Edit
                  </button>
                  <button onClick={() => handleDeleteClick(b.id)} className="btn-delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings available.</p>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this booking?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TravelList;
