import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings } from "../redux/dbSlice"; 
import "./clientsbooking.css";

const BookingList = () => {
    const dispatch = useDispatch();
    const { bookings, error, loading } = useSelector((state) => state.data || {});
    

   

    useEffect(() => {
        dispatch(fetchBookings()); 
    }, [dispatch]);


    console.log(bookings)
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleClientList = () => {
        navigate("/clients");
    };

    const handleAddRoom = () => {
        navigate("/home");
    };

    return (
        <div className="container">
            <div className="container-1">
                <div className="NavBar">
                    <div onClick={handleClientList}>
                        <FontAwesomeIcon icon={faClipboardList} size="3x" />
                        <h2>Client Booking List</h2>
                    </div>
                    <div onClick={handleAddRoom}>
                        <FontAwesomeIcon icon={faBookOpen} size="3x" />
                        <h2>Add Room</h2>
                    </div>
                </div>
            </div>
            <div className="container-2">
            <h1>Booking List</h1>
{loading && <p>Loading...</p>}
{error && <p>Error fetching bookings: {error}</p>}
{Array.isArray(bookings) && bookings.length > 0 ? (
    <div className="table">
        <div className="table-head">
            <span>Arrival Date</span>
            <span>Departure Date</span>
            <span>Email</span>
            <span>Guests</span>
            <span>Paid</span>
            <span>Client</span>
            <span>Price/Night</span>
            <span>Transaction ID</span>
        </div>
        <div className="table-body">
            {bookings.map(booking => (
                <div key={booking.id} className="table-row">
                    <span>{booking.arrivalDate}</span>
                    <span>{booking.departureDate}</span>
                    <span>{booking.email}</span>
                    <span>{booking.guests}</span>
                    <span>{booking.paid}</span>
                    <span>{booking.payerName}</span>
                    <span>{booking.pricePerNight}</span>
                    <span>{booking.transactionId}</span>
                </div>
            ))}
        </div>
    </div>
) : (
    <p>No bookings available.</p>
)}

            </div>
        </div>
    );
};

export default BookingList;