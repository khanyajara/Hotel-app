import React from "react";
import Css from "./BookingsPage.css"
import logo from "../h-removebg-preview.png"
import { Link , useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faPlay, faStar, faPerson } from '@fortawesome/free-solid-svg-icons';
import image1 from "./room-images.png"
import image2 from "./room-images1.png"
import image3 from "./room-images2.png"
import image4 from "./room-images3.png"
import cancel from "./Cancel.png"
import line from "./Line 20.png"
import line2 from "./Line 27.png"

import Netflix from "./Netflix.png"
import disney from "./Animation.png"
import HBO from "./Hbo Max.png"

import satTv from "./Satellite Signal.png"
import DVD from "./Blu-ray.png"
import appleTv from "./Apple TV.png"
import Anime from "./Crunchyroll.png"
;



const BookingPage=()=>{




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
                    <button className="card-1-0" onClick={viewroom}><img  src={cancel}/></button>
                </div>
            <div className="img-container">

                 <div className="columns3"><img src={image1}  className="Img0"/></div>
                <div className="columns2">
                <img src={image2}  className="Img1"/>
                <img src={image4}  className="Img1"/>
                   </div>
               <div className="columns3"><img src={image3}  className="Img"/></div>

              </div>

              <div className="Info-deck">
                <div className="Info-deck-1">
                    <h2>HoneyMoons Suite</h2>
                    <img  src={line} className="lining"/><br/>
                    <h4>R3,750/night</h4>
                    <img  src={line} className="lining"/><br/>
                    <p><FontAwesomeIcon icon={faStar} /> 4.98(110 reviews)</p>
                </div>
                <div className="right-deck">
                    <div>
                    <div className="calender-row">
                        <div className="row10">
                                        <label for="DOA">Date Of Arrival</label>
                                        <input
                                        type="date"
                                        id="DOA" 
                                        className="input-box"
                                        />
                                    </div>
                                    <img  src={line2}/>
                                    <div className="row10">
                                        <label for="DOA">Date Of Departure</label>
                                        <input
                                        type="date"
                                        id="DOA"
                                        className="input-box" 
                                        />
                                    </div>
                    </div>
            <div className="guest-div">
                <label for="Guests" className="guest">No. Guests</label>
                <select id="Guests" name="Guests" className="input-row">
                  
                    
                    <option value="2">2 GUESTS</option>
                    <option value="3">3 GUESTS</option>
                    <option value="4">4 GUESTS</option>
                    <option value="5">5 GUESTS</option>
                    <option value="6">6 GUESTS</option>
                    <option value="7">7 GUESTS</option>
                    <option value="8">8 GUESTS</option>
                    <option value="9">9 GUESTS</option>
                </select>
            </div>
            <img  src={line}/>
            <div className="price">

                <h4>R3,750 /night </h4>
            </div>
            <img  src={line}/>
            <div className="total">
                <h4>Total </h4>
                <h4>R31,850</h4>
            </div>
            <div className="reserve-div">
                <button className="reserve-btn" onClick={checkOut}>RESERVE SPACE</button>
            </div>
            <h4></h4>
                    </div>
                </div>

              </div>
            </div>
            
        </div>
    )
}
export default BookingPage;
