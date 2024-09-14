import React from "react";
import Css from "./ViewRooms.css"
import logo from "../h-removebg-preview.png"
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faPlay, faStar, fa } from '@fortawesome/free-solid-svg-icons';
import image1 from "./room-images.png"
import image2 from "./room-images1.png"
import image3 from "./room-images2.png"
import image4 from "./room-images3.png"
import cancel from "./Cancel.png"
import line from "./Line 20.png"
import line2 from "./Line 19.png"

import Netflix from "./Netflix.png"
import disney from "./Animation.png"
import HBO from "./Hbo Max.png"

import satTv from "./Satellite Signal.png"
import DVD from "./Blu-ray.png"
import appleTv from "./Apple TV.png"
import Anime from "./Crunchyroll.png"



const RoomContent=()=>{

    const navigate= useNavigate();



    const home =()=>{
        navigate("/Home")

    }
    const room =()=>{
        navigate("/Rooms")
    }
    const Booking=()=>{
        navigate("/Booking")
    }

    const viewroom=()=>{
        navigate("/view")
    }

    const checkOut=()=>{
        navigate("/pay")
    }
    
    return(

        <div className="card-0">
            <div className="topNavBar">
            

                <h2><a onClick={home} className="NavBar">Home</a></h2>
                <h2><a onClick={room} className="NavBar">Rooms</a></h2>
                <h2><a onClick={Booking} className="NavBar">Booking</a></h2>
                <img src={logo}  className="logo1"/>
                <h2><a href="" className="NavBar">Facilities</a></h2>
                <h2><a href="" className="NavBar">Gallery</a></h2>
                <h2><a href="" className="NavBar">How To Get There</a></h2>
            </div>
            <div className="card-1">

                <div className="card-btn">
                    <button className="card-1-0" onClick={room}><img  src={cancel}/></button>
                </div>
            <div className="img-container">

                 <div className="columns3"><img src={image1}  className="Img0"/></div>
                <div className="columns2">
                <img src={image2}  className="Img1"/>
                <img src={image3}  className="Img1"/>
                   </div>
               <div className="columns3"><img src={image4}  className="Img"/></div>

              </div>

              <div className="Info-deck">
                <div  className="Info-deck-1">

                    <div className="Room-descriptions">
                        <h2 className="Info">HoneyMoons Suite</h2>
                        <p className="Room-descriptions">Embrace romance in our Romantic Retreat Suite,
                             designed for unforgettable moments.This elegantly
                             appointed suite features a luxurious king-sized bed
                             with soft, high-thread-count linens, a private balcony
                             overlooking breathtaking views, and a cozy seating area
                             perfect for intimate conversations.
                             The en-suite bathroom boasts a whirlpool tub for two,
                             a rainfall shower, and high-end toiletries. Enjoy a
                             complimentary bottle of champagne and gourmet chocolates
                             upon arrival, and unwind in the evening with the suite’s
                            state-of-the-art entertainment system.</p>
                    </div>
                    <div>
                        <img  src={line}/>
                    </div>
                    <div>
                        <ul>
                            <li>King-Sized bed</li>
                            <li>Private Balcony</li>
                            <li>Cozy Seating Area</li>
                            <li>Whirlpool Tub for two</li>
                            <li>Rainfall Shower</li>
                            <li>High-End Toiletries</li>
                            <li>State-of-the-art Tv</li>
                            <li>Mini-Bar</li>
                        </ul>
                    </div>
                    <div className="booking-div">
                        <button className="booking-btn" onClick={Booking}>BOOK NOW</button>
                    </div>
                </div>
                <img src={line2}  />
                <div className="info-deck-right">
                    <div className="Price"> 
                        <h2>R3,750/night</h2>
                    </div>
                    <img  src={line}/>

                    <div>
                        <p className="Room-descriptions">Price includes</p>
                    </div>
                    <div className="icons-div">
                        <div className="icons-section">
                             <FontAwesomeIcon icon={faWifi}  className="Icons"/>
                             <FontAwesomeIcon icon={faPlay}  className="Icons"/>
                             <FontAwesomeIcon icon={faStar}  className="Icons"/>
                            
                             <img src={disney} className="Icons"/>
                             <img src={Netflix} className="Icons"/>
                             <img src={HBO} className="Icons"/>
                             <img src={DVD} className="Icons"/>
                             <img src={satTv} className="Icons"/>
                             <img src={appleTv} className="Icons"/>
                             <img src={Anime} className="Icons"/>
                        
                        </div>
                    </div>
                </div>

              </div>
            </div>
            
        </div>
    )
}
export default RoomContent;