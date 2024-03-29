import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Slider from "./Slider";
import slides from "../slides.json";
import "../Cssfiles/home.css";
import macbook from "../pictures/watchmacbook.jpg";
import { useUser } from "../CreateContext/userContext";
import { FaSignOutAlt } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
function Home() {
  const navigate = useNavigate();
  const { username, setUser, logout, isAuthenticated } = useUser();

  function handleLogout() {
    setUser(null);
    logout();
    navigate("/");
  }
  const storedUsername = localStorage.getItem("username");
  return (
    <>
      <div>
        <Navbar />

        <div className="HomeContainer">
          <div className={isAuthenticated ? "static2-text" : "static-text"}>
            {" "}
            Mikel-Flix:
          </div>
          <ul className="dynamic-text">
            <li>SIGN UP AND WATCH...</li>
            <li>EXPERIENCE ENJOY...</li>
            <li>YOUR MOVIE AWAITS...</li>
          </ul>
        </div>

        {<Slider slides={slides} />}

        <div className="line"></div>

        <div className="headline1">
          <img
            className="filmimage"
            src="https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707895246/fjzsoyxryayqusauvmss.jpg"
            alt="watch"
          />
          <div className="pheadline">
            <h1>Relax and Enjoy </h1>
            <br />
            <h2>At your own space </h2>
            <br />
            <h3>At your own time </h3>
          </div>
        </div>
        <div className="line2"></div>
        <div className="macbookConntainer">
          <img className="macbook" src={macbook} alt="macbook" />
          <div className="loader"></div>
        </div>
        <div className="pheadline2">
          <h1>Watch and Download </h1>
          <br />
          <h2>Save your favourite movies </h2>
          <br />
          <h3> Lets get started </h3>
        </div>
      </div>
    </>
  );
}

export default Home;
