import React, { useState, useEffect } from "react";
import "./RoomsPage.css";
import {auth} from "../firebase/config"
import Star from "./Star.png";
import logo from "../h-removebg-preview.png"
import { useDispatch, useSelector } from "react-redux";
import { fetchData, addLikedRoom, FetchUserBookings } from "../redux/dbSlice";
import { getProfile } from "../redux/authSlice";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';

const RoomsPage = () => {
    const { data, error, loading } = useSelector((state) => state.data || {});
    const user = useSelector((state) => state.auth.user || {});
    const [likedRooms, setLikedRooms] = useState([]);
    const [selectedRoomType, setSelectedRoomType] = useState('All');
    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);
    useEffect(() => {
        if (user?.uid) {
            dispatch(FetchUserBookings(auth.currentUser));
           
        }
    }, [dispatch, user]);


    console.log(auth.currentUser)


    const blog = () => {
        navigate("/Leave-review");
    };

    const navigateTo = (path) => () => navigate(path);
    
    const toggleLike = (roomData) => {
        if (likedRooms.includes(roomData.id)) {
            setLikedRooms(likedRooms.filter((id) => id !== roomData.id));
            dispatch(addLikedRoom(roomData.id, false));
            } else {
                setLikedRooms([...likedRooms, roomData.id]);
                dispatch(addLikedRoom(roomData.id, true));
                }

    };

   

    
    
    const shareRoom = (room) => {
        const url = `https://yourwebsite.com/rooms/${room.id}`;
        const text = `Check out this room: ${room.title}`;
        
        // Email link
        const emailLink = `mailto:?subject=${encodeURIComponent(room.title)}&body=${encodeURIComponent(url)}`;
        // WhatsApp link
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(room.title + ' ' + url)}`;
        // Facebook link
        const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        // Instagram link
        const instagramLink = `https://www.instagram.com/?url=${encodeURIComponent(url)}`;

        // Open share links in new tab (optional)
        window.open(emailLink, '_blank');
        window.open(whatsappLink, '_blank');
        window.open(facebookLink, '_blank');
        window.open(instagramLink, '_blank');
    };

    const filteredRooms = data.filter(room => {
        const matchesType = selectedRoomType === 'All' || room.roomType === selectedRoomType;
        const matchesSearch = room.title.toLowerCase().includes(searchInput.toLowerCase());
        return matchesType && matchesSearch;
    });

    return (
        <div className="rooms-page">
            <div className="topNavBar">
                <h2><a onClick={navigateTo("/Home")} className="NavBar">Home</a></h2>
                <h2><a onClick={navigateTo("/Rooms")} className="NavBar">Rooms</a></h2>
                <h2><a onClick={navigateTo("/booking")} className="NavBar">Booking</a></h2>
                <img src={logo} className="logo1" alt="Logo" />
                <h2><a href="#" className="NavBar">Facilities</a></h2>
                <h2><a href="#" className="NavBar">Gallery</a></h2>
                <h2><a href="#" className="NavBar">How To Get There</a></h2>
            </div>

            <div className="Search-DivContents">
                <div className="Search-Container">
                    <div className="Search-Input">
                        <input
                            type="text"
                            placeholder="Search for rooms"
                            className="Search"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
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
                    {filteredRooms.map((roomData) => (
                        <div className="Rooms-info" key={roomData.id}>
                            <div className="Img-div">
                                <img src={roomData.roomImage} className="Room-Img" alt={roomData.title} />
                            </div>
                            <div className="Rooms-contents">
                                <div className="Room-descriptions">
                                    <div className="Room-name"><h4>{roomData.title}</h4></div>
                                    <div className="Room-name"><p>{roomData.roomType}</p></div>
                                    <div className="Room-name"><p>Descriptions: {roomData.descriptions}</p></div>
                                    <br />
                                    <div className="Room-name"><p>Price: {roomData.price}</p></div>
                                    <div className="Room-name"><p>Visitors: {roomData.visitors}</p></div>
                                    <div className="Room-name"><p>Beds: {roomData.beds}</p></div>
                                    <div className="Room-name"><p>Guests: {roomData.guests}</p></div>
                                </div>
                                <div className="Room-BtnOutside">
                                    <button className="Room-Btn" onClick={() => navigate("/view", { state: roomData })}>View Room</button>
                                    <br />
                                    <button className="Room-Btn" onClick={() => toggleLike(roomData)}>
                                        {likedRooms.includes(roomData.id) ? "❌" : "❤"}
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
                                <p onClick={blog} className="blog">(1110 reviews)</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2>Liked Rooms</h2>
                <div className="Rooms-Sections">
                    {likedRooms.map((roomId) => {
                        const roomData = data.find(room => room.id === roomId);
                        return roomData ? (
                            <div className="Rooms-info" key={roomId}>
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
                                        <button className="Room-Btn" onClick={() => navigate("/view", { state: roomData })}>View Room</button>
                                    </div>
                                </div>
                            </div>
                        ) : null;
                    })}
                </div>
            </div>
        </div>
    );
};

export default RoomsPage;
