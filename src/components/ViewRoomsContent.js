import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faPlay, faCoffee } from '@fortawesome/free-solid-svg-icons';
import logo from "../h-removebg-preview.png";
import image1 from "./room-images.png";
import image2 from "./room-images1.png";
import image3 from "./room-images2.png";
import image4 from "./room-images3.png";
import cancel from "./Cancel.png";
import line from "./Line 20.png";
import line2 from "./Line 19.png";
import Netflix from "./Netflix.png";
import disney from "./Animation.png";
import HBO from "./Hbo Max.png";
import satTv from "./Satellite Signal.png";
import DVD from "./Blu-ray.png";
import appleTv from "./Apple TV.png";
import Anime from "./Crunchyroll.png";
import './ViewRooms.css'; // Ensure CSS is imported

const RoomContent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const room = location.state;

    const home = () => navigate("/Home");
    const roomPage = () => navigate("/Rooms");
    const booking = (booking) => {
        navigate("/Booking", {state: booking});}
    const gallery = () => navigate("/gallery");

    return (
        <div className="card-0">
            <div className="topNavBar">
                <h2><a onClick={home} className="NavBar">Home</a></h2>
                <h2><a onClick={roomPage} className="NavBar">Rooms</a></h2>
                <h2><a onClick={booking} className="NavBar">Booking</a></h2>
                <img src={logo} className="logo1" alt="Logo" />
                <h2><a href="" className="NavBar">Facilities</a></h2>
                <h2><a onClick={gallery} className="NavBar">Gallery</a></h2>
                <h2><a href="" className="NavBar">How To Get There</a></h2>
            </div>
            <div className="card-1">
                <div className="card-btn">
                    <button className="card-1-0" onClick={roomPage}><img src={cancel} alt="Cancel" /></button>
                </div>
                <div className="img-container">
                    <div className="columns3"><img src={image1} className="Img0" alt="Room" /></div>
                    <div className="columns2">
                        <img src={image2} className="Img1" alt="Room" />
                        <img src={image3} className="Img1" alt="Room" />
                    </div>
                    <div className="columns3"><img src={image4} className="Img" alt="Room" /></div>
                </div>
                <div className="Info-deck">
                    <div className="Info-deck-1">
                        <div className="Room-descriptions">
                            <h2 className="Info">{room.title}</h2>
                            <h3 className="Room-descriptions">
                                {room.roomType}
                            </h3>
                        </div>
                        <div>
                           <h5>{room.descriptions}</h5>
                           <br/>
                          <h5>Guests: {room.guests}</h5>
                          <br/>
                          <h5>Beds: {room.beds}</h5>
                          <br/>

                        </div>
                        <div className="booking-div">
                            <button className="booking-btn" onClick={()=>booking(room)}>BOOK NOW</button>
                        </div>
                    </div>
                    <img src={line2} alt="Line" />
                    <div className="info-deck-right">
                        <div className="Price">
                            <h2>R.{room.price}</h2>
                        </div>
                        <img src={line} alt="Line" />
                        <p className="Room-descriptions">Price includes</p>
                        <div className="icons-div">
                            <div className="icons-section">
                                <FontAwesomeIcon icon={faWifi} className="Icons" />
                                <FontAwesomeIcon icon={faPlay} className="Icons" />
                                <FontAwesomeIcon icon={faCoffee} className="Icons" />
                                <img src={disney} className="Icons" alt="Disney+" />
                                <img src={Netflix} className="Icons" alt="Netflix" />
                                <img src={HBO} className="Icons" alt="HBO Max" />
                                <img src={DVD} className="Icons" alt="DVD" />
                                <img src={satTv} className="Icons" alt="Satellite TV" />
                                <img src={appleTv} className="Icons" alt="Apple TV" />
                                <img src={Anime} className="Icons" alt="Crunchyroll" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomContent;