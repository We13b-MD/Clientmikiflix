import { Link, NavLink } from "react-router-dom";
import "../Cssfiles/Navbar.css";
import { useUser } from "../CreateContext/userContext";
import React, { useState } from "react";
import {  FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const { username, setUser, logout, isAuthenticated } = useUser();
  const storedUsername = localStorage.getItem("username");
  function handleClick() {
    setClicked(!clicked);
  }

  function handleLogout() {
    setUser(null);
    logout();
  }

  return (
    <>
      <main>
        <div className="logo">
          <nav className="navbar">
            <div id="links" className="links">
              <div className="menu-icon" onClick={handleClick}>
                {clicked ? <FaTimes /> : <FaBars />}
              </div>

              <ul
                className={clicked ? "nav-menu active" : "nav-menu"}
                id={isAuthenticated ? "notauthenticated" : "authenticated"}
              >
                <li className="nav-item">
                  <NavLink id="navlinkH" to="/" className="">
                    HOME
                  </NavLink>
                </li>
                <Link
                  id="navlinkLO"
                  onClick={handleLogout}
                  to=""
                  className={isAuthenticated ? "" : "hidden"}
                >
                  Logout
                </Link>

                <li className="nav-item">
                  <NavLink
                    id="navlinkL"
                    className={!isAuthenticated ? "" : "hidden"}
                    to="/login"
                  >
                    LOGIN
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    id="navlinkM"
                    className={isAuthenticated ? "" : "hidden"}
                    to="/movies"
                  >
                    MOVIES
                  </NavLink>

                  {isAuthenticated ? (
                    <p className="welcome">
                      {" "}
                      Welcome {username || storedUsername}
                    </p>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </main>
    </>
  );
}

export default Navbar;
