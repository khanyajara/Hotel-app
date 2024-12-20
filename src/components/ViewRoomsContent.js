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
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const home = () => navigate("/Home");
    const roomPage = () => navigate("/Rooms");
    const booking = (booking) => {
        navigate("/Booking", {state: booking});}
    const gallery = () => navigate("/gallery");

    const Booking = () => {
        navigate("/Booking");
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
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

    

    const goToHowToGetThere = () => {
        navigate("/how-to-get-there");
    };

    const roomfilter = () => {
        navigate("/Rooms");
    };
    

    return (
        <div className="card-0">
           <div className="topNavBar">
                <button className="menu-btn" onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`nav-items ${isMenuOpen ? "active" : ""}`}>
                    <h4><a onClick={home} className="NavBar">Home</a></h4>
                    <h4><a onClick={room} className="NavBar">Rooms</a></h4>
                    <h4><a onClick={Facilities} className="NavBar">Facilities</a></h4>
                    <img src={logo} className="NAVBar" alt="Logo" />
                    <h4><a onClick={Gallery} className="NavBar">Gallery</a></h4>
                    <h4><a onClick={goToHowToGetThere} className="NavBar">How To Get There</a></h4>
                </div>
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
                                <img src={disney} className="Icons"  />
                                <img src={Netflix} className="Icons"  />
                                <img src={HBO} className="Icons"  />
                                
                              
                                <img src={appleTv} className="Icons"  />
                                <img src={Anime} className="Icons"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomContent;