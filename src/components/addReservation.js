import React, { useState } from 'react';
import "./addroom.css";
import { logout } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faBookOpen, faSignOut } from '@fortawesome/free-solid-svg-icons';

const AddBooking = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Booking form states
    const [clientName, setClientName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [beds, setBeds] = useState(1);
    const [guests, setGuests] = useState(1);
    const [price, setPrice] = useState(0);
    const [roomType, setRoomType] = useState('');
    const [visitors, setVisitors] = useState(1);
    const [paymentStatus, setPaymentStatus] = useState('pending');
    const [arrivalDate, setArrivalDate] = useState('');
    const [departureDate, setDepartureDate] = useState('');

    const handleBookingSubmit = async (e) => {
        e.preventDefault();

        const newBooking = {
            clientName,
            email,
            phoneNumber,
            beds,
            guests,
            price,
            roomType,
            visitors,
            paymentStatus,
            arrivalDate,
            departureDate,
        };

        // Dispatch action to add the booking (you need to implement this action)
        // await dispatch(addBooking(newBooking)); 

        // Reset booking form fields
        resetForm();
    };

    const resetForm = () => {
        setClientName('');
        setEmail('');
        setPhoneNumber('');
        setBeds(1);
        setGuests(1);
        setPrice(0);
        setRoomType('');
        setVisitors(1);
        setPaymentStatus('pending');
        setArrivalDate('');
        setDepartureDate('');
    };

    const calculateTotalPrice = () => {
        if (arrivalDate && departureDate) {
            const arrival = new Date(arrivalDate);
            const departure = new Date(departureDate);
            const timeDiff = departure - arrival;
            const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
            return dayDiff > 0 ? dayDiff * price : 0;
        }
        return 0;
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const goToClients = () => {
        navigate('/clients');
    };

    const goToHome = () => {
        navigate('/home');
    };

    const reserveRoom = () => {
        navigate('/Reserve');
    };

    const Logout = () => {
        dispatch(logout());
        navigate('*'); 
    };

    return (
        <div className="container">
            <div className="container-1">
                <div className="container-123">
                    <div className="navBar">
                        <div className="navvy-">
                            <div onClick={goToClients} className="navvy-1">
                                <FontAwesomeIcon icon={faClipboardList} size="2x" />
                                Client Booking List
                            </div>
                            <div onClick={goToHome} className="navvy-1">
                                <FontAwesomeIcon icon={faBookOpen} size="2x" />
                                Add Booking
                            </div>
                            <div onClick={reserveRoom} className="navvy-1">
                                <FontAwesomeIcon icon={faBookOpen} size="2x" />
                                Add Reservation
                            </div>
                            <div onClick={Logout} className="navvy-1">
                                <FontAwesomeIcon icon={faSignOut} size="2x" />
                                Admin logout
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleBookingSubmit} className="add-container">
                    <h2>Add Booking</h2>
                    <label>
                        Client Name
                        <input 
                            type="text" 
                            value={clientName} 
                            onChange={(e) => setClientName(e.target.value)} 
                            required 
                            className='input-tag' 
                        />
                    </label>
                    <label>
                        Email
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            className='input-tag' 
                        />
                    </label>
                    <label>
                        Phone Number
                        <input 
                            type="text" 
                            value={phoneNumber} 
                            onChange={(e) => setPhoneNumber(e.target.value)} 
                            required 
                            className='input-tag' 
                        />
                    </label>
                    <label>
                        Beds:
                        <input 
                            type="number" 
                            value={beds} 
                            onChange={(e) => setBeds(Number(e.target.value))} 
                            min="1" 
                            required 
                            className='input-tag' 
                        />
                    </label>
                    <label>
                        Guests:
                        <input 
                            type="number" 
                            value={guests} 
                            onChange={(e) => setGuests(Number(e.target.value))} 
                            min="1" 
                            required 
                            className='input-tag' 
                        />
                    </label>
                    <label>
                        Price per Night:
                        <input 
                            type="number" 
                            value={price} 
                            onChange={(e) => setPrice(Number(e.target.value))} 
                            min="0" 
                            required 
                            className='input-tag' 
                        />
                    </label>
                    <label>
                        Room Type:
                        <input 
                            type="text" 
                            value={roomType} 
                            onChange={(e) => setRoomType(e.target.value)} 
                            required 
                            className='input-tag' 
                        />
                    </label>
                    <label>
                        Visitors:
                        <input 
                            type="number" 
                            value={visitors} 
                            onChange={(e) => setVisitors(Number(e.target.value))} 
                            min="1" 
                            required 
                            className='input-tag' 
                        />
                    </label>
                    <label>
                        Arrival Date:
                        <input 
                            type="date" 
                            value={arrivalDate} 
                            onChange={(e) => setArrivalDate(e.target.value)} 
                            required 
                            className='input-tag' 
                        />
                    </label>
                    <label>
                        Departure Date:
                        <input 
                            type="date" 
                            value={departureDate} 
                            onChange={(e) => setDepartureDate(e.target.value)} 
                            required 
                            className='input-tag' 
                        />
                    </label>
                    <div>Total Price: ${calculateTotalPrice()}</div>
                    <button type="submit">Add Booking</button>
                </form>
            </div>
        </div>
    );
};

export default AddBooking;
