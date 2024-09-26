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
                <div className="navvy">
                    <div onClick={handleClientList}className="navvy">
                        <FontAwesomeIcon icon={faClipboardList} size="3x" />
                        <h2>Client Booking List</h2>
                    </div>
                    <div onClick={handleAddRoom}className="navvy">
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
    <table className="table">
        <thead className="table-head">
            <tr>
                <th>Arrival Date</th>
                <th>Departure Date</th>
                <th>Email</th>
                <th>Guests</th>
                <th>Paid</th>
                <th>Client</th>
                <th>Price/Night</th>
                <th>Transaction ID</th>
                <th>Trip cost</th>
            </tr>
        </thead>
        <tbody className="table-body">
            {bookings.map(booking => (
                <tr key={booking.id} className="table-row">
                    <td>{booking.arrivalDate}</td>
                    <td>{booking.departureDate}</td>
                    <td>{booking.email}</td>
                    <td>{booking.guests}</td>
                    <td>{booking.paid}✔</td>
                    <td>{booking.payerName}</td>
                    <td>R.{booking.pricePerNight}</td>
                    <td>{booking.transactionId}</td>
                    <td>R.{booking.totalPrice}</td>
                </tr>
            ))}
        </tbody>
    </table>
) : (
    <p>No bookings available.</p>
)}


            </div>
        </div>
    );
};

export default BookingList;