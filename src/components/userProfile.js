import React, { useEffect, useState } from 'react';
import './userProfile.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from '../redux/authSlice';
import { getUserFavorites, FetchUserBookings } from '../redux/dbSlice';

const UserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.user || {});
    const bookings = useSelector((state) => state.data.bookings || []);
    const favorites = useSelector((state) => state.data.favorites || []);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user.uid) {
            const fetchData = async () => {
                await dispatch(fetchUser(user.uid));
                await dispatch(getUserFavorites(user.uid)); 
                await dispatch(FetchUserBookings(user.uid));
                setLoading(false);
            };
            fetchData();
        } else {
            setLoading(false);
        }
    }, [dispatch, user.uid]);

    if (loading) {
        return <div>Loading...</div>;
    }
    const policy=()=>{
        navigate('/policy')
    }

    return (
        <div className="container">
            <h1>User Profile</h1>
            <h5 onClick={policy}>Our data policy</h5>
            <section className="user-info">
                <h2>User Information</h2>
                <p><strong>Name:</strong> {user?.firstName || 'Guest'}</p>
                <p><strong>Last:</strong> {user?.lastName || "Not provided"}</p>
                <p><strong>Email:</strong> {user?.email || 'Not provided'}</p>
            </section>
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
                                    <td>{new Date(booking.arrivalDate).toLocaleDateString()}</td>
                                    <td>{new Date(booking.departureDate).toLocaleDateString()}</td>
                                    <td>{booking.guests}</td>
                                    <td>{booking.paid ? "Yes" : "No"}</td>
                                    <td>{booking.room || "Room Name Unavailable"}</td>
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
            <section className="user-favorites">
                <h2>User Favorites</h2>
                <div className="favorite-rooms">
                    {favorites.length > 0 ? (
                        favorites.map(favorite => (
                            <div key={favorite.id} className="card">
                                <p>Room ID: {favorite.roomId}</p>
                                <p>Favorite: {favorite.isFavorite ? "Yes" : "No"}</p>
                            </div>
                        ))
                    ) : (
                        <p>No favorite rooms found</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default UserProfile;
