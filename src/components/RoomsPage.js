import React, { useState, useEffect } from "react";
import "./RoomsPage.css";
import logo from "../h-removebg-preview.png";
import Star from "./Star.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/dbSlice";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faShareSquare } from '@fortawesome/free-solid-svg-icons';



const RoomsPage = () => {
    const { data, error, loading } = useSelector((state) => state.data || {});
    const [likedRooms, setLikedRooms] = useState([]);
    const [selectedRoomType, setSelectedRoomType] = useState('All');
    const [searchInput, setSearchInput] = useState(''); // New state for search input
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const home = () => navigate("/Home");
    const room = () => navigate("/Rooms");
    const Booking = () => navigate("/booking");
    const viewroom = (room) => navigate("/view", { state: room });

    const toggleLike = (room) => {
        setLikedRooms((prevLikedRooms) => {
            if (prevLikedRooms.includes(room)) {
                return prevLikedRooms.filter((r) => r !== room);
            } else {
                return [...prevLikedRooms, room];
            }
        });
    };

    const shareRoom = (room) => {
        const url = `https://yourwebsite.com/rooms/${room.id}`;
        const text = `Check out this room: ${room.title}`;
    
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    
        
        window.open(facebookShareUrl, '_blank');
        window.open(twitterShareUrl, '_blank');
        window.open(linkedInShareUrl, '_blank');
    };
    
   
    
    
    
    
    
    const filteredRooms = data.filter(room => {
        const matchesType = selectedRoomType === 'All' || room.roomType === selectedRoomType;
        const matchesSearch = room.title.toLowerCase().includes(searchInput.toLowerCase());
        return matchesType && matchesSearch;
    });

    return (
        <div className="rooms-page">
            <div className="topNavBar">
                <h2><a onClick={home} className="NavBar">Home</a></h2>
                <h2><a onClick={room} className="NavBar">Rooms</a></h2>
                <h2><a onClick={Booking} className="NavBar">Booking</a></h2>
                <img src={logo} className="logo1" alt="Logo" />
                <h2><a href="" className="NavBar">Facilities</a></h2>
                <h2><a href="" className="NavBar">Gallery</a></h2>
                <h2><a href="" className="NavBar">How To Get There</a></h2>
            </div>

            <div className="Search-DivContents">
                <div className="Search-Container">
                    <div className="Search-Input">
                        <input
                            type="text"
                            placeholder="Search for rooms"
                            className="Search"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)} // Update search input
                        />
                    </div>
                </div>
                <div className="search-content"><h3>Recommended:</h3></div>
                <div className="Search-RecommendedBtns">
                    <button className="Search-btns" onClick={() => setSelectedRoomType('All')}>All</button>
                    <button className="Search-btns" onClick={() => setSelectedRoomType('Suites')}>Suites</button>
                    <button className="Search-btns" onClick={() => setSelectedRoomType('Deluxe')}>Double/Twin</button>
                    <button className="Search-btns" onClick={() => setSelectedRoomType('Commercial')}>Economy Suites</button>
                </div>
            </div>

            <div>
                <h1>Rooms</h1>
                <div className="Rooms-Sections">
                    {filteredRooms.map((roomData, index) => (
                        <div className="Rooms-info" key={index}>
                            <div className="Img-div">
                                <img src={roomData.roomImage} className="Room-Img" alt={roomData.title} />
                            </div>
                            <div className="Rooms-contents">
                                <div className="Room-descriptions">
                                    <div className="Room-name"><h4>{roomData.title}</h4></div>
                                    <div className="Room-name"><p>{roomData.roomType}</p></div>
                                    <div className="Room-name"><p>Descriptions: {roomData.descriptions}</p></div><br />
                                    <div className="Room-name"><p>Price: {roomData.price}</p></div>
                                    <div className="Room-name"><p>Visitors: {roomData.visitors}</p></div>
                                    <div className="Room-name"><p>Beds: {roomData.beds}</p></div>
                                    <div className="Room-name"><p>Guests: {roomData.guests}</p></div>
                                </div>
                                <div className="Room-BtnOutside">
                                    <button className="Room-Btn" onClick={() => viewroom(roomData)}>View Room</button>
                                    <br/>
                                    <button className="Room-Btn" onClick={() => toggleLike(roomData)}>
                                        {likedRooms.includes(roomData) ? "❌" : "❤"}
                                    </button>
                                    <button className="Room-Btn" onClick={() => shareRoom(roomData)}>
                                        <FontAwesomeIcon icon={faShareSquare} />
                                     
                                        </button>
                                </div>
                            </div>
                            <div className="ratings">
                                {[...Array(5)].map((_, starIndex) => (
                                    <img key={starIndex} src={Star} className="Stars" alt="Star" />
                                ))}
                                <p>(1110 reviews)</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2>Liked Rooms</h2>
                <div className="Rooms-Sections">
                    {likedRooms.map((roomData, index) => (
                        <div className="Rooms-info" key={index}>
                            <div className="Img-div">
                                <img src={roomData.roomImage} className="Room-Img" alt={roomData.title} />
                            </div>
                            <div className="Rooms-contents">
                                <div className="Room-descriptions">
                                    <div className="Room-name"><h4>{roomData.title}</h4></div>
                                    <div className="Room-name"><p>{roomData.roomType}</p></div>
                                    <div className="Room-name"><p>Price: {roomData.price}</p></div>
                                </div>
                                <div className="Room-BtnOutside">
                                    <button className="Room-Btn" onClick={() => viewroom(roomData)}>View Room</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoomsPage;
