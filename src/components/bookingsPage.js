import React, { useState } from "react";
import Css from "./BookingsPage.css";
import logo from "../h-removebg-preview.png";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import image1 from "./room-images.png";
import image2 from "./room-images1.png";
import image3 from "./room-images2.png";
import image4 from "./room-images3.png";
import cancel from "./Cancel.png";
import line from "./Line 20.png";
import line2 from "./Line 27.png";

const BookingPage = () => {
    const [arrivalDate, setArrivalDate] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [guests, setGuests] = useState(2);
    const [totalPrice, setTotalPrice] = useState(0);

   

    const navigate = useNavigate();
    const location = useLocation();

    const booking = location.state || {}
    console.log(booking);
    const pricePerNight = parseFloat(booking.price) || 0;
    const RoomName = parseFloat(booking.title) || "Room Name Unavailable"

    




    const home = () => navigate("/Home");
    const roomPage = () => navigate("/Rooms");
    const Booking = () => navigate("/Booking");
   
    const checkOut = () =>{ 
        navigate("/pay", {
            state: {
                arrivalDate,
                departureDate,
                guests,
                totalPrice,
                pricePerNight,
                RoomName
            }
        });
    }
    const Gallery = () => navigate("/gallery");
    const viewroom = () => navigate("/view");

    const calculateTotalPrice = () => {
        const arrival = new Date(arrivalDate);
        const departure = new Date(departureDate);
        
       
        if (arrivalDate && departureDate  && !isNaN(arrival.getTime()) && !isNaN(departure.getTime()) && departure > arrival) {
            const nights = (departure - arrival) / (1000 * 3600 * 24);
            const total = nights * pricePerNight;
            setTotalPrice(total);
        } else {
            alert("Please select valid arrival and departure dates.");
        }
    };
    
    return (
        <div className="card-0">
            <div className="topNavBar">
                <h2><a onClick={home} className="NavBar">Home</a></h2>
                <h2><a onClick={roomPage} className="NavBar">Rooms</a></h2>
                <h2><a onClick={Booking} className="NavBar">Booking</a></h2>
                <img src={logo} className="logo1" alt="Logo" />
                <h2><a href="#" className="NavBar">Facilities</a></h2>
                <h2><a onClick={Gallery} className="NavBar">Gallery</a></h2>
                <h2><a href="#" className="NavBar">How To Get There</a></h2>
                
            </div>
            <div className="card-1">
                <div className="card-btn">
                    <button className="card-1-0" onClick={viewroom}><img src={cancel} alt="Cancel" /></button>
                </div>
                <div className="img-container">
                    <div className="columns3"><img src={image1} className="Img0" alt="Room 1" /></div>
                    <div className="columns2">
                        <img src={image2} className="Img1" alt="Room 2" />
                        <img src={image4} className="Img1" alt="Room 4" />
                    </div>
                    <div className="columns3"><img src={image3} className="Img" alt="Room 3" /></div>
                </div>
                <div className="Info-deck">
                    <div className="Info-deck-1">
                        <h2>{booking.title}</h2>
                        <h4>{booking.roomType}</h4>
                        <img src={line} className="lining" alt="Line" /><br />
                        <h4>{booking.price}</h4>
                        <img src={line} className="lining" alt="Line" /><br />
                        <p><FontAwesomeIcon icon={faStar} /> 4.98 (110 reviews)</p>
                    </div>
                    <div className="right-deck">
                        <div className="calender-row">
                            <div className="row10">
                                <label htmlFor="DOA">Date Of Arrival</label>
                                <input
                                    type="date"
                                    id="DOA"
                                    className="input-box"
                                    value={arrivalDate}
                                    onChange={(e) => setArrivalDate(e.target.value)}
                                />
                            </div>
                            <img src={line2} alt="Line" />
                            <div className="row10">
                                <label htmlFor="DOD">Date Of Departure</label>
                                <input
                                    type="date"
                                    id="DOD"
                                    className="input-box"
                                    value={departureDate}
                                    onChange={(e) => setDepartureDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="guest-div">
                            <label htmlFor="Guests" className="guest">No. Guests</label>
                            <select
                                id="Guests"
                                name="Guests"
                                className="input-row"
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                            >
                                {[...Array(9)].map((_, i) => (
                                    <option key={i} value={i + 2}>{i + 2} GUESTS</option>
                                ))}
                            </select>
                        </div>
                        <img src={line} alt="Line" />
                        <div className="price">
                            <h4>R{booking.price}  </h4>
                        </div>
                        <img src={line} alt="Line" />
                        <div className="total">
                            <h4>Total </h4>
                            <h4>Total: R{totalPrice.toFixed(2)}</h4>

                        </div>
                        <div className="reserve-div">
                            
                            <button className="reserve-btn" onClick={calculateTotalPrice}>calculate price</button>
                            <br/>
                            <button className="reserve-btn" onClick={checkOut}>RESERVE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
