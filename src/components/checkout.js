import React from "react";
import { Link } from "react-router-dom";
import css from "./checkout.css"
import logo from "../h-removebg-preview.png"
import line from "./Line 20.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft , faBridge } from "@fortawesome/free-solid-svg-icons";



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

        <div className="Columns-2">
            <div className="column-left">
                <button className="icon-btn">
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} className="Icons" />
                </button><h4>Confirm and pay</h4>
                
                <div>

                   <h5> This is one of our highly recommended Suites</h5>
                   <FontAwesomeIcon icon={faBridge} />
                </div>


                <div>
                    <h5>Your Trip:</h5>
                    <div>
                        <h6>Date: <br/> Oct 6-19</h6>
                        <a href="" className="edit"> Edit</a>
                    </div>
                    <div>
                        <h6>Guests <br/>2 guests</h6>
                        <a href="" className="edit"> Edit</a>
                    </div>
                </div>
                  
                  <div>
                    <h5>Choose How To Pay</h5>
                  </div>

            </div>





            <div className="column-right"></div>

        </div>
        </div>
       )
}
export default Checkout;