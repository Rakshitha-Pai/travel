// src/localStorageService.js
const STORAGE_KEY = "travelBookings";

export const getBookings = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const addBooking = (booking) => {
  const bookings = getBookings();
  bookings.push({ id: Date.now(), ...booking });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
};

export const updateBooking = (id, updatedBooking) => {
  let bookings = getBookings();
  bookings = bookings.map((b) =>
    b.id === id ? { ...b, ...updatedBooking } : b
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
};

export const deleteBooking = (id) => {
  let bookings = getBookings();
  bookings = bookings.filter((b) => b.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
};
