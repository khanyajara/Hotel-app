import React ,{useState}from "react";
import { Link } from "react-router-dom";
import css from "./checkout.css"
import logo from "../h-removebg-preview.png"
import line from "./Line 20.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft , faBridge ,faStar, faMoneyBill, faAppleAlt, faBank , faGift} from "@fortawesome/free-solid-svg-icons";
import image from "./hotel room.jpg"
import TotalPrice from "./checkout"
import { useNavigate,useLocation } from "react-router-dom";


const Checkout=()=> {



    const navigate= useNavigate();
    const location = useLocation();
    const {arrivalDate, departureDate, guests, totalPrice,  pricePerNight, RoomName} = location.state || {};

    const [editedArrivalDate, setEditedArrivalDate] = useState(arrivalDate);
    const [editedDepartureDate, setEditedDepartureDate] = useState(departureDate);
    const [editedGuests, setEditedGuests] = useState(guests);
    
    const confirmPayment = () => {
        
        alert("Payment confirmed!");
        navigate("/confirmation"); 
    };

    const EditDates = () => {
        const newArrivalDate = prompt("Enter new arrival date:", editedArrivalDate);
        const newDepartureDate = prompt("Enter new departure date:", editedDepartureDate);
        if (newArrivalDate) setEditedArrivalDate(newArrivalDate);
        if (newDepartureDate) setEditedDepartureDate(newDepartureDate);
    };

    const EditGuests = () => {
        const newGuests = prompt("Enter number of guests:", editedGuests);
        if (newGuests) setEditedGuests(newGuests);
    };


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
    const gallery = () => navigate("/gallery");

    const checkOut=()=>{
        navigate("/pay")
    }
    return (
        <div className="checkout">
             <div className="topNavBar">
            

            <h2><a onClick={home} className="NavBar">Home</a></h2>
            <h2><a onClick={room} className="NavBar">Rooms</a></h2>
            <h2><a onClick={Booking} className="NavBar">Booking</a></h2>
            <img src={logo}  className="logo1"/>
            <h2><a onClick={home} className="NavBar">Facilities</a></h2>
            <h2><a onClick={gallery} className="NavBar">Gallery</a></h2>
            <h2><a onClick={home} className="NavBar">How To Get There</a></h2>
        </div>


        <div className="line-div">
            <img src={line} className="line-0" />
        </div>

        <div className="Columns-2">
            <div className="column-left">
                <div className="first-section">
                    <button className="icon-btn" onClick={Booking}>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} className="Icons" />
                    </button><h4>Confirm and pay</h4>
                </div>
                
                <div className="Text-0">

                   <h5> This is one of our highly recommended Suites</h5>
                   <FontAwesomeIcon icon={faBridge} className="bridge" />
                </div>


                <div>
                    <h5>Your Trip:</h5>
                    <div className="text-2">
                        <h6>Date: </h6>
                        <a onClick={EditDates} className="edit"> Edit</a>
                    </div>
                    <div className="text-2">
                        <h6>Guests: </h6>
                        <a onClick={EditGuests} className="edit"> Edit</a>
                    </div>
                </div><img src={line} className="pay-line" /> 
                
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
                  <img src={line} className="pay-line" /> 

                  
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
                        <h4>{RoomName}</h4>
                        <h5 className="words">Romantic getAway</h5>
                        <p>
                            <FontAwesomeIcon icon={faStar} />
                            4.98(110 reviews)
                        </p>
                       </div>
                       <div>
                        <h4> Details</h4>
                        <p>R.{pricePerNight} /night</p>
                        <p>Free cancellation</p>
                        <p>Guests: {guests}</p>
                        <p>DATE OF ARRIVAL:  {arrivalDate}</p>
                        <p>DATE OF DEPARTURE: {departureDate}</p>
                        <p>Total: R.{totalPrice}</p>
                       </div>
                       
                </div>
                <div className="checkout-0">
                    <h4>Choose a different Payment Method</h4>
                    <div className="methods-div">
                        <div>
                            
                                <button className="iconic-btns">
                                    <FontAwesomeIcon icon={faMoneyBill} /> Cash
                                </button>
                            
                        </div>
                        <div>
                            <button className="iconic-btns">
                                <FontAwesomeIcon icon={faAppleAlt} /> Apple Pay
                            </button>
                        </div>
                        <div>
                            <button className="iconic-btns">
                                <FontAwesomeIcon icon={faBank} /> Bank Tranfers
                            </button>
                        </div>
                        <div>
                            <button className="iconic-btns">
                                <FontAwesomeIcon icon={faGift} /> Gift Cards 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
        
       )
}
export default Checkout;