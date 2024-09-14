import { useState } from "react";
import css from "./home.css"
import logo from "../h-removebg-preview.png"
import Massage from './Massage.png'
import Swimming from "./Swimming.png"
import Weightlifting from "./Weightlifting.png"
import Soccer from "./Soccer Player.png"
import SunLounge from "./Sun Lounger.png"
import Movie from "./Short Film.png"
import Reading from "./Reading.png"
import PoolImage from "./Pool-area.png"
import Lobby from "./Lobby3.jpg"
import HomeRoomImage from "./homePage1.jpg"
import HotelOutside from "./image-asset.jpeg"
import RoomImg from "./hotel room.jpg"
import { useNavigate } from "react-router";


const HomePage=()=>{
   
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

    
        









   
 

 
  return(
    <div className="row3">
        <div className="topNavBar">

            <h2><a onClick={home} className="NavBar">Home</a></h2>
            <h2><a onClick={room} className="NavBar">Rooms</a></h2>
            <h2><a onClick={Booking} className="NavBar">Booking</a></h2>
            <img src={logo}  className="logo1"/>
            <h2><a href="./Facilities.js" className="NavBar">Facilities</a></h2>
            <h2><a href="" className="NavBar">Gallery</a></h2>
            <h2><a href="" className="NavBar">How To Get There</a></h2>
           
         </div>
         <div className="img-container">

         <div className="columns3"><img src={HotelOutside}  className="Img0"/></div>
         <div className="columns2">
         <img src={HomeRoomImage}  className="Img1"/>
         <img src={PoolImage}  className="Img1"/>
        </div>
         <div className="columns3"><img src={Lobby}  className="Img"/></div>
         
         </div>
         <div className="intro">
            <div>
                <h2>Welcome to <h2 className="heading-color">Forrest Hills Hotel</h2>,a piece of paradise set in the heart of Kimberley </h2>
            </div>
            <p>Nestled amid a lush, verdant landscape, the Forrest Hills Hotel offers an unparalleled five-star retreat where 
               nature and luxury converge The hotel features elegantly appointed suites with private balconies overlooking 
               serene, rolling hills. Guests can indulge in world-class dining at the Forest Grill, unwind at the tranquil spa 
               with treatments inspired by natural elements, and explore extensive gardens and hiking trails.
               With personalized service, a stunning infinity pool, and exclusive access to pristine 
               forest trails, the Forrest Hills Hotel ensures an unforgettable 
               escape into nature’s grandeur.</p>
               <button className="Home-btn" onClick={room}>Book Now</button>
         </div>

         <div className="Facilities-Activities">
            <div >
                <h1 className="heading-for-facilities">________________________________________<h2 className="heading-color">Facility   Activities</h2>____________________________________________</h1>
            </div>
            <div className="Facilities-space">
                <img src={Massage}  className="Facilities"/>
                <img src={Reading}  className="Facilities"/>
                <img src={Movie}  className="Facilities"/>
                <img src={Weightlifting}  className="Facilities"/>
                <img src={Swimming}  className="Facilities"/>
                <img src={SunLounge}  className="Facilities"/>
                <img src={Soccer}  className="Facilities"/>
                
            </div>
         </div>
         <div >
                <h1 className="heading-for-facilities">________________________________________<h2 className="heading-color">An Exerience</h2>____________________________________________</h1>
            </div>
         <div className="row4">
            <div className="column1" >
                <div><img src={PoolImage} className="pool-Img"/></div>
                
                <div className="experience">
                    <p>Guests booking a stay at the Forrest Hills Hotel can expect an immersive, luxury 
                    experience that blends natural beauty with unparalleled comfort. From the moment you
                    arrive, you’ll be greeted by our attentive staff and welcomed with a refreshing herbal 
                    infusion derived from the surrounding forests. Each suite offers a harmonious blend of
                    modern elegance and rustic charm, complete with panoramic views of the rolling hills.
                    
                    </p>
                </div>
            </div>

         </div>

         <div className="row4">
            <div className="column0" >
                <div><img src={Lobby} className="lobby-Img"/></div>
                
                <div className="experience0">
                    <p>Enjoy gourmet dining with locally-sourced ingredients    at  the  Forest Grill, where every meal is an artistic     experience. Unwind at our serene spa, where 
                       treatments use organic elements to rejuvenate
                       both body and mind. Explore the expansive gardens, 
                       take a guided nature hike, or
                       simply relax by the infinity pool, which seems
                    to merge seamlessly with the horizon.

                    Our concierge is dedicated to curating bespoke
                    experiences, whether it's a private forest picnic,
                    a guided stargazing tour, or a bespoke wellness retreat.
                    At the Forrest Hills Hotel, every detail is
                    designed to create a memorable,
                       rejuvenating escape into nature’s embrace.
                    </p>
                </div>
            </div>

         </div>
         <div className="row7">
            <div className="row0">
                <label for="DOA">Date Of Arrival</label>
                <input
                type="date"
                id="DOA" />
            </div>
            <div className="row0">
                <label for="DOA">Date Of Departure</label>
                <input
                type="date"
                id="DOA" />
            </div>
            <div className="row0">
                <label for="Guests">No. Guests</label>
                <select id="Guests" name="Guests">
                    <option value="0"></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
            </div>

            <div><button className="check-btn">Check Availability</button></div>
         </div>
         <div >
                <h1 className="heading-for-facilities">________________________________________<h2 className="heading-color">See Rooms Types</h2>____________________________________________</h1>
            </div>
            <div className="row8">
                <div >
                  <h2>Deluxe</h2>
                  <p>____________________________________________</p>
                  <h2 className="heading-color">Deluxe</h2>
                  <p className="heading-color">____________________________________________</p>
                  <ul>
                    <li>comfort</li>
                    <li>comfort</li>
                    <li>comfort</li>
                    <li>comfort</li>
                  </ul>
                  <p className="heading-color">____________________________________________</p>
                  <h2>Single</h2>
                 
                </div>
                <div className="Room-Imgdiv" >
                   <img src={RoomImg} className="roomImg" />
                </div>
            </div>
            <div >
                <h1 className="heading-for-facilities">________________________________________<h2 className="heading-color">Our Facilities Include</h2>____________________________________________</h1>
            </div>
            <div className="facilities-container">
                <div className="first-row">
                    <h3>Leisure and Relaxation</h3>
                    <ul className="list">
                        <li>Swimming</li>
                        <li>Spa and Wellness Center</li>
                        <li>Fitness</li>
                        
                        
                    </ul>
                </div>
                <div className="first-row">
                    <h3>Entertainment</h3>
                    <ul className="list">
                        <li>Game Rooms</li>
                        <li>In-house movie screening</li>
                        <li>Kid's play area </li>
                        <li>Business Center</li>
                        <li>Library</li>
                        </ul>
                </div>
                <div className="first-row">
                    <h3>Dining and Socializing</h3>
                    <ul className="list">
                        <li>Restuarants and Bars</li>
                        <li>Rooftop Lounges</li>
                        <li>Room Service</li>
                        <li>Event Spaces</li> 
                    </ul>
                </div>
          </div>
          <div className="Footer">
          <div className="footer-info">
                    <h2>Contact Info</h2>
                    <p>Call: +27 76 490 2903</p>
                    <p>Email: Info@foresthills.com</p>
                    <h2>Address</h2>
                    <p>7835</p>
                    <p>Moshe Kantani Ave</p>
                    <p>Redirile, Galesshewe</p>
                    <p>8345</p>
                </div>
                <div className="footer-nav">
                    <a href=""> Home</a>
                    <a href=""> About</a>
                    <a href=""> Blog</a>
                    <a href=""> Gallery</a>
                    <a href=""> How To Get There</a>
                   
                </div>
                <div className="footer-subscribe">
                <form className="Subscribe-form">
  

  <div class="container" ><h3>Get Our NewsLetter</h3>
    
    <input type="text" placeholder="Email address" name="mail" required/>
    <label>
      <input type="checkbox"  name="subscribe"/> Daily Newsletter
    </label>
  </div>

  <div class="container">
    <input type="submit" value="Subscribe" />
  </div>
</form>

                    
                </div>
                
            

          </div>

    </div>
  )

}
export default HomePage;


