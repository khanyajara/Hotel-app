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



const HomePage=()=>{
   
    







   
 

 
  return(
    <div className="row3">
        <div className="topNavBar">

            <h2>Home</h2>
            <h2>Rooms</h2>
            <h2>Booking</h2>
            <img src={logo}  className="logo1"/>
            <h2>Facilities</h2>
            <h2>Gallery</h2>
            <h2>How To Get There</h2>
           
         </div>
         <div className="img-container">

         <div className="columns3"><img src={logo}  className="Img"/></div>
         <div className="columns2">
         <img src={logo}  className="Img1"/>
         <img src={logo}  className="Img1"/>
        </div>
         <div className="columns3"><img src={logo}  className="Img"/></div>
         
         </div>
         <div className="intro">
            <div>
                <h2>Welcome to <h2>Forrest Hills Hotel</h2>,a piece of paradise set in the heart of Kimberley </h2>
            </div>
            <p>Nestled amid a lush, verdant landscape, the Forrest Hills Hotel offers an unparalleled five-star retreat where 
               nature and luxury converge The hotel features elegantly appointed suites with private balconies overlooking 
               serene, rolling hills. Guests can indulge in world-class dining at the Forest Grill, unwind at the tranquil spa 
               with treatments inspired by natural elements, and explore extensive gardens and hiking trails.
               With personalized service, a stunning infinity pool, and exclusive access to pristine 
               forest trails, the Forrest Hills Hotel ensures an unforgettable 
               escape into nature’s grandeur.</p>
               <button>Book Now</button>
         </div>

         <div className="Facilities-Activities">
            <h1>________________________________________Facility   Activities____________________________________________</h1>
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
         <h1>________________________________________An Experience_____________________________________________</h1>
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

            <div><button >Check Availability</button></div>
         </div>
         <h1>________________________________________Check out our rooms_____________________________________________</h1>


    </div>
  )

}
export default HomePage;


