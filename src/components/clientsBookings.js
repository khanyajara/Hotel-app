import React, { useEffect, useState } from "react";
import { db } from './firebase'; // Adjust the path as needed
import { collection, getDocs } from "firebase/firestore";
import Dashboard from './dashboard';
import "./clientsbooking.css";

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const bookingsCollection = collection(db, "bookings"); // Replace "bookings" with your collection name
            const bookingSnapshot = await getDocs(bookingsCollection);
            const bookingList = bookingSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setBookings(bookingList);
        };

        fetchBookings();
    }, []);

    return (
        <div className="container">
            <div className="container-1">
                <Dashboard />
            </div>
            <div className="container-2">
                <h1>Booking List</h1>
                <table>
                    <thead>
                        <tr className="table">
                            <th>Booking ID</th>
                            <th>Customer Name</th>
                            <th>Customer Email</th>
                            <th>Customer Phone</th>
                            <th>Booking Date</th>
                            <th>Booking Time</th>
                            <th>Room Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking.id}>
                                <td>{booking.id}</td>
                                <td>{booking.customerName}</td>
                                <td>{booking.customerEmail}</td>
                                <td>{booking.customerPhone}</td>
                                <td>{booking.bookingDate}</td>
                                <td>{booking.bookingTime}</td>
                                <td>{booking.roomNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingList;
