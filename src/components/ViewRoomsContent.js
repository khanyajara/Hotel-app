import React from "react";
import logo from "../h-removebg-preview.png"
import Css from "./ViewRooms.css"


const RoomContent=()=>{
    return(

        <div className="card-0">
            <div className="topNavBar">
            

                <h2><a href="" className="NavBar">Home</a></h2>
                <h2><a href="" className="NavBar">Rooms</a></h2>
                <h2><a href="" className="NavBar">Booking</a></h2>
                <img src={logo}  className="logo1"/>
                <h2><a href="" className="NavBar">Facilities</a></h2>
                <h2><a href="" className="NavBar">Gallery</a></h2>
                <h2><a href="" className="NavBar">How To Get There</a></h2>
            </div>
            <div className="card-1">
                
            </div>
            
        </div>
    )
}
export default RoomContent;