import React from "react";
import { Link } from "react-router-dom";
import css from "./checkout.css"
import logo from "../h-removebg-preview.png"
import line from "./Line 20.png"



const Checkout=()=> {
    return (
        <div className="checkout">
             <div className="topNavBar">
            

            <h2><a href="" className="NavBar">Home</a></h2>
            <h2><a href="" className="NavBar">Rooms</a></h2>
            <h2><a href="" className="NavBar">Booking</a></h2>
            <img src={logo}  className="logo1"/>
            <h2><a href="" className="NavBar">Facilities</a></h2>
            <h2><a href="" className="NavBar">Gallery</a></h2>
            <h2><a href="" className="NavBar">How To Get There</a></h2>
        </div>


        <div className="line-div">
            <img src={line} className="line-0" />
        </div>
        </div>
       )
}
export default Checkout;