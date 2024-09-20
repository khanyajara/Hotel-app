import React from "react";
import "./RoomsPage.css"
import logo from "../h-removebg-preview.png"
import RoomPicture from "./hotel room.jpg"
import Star from "./Star.png"
import Room1 from "./Room1.png"
import Room2 from "./Room2.png"
import Room3 from "./Room3.png"
import Room4 from "./Room4.png"
import Room5 from "./Room5.jpg"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "../redux/dbSlice";

const RoomsPage=()=>{
    const { data, error, loading } = useSelector((state) => state.data || {});  
    const dispatch = useDispatch();

    const navigate= useNavigate();
useEffect(()=>{
    dispatch(FetchData());
},[dispatch]);




    const home =()=>{
        navigate("/Home")

    }
    const room =()=>{
        navigate("/Rooms")
    }
    const Booking=()=>{
        navigate("/Booking")
    }

   const viewroom =(room)=>{
    console.log(room)
    navigate("/view", {state: data  
    })
   }
  

    return(
        <div className="rooms-page">
            <div className="topNavBar">

            <h2><a onClick={home} className="NavBar">Home</a></h2>
            <h2><a onClick={room} className="NavBar">Rooms</a></h2>
            <h2><a onClick={Booking} className="NavBar">Booking</a></h2>
            <img src={logo}  className="logo1"/>
            <h2><a href="" className="NavBar">Facilities</a></h2>
            <h2><a href="" className="NavBar">Gallery</a></h2>
            <h2><a href="" className="NavBar">How To Get There</a></h2>
          </div>
        
          <div className="Search-DivContents">
            <div className="Search-Container">
                <div className="Search-Input">
                    <input type="text" 
                    placeholder="Search for rooms"
                    className="Search"
                    />
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
                {data.map((data, index)=>(
                    <div className="Rooms-info"key={index} >
                    <div className="Img-div">
                        <img src={data.roomImage} 
                         className="Room-Img"/>
                    </div>
                    <div className="Rooms-contents">
                        <div className="Room-descriptions">
                            <div className="Room-name">
                                <h4>{data.title}</h4>
                            </div>
                            <div className="Room-name">
                                <p>{data.roomType}</p>
                            </div>
                            <div className="Room-name">
                                <p>descriptions:{data.desriptions}</p>
                            </div>
                            <div className="Room-name">
                                <p>Price:{data.price}</p>
                            </div>
                            <div className="Room-name">
                                <p>visitors:{data.visitors}</p>
                            </div>
                            <div className="Room-name">
                                <p> Beds:{data.beds}</p>
                            </div>
                            <div className="Room-name">
                                <p>Guests:{data.guests}</p>
                            </div>
                        </div>
                        <div className="Room-BtnOutside">
                            <button className="Room-Btn" onClick={viewroom}>View Room</button>

                        </div>


                    </div>
                        <div className="ratings">
                            <img  src={Star} className="Stars"/>
                            <img  src={Star} className="Stars"/>
                            <img  src={Star} className="Stars"/>
                            <img  src={Star} className="Stars" />
                            <img  src={Star} className="Stars"/>
                            <p>(1110 reviews)</p>
                        </div>
                </div>
                ))}
                
               
            </div>
            


          </div>


















        </div>
    )
}
export default RoomsPage;