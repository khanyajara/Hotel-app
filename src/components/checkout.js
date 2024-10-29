import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './checkout.css';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import logo from "../h-removebg-preview.png";
import line from "./Line 20.png";
import image from "./hotel room.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addBookings, addBookingToFirestore } from "../redux/dbSlice";
import { auth } from "../firebase/config";
import { getProfile } from '../redux/authSlice';
import emailjs from 'emailjs-com';

const PaymentSection = ({ totalPrice, onCurrencyChange, currency, isPending, onCreateOrder, onApproveOrder }) => (
    <div className='paypal-container'>
        <h5>Choose How To Pay</h5>
        <select value={currency} onChange={onCurrencyChange}>
            <option value="USD">💵 USD</option>
            <option value="EUR">💶 EUR</option>
        </select>
        {isPending ? <p>LOADING...</p> : (
            <PayPalButtons
                style={{
                    shape: "rect",
                    layout: "vertical",
                    color: "gold",
                    label: "paypal",
                }}
                createOrder={onCreateOrder}
                onApprove={onApproveOrder}
            />
        )}
    </div>
);

const TripDetails = ({ arrivalDate, departureDate, guests }) => (
    <div>
        <h5>Your Trip:</h5>
        <p>Date: {arrivalDate} - {departureDate}</p>
        <p>Guests: {guests}</p>
    </div>
);

const RoomDetails = ({ roomName, pricePerNight, guests, totalPrice }) => (
    <div className="checkout-0">
        <div>
            <img src={image} className="re-img" alt={roomName} />
            <h4>{roomName}</h4>
            <h5 className="words">Romantic Getaway</h5>
            <p>
                <FontAwesomeIcon icon={faStar} />
                4.98 (110 reviews)
            </p>
        </div>
        <div>
            <h4>Details</h4>
            <p>R.{pricePerNight} /night</p>
            <p>Free cancellation</p>
            <p>Guests: {guests}</p>
            <p>Total: R.{totalPrice}</p>
        </div>
    </div>
);

const Checkout = () => {
    const [{ options, isPending }, paypalDispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options?.currency || 'USD');
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const storedUser = localStorage.getItem('currentUser');
    const user = useSelector((state) => state.auth.user) || (storedUser ? JSON.parse(storedUser) : {});

    // Destructure with fallback to avoid runtime errors
    const {
        room = '',                  // Default value if room is undefined
        arrivalDate = '',          // Default value if arrivalDate is undefined
        departureDate = '',       // Default value if departureDate is undefined
        guests = 0,               // Default value if guests is undefined
        RoomName = 'Unknown Room', // Default room name
        pricePerNight = 0,        // Default price per night
        totalPrice = 0,           // Default total price
    } = location.state || {};

    // Validate totalPrice
    if (typeof totalPrice !== 'number') {
        console.error("Invalid totalPrice", totalPrice);
        return <p>Error: Invalid booking details.</p>;
    }

    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        paypalDispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    };

    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [{ amount: { value: totalPrice.toString() } }], // Ensure totalPrice is converted to string
        });
    }; const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle hamburger menu
    };

    const onApproveOrder = async (data, actions) => {
        try {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);

            const bookingData = {
                room: RoomName,
                arrivalDate,
                departureDate,
                guests,
                pricePerNight,
                totalPrice,
                transactionId: details.id,
                payerName: name,
                email: details.payer.email_address,
                paid: true,
            };

            if (user?.uid) {
                await addBookingToFirestore(auth.currentUser.uid, bookingData);
                dispatch(addBookings(user.uid, bookingData));
                
                alert("Booking successful!");
            } else {
                alert("You need to be logged in to make a booking. Redirecting to login...");
                navigate("/login");
            }
        } catch (err) {
            console.error("Payment approval error: ", err);
            alert("An error occurred during the payment approval. Please try again.");
        }
    };

    const navigateHome = () => {
        navigate("/Home");
    };
    
    const home = () => {
        navigate("/Home");
    };

   
    const Booking = () => {
        navigate("/Booking");
    };

    const Gallery = () => {
        navigate("/gallery");
    };

    const Facilities = () => {
        navigate("/facilities");
    };

    
    

    const Profile = () => {
        navigate("/user-info");
    };

    const blog = () => {
        navigate("/Leave-review");
    };

    const goToHowToGetThere = () => {
        navigate("/how-to-get-there");
    };

    const roomfilter = () => {
        navigate("/Rooms");
    };

    return (
        <div className="checkout">
           <div className="topNavBar">
                <button className="menu-btn" onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`nav-items ${isMenuOpen ? "active" : ""}`}>
                    <h2><a onClick={home} className="NavBar">Home</a></h2>
                    <h2><a onClick={room} className="NavBar">Rooms</a></h2>
                    <h2><a onClick={Facilities} className="NavBar">Facilities</a></h2>
                    <img src={logo} className="logo1" alt="Logo" />
                    <h2><a onClick={Gallery} className="NavBar">Gallery</a></h2>
                    <h2><a onClick={goToHowToGetThere} className="NavBar">How To Get There</a></h2>
                </div>
            </div>

            <div className="line-div">
                <img src={line} className="line-0" alt="Line Decoration" />
            </div>

            <div className="Columns-2">
                <div className="column-left">
                    <div className="first-section">
                        <button className="icon-btn" onClick={navigateHome}>
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="Icons" />
                        </button>
                        <h4>Confirm and pay</h4>
                    </div>

                    <TripDetails arrivalDate={arrivalDate} departureDate={departureDate} guests={guests} />
                    <PaymentSection 
                        totalPrice={totalPrice} 
                        onCurrencyChange={onCurrencyChange} 
                        currency={currency} 
                        isPending={isPending} 
                        onCreateOrder={onCreateOrder} 
                        onApproveOrder={onApproveOrder} 
                    />
                </div>

                <div className="column-right">
                    <RoomDetails roomName={RoomName} pricePerNight={pricePerNight} guests={guests} totalPrice={totalPrice} />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
