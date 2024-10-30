import React, { useEffect, useState } from 'react';
import './userProfile.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser, addOrEditUser } from '../redux/authSlice';
import { getUserFavorites, FetchUserBookings } from '../redux/dbSlice';

const UserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.user || {});
    const bookings = useSelector((state) => state.data.bookings || []);
    const favorites = useSelector((state) => state.data.favorites || []);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [profileInfo, setProfileInfo] = useState({
        username: user.username || '',
        profilePicture: user.profilePicture || '',
        bio: user.bio || '',
        email: user.email || '',
        phone: user.phone || '',
        location: user.location || '',
        language: user.language || 'English',
        theme: user.theme || 'Light',
        notificationSettings: user.notificationSettings || 'All',
        socialLinks: user.socialLinks || { twitter: '', linkedin: '' },
    });

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

    const handleEditToggle = () => setIsEditing(!isEditing);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        await dispatch(addOrEditUser({ uid: user.uid, ...profileInfo }));
        setIsEditing(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h1>User Profile</h1>

            <section className="basic-info">
                <h2>Basic Information</h2>
                <p><strong>Username:</strong> {profileInfo.username || 'Not provided'}</p>
                <p><strong>Full Name:</strong> {user?.firstName} {user?.lastName}</p>
                {profileInfo.profilePicture && (
                    <img src={profileInfo.profilePicture} alt="Profile" />
                )}
                <p><strong>Bio:</strong> {profileInfo.bio || 'Not provided'}</p>
            </section>

            <section className="contact-info">
                <h2>Contact Information</h2>
                <p><strong>Email:</strong> {profileInfo.email}</p>
                <p><strong>Phone:</strong> {profileInfo.phone}</p>
                <p><strong>Location:</strong> {profileInfo.location}</p>
            </section>

            <section className="account-details">
                <h2>Account Details</h2>
                <p><strong>User ID:</strong> {user.uid}</p>
                <p><strong>Account Created:</strong> {user.creationDate}</p>
                <p><strong>Last Login:</strong> {user.lastLogin}</p>
            </section>

            <section className="preferences">
                <h2>Preferences</h2>
                <p><strong>Language:</strong> {profileInfo.language}</p>
                <p><strong>Theme:</strong> {profileInfo.theme}</p>
                <p><strong>Notifications:</strong> {profileInfo.notificationSettings}</p>
            </section>

            <section className="social-links">
                <h2>Social Links</h2>
                <p><strong>Twitter:</strong> {profileInfo.socialLinks.twitter}</p>
                <p><strong>LinkedIn:</strong> {profileInfo.socialLinks.linkedin}</p>
            </section>

            <section className="security-privacy">
                <h2>Security and Privacy</h2>
                <p><strong>Password Reset Options:</strong> Enabled</p>
                <p><strong>Two-Factor Authentication:</strong> {user.twoFactorAuth ? 'Enabled' : 'Disabled'}</p>
                <p><strong>Privacy Settings:</strong> {user.privacySettings || 'Public'}</p>
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

            {isEditing && (
                <div className="edit-profile">
                    <h3>Edit Profile Information</h3>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={profileInfo.username}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="profilePicture"
                        placeholder="Profile Picture URL"
                        value={profileInfo.profilePicture}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="bio"
                        placeholder="Bio"
                        value={profileInfo.bio}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={profileInfo.phone}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={profileInfo.location}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="language"
                        placeholder="Language"
                        value={profileInfo.language}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="theme"
                        placeholder="Theme"
                        value={profileInfo.theme}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSave}>Save Changes</button>
                    <button onClick={handleEditToggle}>Cancel</button>
                </div>
            )}
            <button onClick={handleEditToggle}>Edit Profile</button>
        </div>
    );
};

export default UserProfile;
