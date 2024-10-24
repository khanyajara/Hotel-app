import React, { useState, useEffect } from "react";
import "./RoomsPage.css";
import { auth } from "../firebase/config";
import Star from "./Star.png";
import logo from "../h-removebg-preview.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, FetchUserBookings, addFavorite, getUserFavorites } from "../redux/dbSlice";
import { getProfile, fetchUser } from "../redux/authSlice";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';

const RoomsPage = () => {
    const { data, error, loading } = useSelector((state) => state.data || {});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const [user, setUser] = useState(null);
    const [selectedRoomType, setSelectedRoomType] = useState('All');
    const [likedRooms, setLikedRooms] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
            dispatch(fetchUser());
        }
        dispatch(fetchData());
        dispatch(getUserFavorites());
    }, [dispatch]);

    useEffect(() => {
        if (user?.uid) {
            dispatch(FetchUserBookings(user.uid));
        }
    }, [dispatch, user]);

    const blog = () => {
        navigate("/Leave-review");
    };

    const navigateTo = (path) => () => navigate(path);

    const toggleLike = (roomData) => {
        const isLiked = likedRooms.includes(roomData.id);
    
        if (isLiked) {
            setLikedRooms(likedRooms.filter((id) => id !== roomData.id));
            dispatch(addFavorite(user.uid, roomData.id, false));
        } else {
            setLikedRooms([...likedRooms, roomData.id]);
            dispatch(addFavorite(user.uid, roomData.id, true)); 
        }
    };
    
    const shareRoom = (room) => {
        const url = `https://yourwebsite.com/rooms/${room.id}`;
        const text = `Check out this room: ${room.title} ${url}`;
        
        const platforms = {
            Email: `mailto:?subject=${encodeURIComponent(room.title)}&body=${encodeURIComponent(url)}`,
            WhatsApp: `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,
            Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        };
    
       
        const sharePopup = window.open('', '_blank', 'width=400,height=300');
        sharePopup.document.write(`
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h2>Share this room</h2>
                ${Object.keys(platforms).map(platform => 
                    `<a href="${platforms[platform]}" target="_blank" style="display: block; margin: 5px 0;">Share on ${platform}</a>`
                ).join('')}
                <button onclick="window.close()" style="margin-top: 10px;">Close</button>
            </div>
        `);
        sharePopup.document.close();
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
                {loading && <p>Loading...</p>}
                {error && <p>Error fetching rooms: {error}</p>}
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
                    {Array.isArray(likedRooms) && likedRooms.map((roomId) => {
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
