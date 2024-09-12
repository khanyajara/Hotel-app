import React from "react";
import "./RoomsPage.css"
import logo from "../h-removebg-preview.png"
import RoomPicture from "./hotel room.jpg"

const RoomsPage=()=>{
    return(
        <div className="rooms-page">
            <div className="topNavBar">

            <h2><a href="" className="NavBar">Home</a></h2>
            <h2><a href="" className="NavBar">Rooms</a></h2>
            <h2><a href="" className="NavBar">Booking</a></h2>
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
                <div className="Rooms-info">
                    <div className="Img-div">
                        <img  src={RoomPicture}  className="Room-Img"/>
                    </div>
                    <div className="Rooms-contents">
                        <div className="Room-descriptions">
                            <h4>Harmony Suites</h4>
                            <p>Double/Twin</p>
                            <p>Blissful, Calm, Spectacular view</p>
                            <p>(1219 Visitors)</p>
                            <p>Price: R2,560</p>
                        </div>

                    </div>
                </div>
            </div>
          </div>


















        </div>
    )
}
export default RoomsPage;