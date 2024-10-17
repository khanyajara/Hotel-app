import React, { useState } from 'react';
import Css from "./facilities.css"
import logo from "../h-removebg-preview.png"
import { useNavigate } from "react-router";
import img1 from "../hotelfun1.png";
import img2 from "../hotelfun2.png";
import img3 from "../hotelfun3.png";
import img4 from "../hotelfun4.png";
import img5 from "../hotelfun5.png";
import img6 from "../hotelfun6.png";
import img7 from "../hotelfun7.png";
import img8 from "../hotelfun8.png";
import img9 from "../fun 1.jpg";
import img10 from "../fun 2.jpg";
import img11 from "../fun 3.jpg";
import img12 from "../fun 4.jpg";
import img13 from "../fun 5.jpg";

const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];
const thumbnails = slides.slice(0, 6);

const Facilities = () => {
  const [slideIndex, setSlideIndex] = useState(0);


  const navigate= useNavigate();



  const home =()=>{
      navigate("/Home")

  }
  const room =()=>{
      navigate("/Rooms")
  }
  const Booking=()=>{
      navigate("/Booking")
  }

  const viewroom=()=>{
      navigate("/view")
  }
  const Gallery=()=>{
      navigate("/gallery")
  }
  const Facilities=()=>{
      navigate("/facilities")
}


  const showSlides = (n) => {
    if (n >= slides.length) return 0;
    if (n < 0) return slides.length - 1;
    return n;
  }

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => showSlides(prevIndex + n));
  }

  const currentSlide = (n) => {
    setSlideIndex(showSlides(n));
  }

  return (
    <div className='facilities-body'>
      <div className="topNavBar">

<h2><a onClick={home} className="NavBar">Home</a></h2>
<h2><a onClick={room} className="NavBar">Rooms</a></h2>
<h2><a onClick={Booking} className="NavBar">Booking</a></h2>
<img src={logo}  className="logo1"/>
<h2><a href="" className="NavBar">Facilities</a></h2>
<h2><a href="" className="NavBar">Gallery</a></h2>
<h2><a href="" className="NavBar">How To Get There</a></h2>
</div>
      <div className="App">
        <h2 style={{ textAlign: 'center' }}>Our Guest's </h2>
        <div className="container">
          <div>
            <div className="mySlides" style={{ display: 'block' }}>
              <div className="numbertext">{slideIndex + 1} / {slides.length}</div>
              <img src={slides[slideIndex]} className="slides-imgs" alt={`Slide ${slideIndex + 1}`} />
            </div>
           
            <div className="caption-container">
              <p>{`Slide ${slideIndex + 1} of ${slides.length}`}</p>
            </div>
             <div  className='NEXT-PREV'>
              <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
              <a className="next" onClick={() => plusSlides(1)}>❯</a>
            </div>
            <div className="row">
              {thumbnails.map((thumb, index) => (
                <div key={index} className="column">
                  <img
                    className={`demo cursor ${slideIndex === index ? 'active' : ''}`}
                    src={thumb}
                    style={{ width: '100%' }}
                    onClick={() => currentSlide(index)}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
