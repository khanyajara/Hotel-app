import React from "react";
import Css from "./gallery.css"
import { Link } from "react-router-dom";
import logo from "../h-removebg-preview.png"
import img1 from "../hotelfun1.png"
import img2 from "../hotelfun2.png"
import img3 from "../hotelfun3.png"
import img4 from "../hotelfun4.png"
import img5 from "../hotelfun5.png"
import img6 from "../hotelfun6.png"
import img7 from "../hotelfun7.png"
import img8 from "../hotelfun8.png"
import img9 from "../fun 1.jpg"
import img10 from "../fun 2.jpg"
import img11 from "../fun 3.jpg"
import img12 from "../fun 4.jpg"
import img13 from "../fun 5.jpg"
import { useNavigate } from "react-router-dom";



const gallery=()=>{

 


const navigate= useNavigate

    const home =()=>{
        navigate("/Home")

    }
    const room =()=>{
        navigate("/Rooms")
    }
    const Booking=()=>{
        navigate("/Booking")
    }

   
    const Gallery=()=>{
        navigate("/gallery")
    }

    
    return(
        <div className="gallery">
             <div className="topNavBar">
            

            <h2><a onClick={home} className="NavBar">Home</a></h2>
            <h2><a onClick={room} className="NavBar">Rooms</a></h2>
            <h2><a onClick={Booking} className="NavBar">Booking</a></h2>
                <img src={logo}  className="logo1"/>
                <h2><a href="" className="NavBar">Facilities</a></h2>
                <h2><a onClick={Gallery} className="NavBar">Gallery</a></h2>
                <h2><a href="" className="NavBar">How To Get There</a></h2>
            </div>
            <div className="grid">
            <div  className="img-blocks">
              <img src={img1}  className="blocks" />
              <img src={img2}  className="blocks" />
              <img src={img3}    className="blocks"/>
              <img src={img4}   className="blocks"/>
              <img src={img5}   className="blocks"/>
              <img src={img6}   className="blocks"/>
              <img src={img7}   className="blocks"/>
              <img src={img8}   className="blocks"/>
            </div>
            <div  className="img-blocks">
              <img src={img10}   className="blocks"/>
              <img src={img12}   className="blocks"/>
              <img src={img13}  className="blocks" />
              <img src={img9}   className="blocks"/>
              <img src={img2}   className="blocks"/>
              <img src={img6}   className="blocks"/>
              <img src={img11}   className="blocks"/>
              <img src={img5}   className="blocks"/>
            </div>
            <div  className="img-blocks">
              <img src={img9}   className="blocks"/>
              <img src={img2}   className="blocks"/>
              <img src={img3}   className="blocks"/>
              <img src={img4}   className="blocks"/>
              <img src={img11}   className="blocks"/>
              <img src={img6}   className="blocks"/>
              <img src={img10}   className="blocks"/>
              <img src={img8}   className="blocks"/>
            </div>
            <div  className="img-blocks">
              <img src={img10}   className="blocks"/>
              <img src={img2}   className="blocks"/>
              <img src={img3}   className="blocks"/>
              <img src={img12}   className="blocks"/>
              <img src={img5}   className="blocks"/>
              <img src={img10}   className="blocks"/>
              <img src={img13}   className="blocks"/>
              <img src={img8}   className="blocks"/>
            </div>
            <div  className="img-blocks">
              <img src={img10}   className="blocks"/>
              <img src={img2}   className="blocks"/>
              <img src={img3}   className="blocks"/>
              <img src={img12}   className="blocks"/>
              <img src={img5}   className="blocks"/>
              <img src={img10}   className="blocks"/>
              <img src={img13}   className="blocks"/>
              <img src={img8}   className="blocks"/>
            </div>
            <div  className="img-blocks">
              <img src={img10}   className="blocks"/>
              <img src={img2}   className="blocks"/>
              <img src={img3}   className="blocks"/>
              <img src={img12}   className="blocks"/>
              <img src={img5}   className="blocks"/>
              <img src={img10}   className="blocks"/>
              <img src={img13}   className="blocks"/>
              <img src={img8}   className="blocks"/>
            </div>




            </div>
        </div>
    )
}
export default gallery;