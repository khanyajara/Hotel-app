import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './checkout.css';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import logo from "../h-removebg-preview.png";
import line from "./Line 20.png";
import image from "./hotel room.jpg";
import { useDispatch } from "react-redux";
import { reserveRoom } from "../redux/dbSlice";

const Checkout = () => {
    const [{ options, isPending }, paypalDispatch] = usePayPalScriptReducer(); 
    const [currency, setCurrency] = useState(options.currency);
    const navigate = useNavigate();
    const location = useLocation();
    const { arrivalDate, departureDate, guests, totalPrice, pricePerNight, RoomName, roomData } = location.state || {};
    const dispatch = useDispatch(); // Keep this dispatch for Redux

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
            purchase_units: [
                {
                    amount: {
                        value: totalPrice.toString(),
                    },
                },
            ],
        });
    };

    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
            confirmPayment();
        });
    };

    const confirmPayment = async () => {
        try {
            await dispatch(reserveRoom({ roomData, arrivalDate, departureDate, guests, totalPrice, pricePerNight }));
            alert("Payment confirmed and room reserved!");
            navigate("/Rooms");
        } catch (error) {
            console.error("Reservation failed:", error);
            alert("There was an error confirming your payment. Please try again.");
        }
    };

    const home = () => {
        navigate("/Home");
    };

    return (
        <div className="checkout">
            <div className="topNavBar">
                <h2><a onClick={home} className="NavBar">Home</a></h2>
                <h2><a className="NavBar">Rooms</a></h2>
                <h2><a className="NavBar">Booking</a></h2>
                <img src={logo} className="logo1" alt="Logo"/>
                <h2><a className="NavBar">Facilities</a></h2>
                <h2><a className="NavBar">Gallery</a></h2>
                <h2><a className="NavBar">How To Get There</a></h2>
            </div>

            <div className="line-div">
                <img src={line} className="line-0" alt="Line Decoration"/>
            </div>

            <div className="Columns-2">
                <div className="column-left">
                    <div className="first-section">
                        <button className="icon-btn" onClick={home}>
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="Icons" />
                        </button>
                        <h4>Confirm and pay</h4>
                    </div>

                   
                    <h5>Your Trip:</h5>
                    <p>Date: {arrivalDate} - {departureDate}</p>
                    <p>Guests: {guests}</p>

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
                </div>

                <div className="column-right">
                    <div className="checkout-0">
                        <div>
                            <img src={image} className="re-img" alt={`${RoomName}`} />
                            <h4>{RoomName}</h4>
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
                </div>
            </div>
        </div>
    );
};

export default Checkout;
