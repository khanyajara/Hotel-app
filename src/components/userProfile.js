// src/UserProfile.js
import React from 'react';
import './userProfile.css'; 

const UserProfile = () => {
    
    const user = {
        name: "Khanya",
        email: "khanyajara@gmail.com",
        bookings: [
            {
                transactionId: "7AC93433K0850740U",
                arrivalDate: "2024-10-18T13:23",
                departureDate: "2024-10-22T13:23",
                guests: 2,
                paid: true,
                pricePerNight: 2210,
                room: "Room Name Unavailable",
                totalPrice: 8840,
            },
        ],
        likedRooms: [
            { id: 101, name: "Ocean View Suite", price: "$200" },
            { id: 102, name: "Mountain Cabin", price: "$150" },
            { id: 103, name: "City Center Apartment", price: "$250" },
        ],
    };

    return (
        <div className="container">
            <div>
                <h1>User Profile</h1>
            </div>

            <div>
                <section className="user-info">
                    <h2>User Information</h2>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
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
                            {user.bookings.map(booking => (
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
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>

            <div>
                <section className="liked-rooms">
                    <h2>Liked Rooms</h2>
                    <div className="room-cards">
                        {user.likedRooms.map(room => (
                            <div key={room.id} className="card">
                                <h3>{room.name}</h3>
                                <p>Price: {room.price}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UserProfile;
