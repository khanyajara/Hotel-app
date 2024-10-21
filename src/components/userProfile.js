import React, { useEffect } from 'react';
import './userProfile.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLikedRooms, FetchUserBookings } from '../redux/dbSlice'; 
import { fetchUser } from '../redux/authSlice';

const UserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.user || {});
    const likedRooms = user.likedRooms || [];
    const bookings = useSelector((state) => state.auth.bookings || []);

    useEffect(() => {
        if (user.id) {
            dispatch(fetchUser(user.id));   
            dispatch(userLikedRooms(user.id)); 
            dispatch(FetchUserBookings(user.id)); 
          
        }
    }, [dispatch, user.id]);
    console.log(bookings)

    

    return (
        <div className="container">
            <div>
                <h1>User Profile</h1>
            </div>

            <div>
                <section className="user-info">
                    <h2>User Information</h2>
                    <p><strong>Name:</strong> {user.firstName || 'Guest'}</p>
                    <p><strong>Last:</strong>{user.lastName || "null"}</p>
                    <p><strong>Email:</strong> {user?.email || 'Not provided'}</p>
                </section>
            </div>

            <div>
                <section className="user-bookings">
                    <h2>User Bookings</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Arrival Date</th>
                                <th>Departure Date</th>
                                <th>Guests</th>
                                <th>Paid</th>
                                <th>Room</th>
                                <th>Price per Night</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.length > 0 ? (
                                bookings.map(booking => (
                                    <tr key={booking.transactionId}>
                                        <td>{booking.transactionId}</td>
                                        <td>{new Date(booking.arrivalDate).toLocaleString()}</td>
                                        <td>{new Date(booking.departureDate).toLocaleString()}</td>
                                        <td>{booking.guests}</td>
                                        <td>{booking.paid ? "Yes" : "No"}</td>
                                        <td>{booking.room}</td>
                                        <td>${booking.pricePerNight}</td>
                                        <td>${booking.totalPrice}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8">No bookings found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
            </div>

            <div>
                <section className="liked-rooms">
                    <h2>Liked Rooms</h2>
                    <div className="room-cards">
                        {Array.isArray(likedRooms) && likedRooms.length > 0 ? (
                            likedRooms.map(room => (
                                <div key={room.id} className="card">
                                    <h3>{room.name}</h3>
                                    <p>Price: {room.price}</p>
                                </div>
                            ))
                        ) : (
                            <p>No liked rooms found</p>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UserProfile;
