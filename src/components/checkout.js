import React from "react";
import { Link } from "react-router-dom";
import css from "./checkout.css"
import logo from "../h-removebg-preview.png"
import line from "./Line 20.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft , faBridge ,faStar, faMoneyBill, faAppleAlt, faBank , faGift} from "@fortawesome/free-solid-svg-icons";
import image from "./hotel room.jpg"



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
                <div className="first-section">
                    <button className="icon-btn">
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} className="Icons" />
                    </button><h4>Confirm and pay</h4>
                </div>
                
                <div className="Text-0">

                   <h5> This is one of our highly recommended Suites</h5>
                   <FontAwesomeIcon icon={faBridge} />
                </div>


                <div>
                    <h5>Your Trip:</h5>
                    <div className="text-2">
                        <h6>Date: <br/> Oct 6-19</h6>
                        <a href="" className="edit"> Edit</a>
                    </div>
                    <div className="text-2">
                        <h6>Guests <br/>2 guests</h6>
                        <a href="" className="edit"> Edit</a>
                    </div><img src={line} className="pay-line" /> 
                </div>
                
                  <div>
                    <h5>Choose How To Pay</h5>
                  </div>
                  <div className="checkout-11">
                    <div className="rad" >
                        <label >Pay Now</label> 
                            
                            <input type="radio" checked="checked" name="radio" />
                                
                    </div>
                    <img src={line} className="pay-line" /> 
                    <div className="rad" >
                        <label > Pay part now Part later </label> 
                            
                            <input type="radio"  name="radio" />
                               
                    </div>
                  </div>

                  
                  <div className="checkout-1">
                  <div class="col-50">
            <h3>Payment</h3>
            
            
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
            <label for="expyear">Exp Year</label>
            <input type="text" id="expyear" name="expyear" placeholder="2018"/>
            <label for="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" placeholder="352"/>
            <label>Save My Card Details</label>
             <input type="checkbox" className="checkbox" /> 
            </div>
          </div>
          
                 

                  <div  className="checkout-1">

                  <div class="col-50">
            <h3>Booking Under</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com"/>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York"/>

            <div>
                    <button className="payment-btn">Confirm Payment</button>
                    </div>
          </div>
                  </div> 
                  </div>
                  

           





            <div className="column-right">
                <div className="checkout-0">
                       <div>
                        <img src={image} className="re-img" />
                        <h4>HoneyMoons Suite</h4>
                        <h5 className="words">Romantic getAway</h5>
                        <p>
                            <FontAwesomeIcon icon={faStar} />
                            4.98(110 reviews)
                        </p>
                       </div>
                       <div>
                        <h4>Price Details</h4>
                        <p>Romantic Suite: R3,750</p>
                        <p>Special Offer: -R1,250</p>
                        <p>Cleaning Fee: R0</p>
                        <p>Subtotal: R2,500</p>
                       </div>
                       
                </div>
                <div className="checkout-0">
                    <h4>Choose a different Payment Method</h4>
                    <div>
                        <div>
                            
                                <FontAwesomeIcon icon={faMoneyBill} /> Cash
                            
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faAppleAlt} /> Apple Pay
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBank} /> Bank Tranfers
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGift} /> Gift Cards 
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
        
       )
}
export default Checkout;