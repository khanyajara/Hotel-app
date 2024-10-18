import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import css from "./home.css";
import logo from "../h-removebg-preview.png";
import Massage from './Massage.png';
import Swimming from "./Swimming.png";
import Weightlifting from "./Weightlifting.png";
import Soccer from "./Soccer Player.png";
import SunLounge from "./Sun Lounger.png";
import Movie from "./Short Film.png";
import Reading from "./Reading.png";
import PoolImage from "./Pool-area.png";
import Lobby from "./Lobby3.jpg";
import HomeRoomImage from "./homePage1.jpg";
import HotelOutside from "./image-asset.jpeg";
import RoomImg from "./hotel room.jpg";
import { getProfile, logout } from "../redux/authSlice"; 
import { FetchUserBookings } from "../redux/dbSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {auth} from "../firebase/config"


const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const user = useSelector((state) => state.auth.user || {});
    const {bookings} = useSelector((state) => state.db || []);

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);
    useEffect(() => {
        if (user?.uid) {
            dispatch(FetchUserBookings(auth.currentUser));
           
        }
    }, [dispatch, user]);


    console.log(auth.currentUser)
    
    useEffect(() => {
        console.log(bookings);
    }, [bookings]);
    
    
    const home = () => {
        navigate("/Home");
    };

    const room = () => {

        navigate("/Rooms", { state: {    firstName: user.firstName, lastName: user.lastName, uid: user.uid } });
    };
    
         

    const Booking = () => {
        navigate("/Booking");
    };

    const Gallery = () => {
        navigate("/gallery");
    };

    const Facilities = () => {
        navigate("/facilities");
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('*');
    };

    const Profile=()=>{
        navigate("/user-info");
    }

    const blog = () => {
        navigate("/Leave-review");
    };

    const goToHowToGetThere = () => {
        navigate("/how-to-get-there");
    };

    return (
        <div className="row3">
            <div className="topNavBar">
                <h2><a onClick={home} className="NavBar">Home</a></h2>
                <h2><a onClick={room} className="NavBar">Rooms</a></h2>
                <h2><a onClick={Facilities} className="NavBar">Facilities</a></h2>
                <img src={logo} className="logo1" alt="Logo" />
                <h2><a onClick={Gallery} className="NavBar">Gallery</a></h2>
                <h2><a onClick={goToHowToGetThere} className="NavBar">How To Get There</a></h2>
                <div className="Profile">
                    <h2>
                        <button className="iconss-btn" aria-label="User Profile" onClick={() => setIsProfileVisible(!isProfileVisible)}>
                            <FontAwesomeIcon icon={faUserCircle} size="3x" />
                        </button>
                    </h2>
                    {isProfileVisible && (
                        <div className="profile-dropdown">
                            <h2>Welcome, {user.firstName} {user.lastName}</h2>
                            <p>{user.email}</p>
                            <p>{user.phoneNumber}</p>
                            <button onClick={handleLogout}>Logout</button>
                            <button onClick={() => setIsProfileVisible(false)}>Exit</button>
                            <button onClick={Profile} >View Profile</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="img-container">
                <div className="columns3"><img src={HotelOutside} className="Img0" alt="Hotel Exterior" /></div>
                <div className="columns2">
                    <img src={HomeRoomImage} className="Img1" alt="Home Room" />
                    <img src={PoolImage} className="Img1" alt="Pool Area" />
                </div>
                <div className="columns3"><img src={Lobby} className="Img" alt="Lobby" /></div>
            </div>
            <div className="intro">
                <div className="HEADING">
                    <h2>Welcome to <h2 className="heading-color">Forrest Hills Hotel</h2>, a piece of paradise set in the heart of Kimberley</h2>
                </div>
                <p className="HEAD_FONT">Nestled amid a lush, verdant landscape, the Forrest Hills Hotel offers an unparalleled five-star retreat where 
                   nature and luxury converge. The hotel features elegantly appointed suites with private balconies overlooking 
                   serene, rolling hills. Guests can indulge in world-class dining at the Forest Grill, unwind at the tranquil spa 
                   with treatments inspired by natural elements, and explore extensive gardens and hiking trails.
                   With personalized service, a stunning infinity pool, and exclusive access to pristine 
                   forest trails, the Forrest Hills Hotel ensures an unforgettable 
                   escape into nature’s grandeur.</p>
                <button className="Home-btn" onClick={room}>Book Now</button>
            </div>

            <div className="Facilities-Activities">
                <div>
                    <h1 className="heading-for-facilities">___________________<h2 className="heading-color">Facility Activities</h2>__________________</h1>
                </div>
                <div className="Facilities-space">
                    <img src={Massage} className="Facilities" alt="Massage" />
                    <img src={Reading} className="Facilities" alt="Reading" />
                    <img src={Movie} className="Facilities" alt="Movies" />
                    <img src={Weightlifting} className="Facilities" alt="Weightlifting" />
                    <img src={Swimming} className="Facilities" alt="Swimming" />
                    <img src={SunLounge} className="Facilities" alt="Sun Lounging" />
                    <img src={Soccer} className="Facilities" alt="Soccer" />
                </div>
            </div>
            <div>
                <h1 className="heading-for-facilities">_______________________<h2 className="heading-color">An Experience</h2>__________________</h1>
            </div>
            <div className="row4">
                <div className="column1">
                    <div><img src={PoolImage} className="pool-Img" alt="Pool" /></div>
                    <div className="experience">
                        <p className="HEAD_FONT">Guests booking a stay at the Forrest Hills Hotel can expect an immersive, luxury 
                        experience that blends natural beauty with unparalleled comfort. From the moment you
                        arrive, you’ll be greeted by our attentive staff and welcomed with a refreshing herbal 
                        infusion derived from the surrounding forests. Each suite offers a harmonious blend of
                        modern elegance and rustic charm, complete with panoramic views of the rolling hills.</p>
                    </div>
                </div>
            </div>

            <div className="row4">
                <div className="column0">
                    <div><img src={Lobby} className="lobby-Img" alt="Lobby" /></div>
                    <div className="experience0">
                        <p className="HEAD_FONT">Enjoy gourmet dining with locally-sourced ingredients at the Forest Grill, where every meal is an artistic experience. Unwind at our serene spa, where 
                        treatments use organic elements to rejuvenate both body and mind. Explore the expansive gardens, 
                        take a guided nature hike, or simply relax by the infinity pool, which seems
                        to merge seamlessly with the horizon.
                        Our concierge is dedicated to curating bespoke experiences, whether it's a private forest picnic,
                        a guided stargazing tour, or a bespoke wellness retreat.
                        At the Forrest Hills Hotel, every detail is designed to create a memorable,
                        rejuvenating escape into nature’s embrace.</p>
                    </div>
                </div>
            </div>

            <div className="row7">
                <div className="row0">
                    <label htmlFor="DOA">Date Of Arrival</label>
                    <input type="datetime-local" id="DOA" className="DOA" />
                </div>
                <div className="row0">
                    <label htmlFor="DOD">Date Of Departure</label>
                    <input type="datetime-local" id="DOD" className="DOA" />
                </div>
                <div className="row0">
                    <label htmlFor="Guests">No. Guests</label>
                    <select id="Guests" name="Guests" className="DOA">
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

            <div>
                <h1 className="heading-for-facilities">_____________________<h2 className="heading-color">See Room Types</h2>_____________________________</h1>
            </div>
            <div className="row8">
                <div>
                    <h2>Deluxe</h2>
                    <p>____________________________________________</p>
                    <h2 className="heading-color">Deluxe</h2>
                    <p className="heading-color">____________________________________________</p>
                    <ul>
                        <li>Comfort</li>
                        <li>Luxury Amenities</li>
                        <li>Spacious Rooms</li>
                        <li>Beautiful Views</li>
                    </ul>
                    <p className="heading-color">____________________________________________</p>
                    <h2>Single</h2>
                </div>
                <div className="Room-Imgdiv">
                    <img src={RoomImg} className="roomImg" alt="Room" />
                </div>
            </div>

            <div className="Facilities-container-0">
                <div>
                    <h1 className="heading-for-facilities">_______________<h2 className="heading-color">Our Facilities Include</h2>_________________________</h1>
                </div>
                <div className="facilities-container">
                    <div className="first-row">
                        <h3>Leisure and Relaxation</h3>
                        <ul className="list">
                            <li>Swimming</li>
                            <li>Spa and Wellness Center</li>
                            <li>Fitness Center</li>
                        </ul>
                    </div>
                    <div className="first-row">
                        <h3>Entertainment</h3>
                        <ul className="list">
                            <li>Game Rooms</li>
                            <li>In-house Movie Screening</li>
                            <li>Kid's Play Area</li>
                            <li>Business Center</li>
                            <li>Library</li>
                        </ul>
                    </div>
                    <div className="first-row">
                        <h3>Dining and Socializing</h3>
                        <ul className="list">
                            <li>Restaurants and Bars</li>
                            <li>Rooftop Lounges</li>
                            <li>Room Service</li>
                            <li>Event Spaces</li>
                        </ul>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="Footer">
                <div className="footer-info">
                    <div className="footer-left">
                        <div>
                            <h2 className="INFO_FOOTER">Contact Info</h2>
                            <p className="INFO_FOOTER">Call: +27 76 490 2903</p>
                            <p className="INFO_FOOTER">Email: Info@foresthills.com</p>
                        </div>
                        <div>
                            <h2 className="INFO_FOOTER">Address</h2>
                            <p className="INFO_FOOTER">7835</p>
                            <p className="INFO_FOOTER">Moshe Kantani Ave</p>
                            <p className="INFO_FOOTER">Redirile, Galesshewe</p>
                            <p className="INFO_FOOTER">8345</p>
                        </div>
                    </div>
                </div>
                <div className="footer-nav">
                    <a href=""> Home</a>
                    <a href=""> About</a>
                    <a onClick={blog}> Blog</a>
                    <a href=""> Gallery</a>
                    <a onClick={goToHowToGetThere}> How To Get There</a>
                </div>
                <div className="footer-subscribe">
                    <form className="Subscribe-form">
                        <div className="container-apl">
                            <h3 className="INFO_FOOTER">Get Our Newsletter</h3>
                            <input type="text" placeholder="Email address" name="mail" required />
                            <label className="INFO_FOOTER">
                                <input type="checkbox" name="subscribe" className="INFO_FOOTER" /> Daily Newsletter
                            </label>
                        </div>
                        <div className="container-apl">
                            <input type="submit" value="Subscribe" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
