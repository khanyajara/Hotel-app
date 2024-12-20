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
import { auth } from "../firebase/config";

const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = useSelector((state) => state.auth.user || {});
    const { bookings } = useSelector((state) => state.db || []);

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);

    useEffect(() => {
        if (user?.uid) {
            dispatch(FetchUserBookings(auth.currentUser));
        }
    }, [dispatch, user]);

    console.log(auth.currentUser);

    useEffect(() => {
        console.log(bookings);
    }, [bookings]);

    const dropdown = () => {
        setIsOpen(!isOpen);
    };

    const home = () => {
        navigate("/Home");
    };

    const room = () => {
        navigate("/Rooms", { state: { firstName: user.firstName, lastName: user.lastName, uid: user.uid } });
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

    const Profile = () => {
        navigate("/user-info");
    };

    const blog = () => {
        navigate("/Leave-review");
    };

    const goToHowToGetThere = () => {
        navigate("/how-to-get-there");
    };

    const roomfilter = () => {
        navigate("/Rooms");
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle hamburger menu
    };

    return (
        <div className="row3">
             <div className="topNavBar">
                <button className="menu-btn" onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`nav-items ${isMenuOpen ? "active" : ""}`}>
                    <h2><a onClick={home} className="NavBar">Home</a></h2>
                    <h2><a onClick={room} className="NavBar">Rooms</a></h2>
                    <h2><a onClick={Facilities} className="NavBar">Facilities</a></h2>
                    <img src={logo} className="NAVBar" alt="Logo" />
                    <h2><a onClick={Gallery} className="NavBar">Gallery</a></h2>
                    <h2><a onClick={goToHowToGetThere} className="NavBar">How To Get There</a></h2>
                </div>
                <div className="Profile">
                    <h2>
                        <button className="iconss-btn" aria-label="User Profile" onClick={() => setIsProfileVisible(!isProfileVisible)}>
                            <FontAwesomeIcon icon={faUserCircle} size="3x" />
                        </button>
                    </h2>
                    {isProfileVisible && (
                        <div className="profile-dropdown">
                            <h2>Welcome, {user.firstName}<br /> {user.lastName}</h2>
                            <p>{user.email}</p>
                            <p>{user.phoneNumber}</p>
                            <button onClick={handleLogout} className="Pro-btn">Logout</button><br />
                            <button onClick={Profile} className="Pro-btn">View Profile</button>
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
                <div className="columns3"><img src={Lobby} className="Img0" alt="Lobby" /></div>
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

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

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
            <div className="Facilities-Activities">
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

            <div className="Facilities-Activities">
                <h1 className="heading-for-facilities">_______________<h2 className="heading-color">See Room Types</h2>_____________________</h1>
            </div>
            <div className="row8">
                <div>
                    <h2 onClick={dropdown} style={{ cursor: 'pointer' }}>
                        Deluxe
                    </h2>
                    {isOpen && (
                        <>
                            <p>____________________________________________</p>
                            <h2 className="heading-color">Deluxe</h2>
                            <p className="heading-color">____________________________________________</p>
                            <p className="text">The Deluxe Room offers a spacious, elegant retreat with a king-sized bed, luxurious amenities, and stunning views.</p>
                        </>
                    )}
                </div>
                <div>
                    <h2 onClick={dropdown} style={{ cursor: 'pointer' }}>
                        Luxury Suite
                    </h2>
                    {isOpen && (
                        <>
                            <p>____________________________________________</p>
                            <h2 className="heading-color">Luxury Suite</h2>
                            <p className="heading-color">____________________________________________</p>
                            <p className="text">The Luxury Suite features a separate living area, plush furnishings, and exclusive access to the concierge lounge.</p>
                        </>
                    )}
                </div>
                <div>
                    <h2 onClick={dropdown} style={{ cursor: 'pointer' }}>
                        Presidential Suite
                    </h2>
                    {isOpen && (
                        <>
                            <p>____________________________________________</p>
                            <h2 className="heading-color">Presidential Suite</h2>
                            <p className="heading-color">____________________________________________</p>
                            <p className="text">The Presidential Suite provides an opulent experience with a private terrace, gourmet kitchen, and personalized service.</p>
                        </>
                    )}
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="Footer">
                <div className="footer-info">
                    <div className="footer-left">
                        <div className="cass">
                            <h2 className="INFO_FOOTER">Contact Info</h2>
                            <p className="INFO_FOOTER">Call: +27 76 490 2903</p>
                            <p className="INFO_FOOTER">Email: Info@foresthills.com</p>
                        </div>
                        <div className="cass">
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
                    <a onClick={blog}> Write a review</a>
                    <a href=""> Gallery</a>
                    <a onClick={goToHowToGetThere}> How To Get There</a>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.0900654461657!2d24.73093097639823!3d-28.716854270992684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9b1abe56fe08b7%3A0x5dcb1f20b34a7b21!2sTyala%20St%2C%20Galeshewe%2C%20Kimberley%2C%208345!5e0!3m2!1sen!2sza!4v1729516063469!5m2!1sen!2sza" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                 </div>
                <br/>
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
                        <br/>
                        
                      
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
