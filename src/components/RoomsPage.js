import React, { useState, useEffect } from "react";
import "./RoomsPage.css";
import logo from "../h-removebg-preview.png";
import Star from "./Star.png";
import { useDispatch, useSelector } from "react-redux";
import { FetchData, ReservedRoom } from "../redux/dbSlice";
import { useNavigate } from "react-router";

const RoomsPage = () => {
    const { data, error, loading } = useSelector((state) => state.data || {});
   
    const reservedRoom = useSelector((state) => state.data.reservedRoom);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(data)
    console.log(loading) 
    console.log(error)
    console.log(reservedRoom)
    



    useEffect(() => {
        dispatch(FetchData());
    }, [dispatch]);

    const home = () => {
        navigate("/Home");
    };

    const room = () => {
        navigate("/Rooms");
    };

    const Booking = () => {
        navigate("/Booking");
    };

    const viewroom = (room) => {
        navigate("/view", { state: room });
    };

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
                        <input type="text" placeholder="Search for rooms" className="Search" />
                    </div>
                </div>
                <div className="search-content"><h3>Recommended:</h3></div>
                <div className="Search-RecommendedBtns">
                    <button className="Search-btns">Suites</button>
                    <button className="Search-btns">Double/Twin</button>
                    <button className="Search-btns">Economy Suites</button>
                </div>
            </div>

            <div>
                <h1>Rooms</h1>
                <div className="Rooms-Sections">
                    {data.map((roomData, index) => (
                        <div className="Rooms-info" key={index}>
                            <div className="Img-div">
                                <img src={roomData.roomImage} className="Room-Img" alt={roomData.title} />
                            </div>
                            <div className="Rooms-contents">
                                <div className="Room-descriptions">
                                    <div className="Room-name"><h4>{roomData.title}</h4></div>
                                    <div className="Room-name"><p>{roomData.roomType}</p></div>
                                    <div className="Room-name"><p>Descriptions: {roomData.descriptions}</p></div><br/>
                                    <div className="Room-name"><p>Price: {roomData.price}</p></div>
                                    <div className="Room-name"><p>Visitors: {roomData.visitors}</p></div>
                                    <div className="Room-name"><p>Beds: {roomData.beds}</p></div>
                                    <div className="Room-name"><p>Guests: {roomData.guests}</p></div>
                                </div>
                                <div className="Room-BtnOutside">
                                    <button className="Room-Btn" onClick={() => viewroom(roomData)}>View Room</button>
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
            {reservedRoom && (
                <div className="reserved-room">
                    <h2>Your Reserved Room</h2>
                    
                    <h4>{reservedRoom.roomName}</h4>
                    <p>Arrival: {reservedRoom.arrivalDate}</p>
                    <p>Departure: {reservedRoom.departureDate}</p>
                    <p>Guests: {reservedRoom.guests}</p>
                    <p>Price/night: {reservedRoom.pricePerNight}</p>
                    <p>Trip cost: {reservedRoom.totalPrice}</p>
                </div>
            )}
        </div>
    );
};

export default RoomsPage;
