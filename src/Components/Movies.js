import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShare, FaBookmark, FaSearch } from "react-icons/fa";
import "../Cssfiles/movie.css";
import { useSharecontext } from "../CreateContext/SharedContext";
import { jwtDecode } from "jwt-decode";

import movieObject from "./movielist";
function Movies({ movie }) {
  const { addBookmark } = useSharecontext();
  const navigate = useNavigate();
 
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(true);
   const [bookmarks, setbookmarks] = useState(0);
  const [userId, setUserId] = useState("659b1cb5f76943aa56002185");
 

  const [bookmarkItem, setbookmarkItem] = useState(
    Array.isArray(movieObject) ? movieObject : []
  );
 

  // Search functionality
  const handleSearch = async (e) => {
    try {
      const response = await fetch(
        `https://servermikiflix-7.onrender.com/api/movies/search?q=${searchQuery}`
      );
      if(!response.ok){
        throw new Error("Failed to retrieve search results")
      }
      const searchData = await response.json();
      setSearchResults(searchData);
      if (searchData.length > 0) {
        const firstMovie = response.data[0];
        navigate(`/movies/${firstMovie.slug}`);
      } else {
        alert("No results found");
      }
    } catch (err) {
      console.error("Error searching for movies:", err);
    }
  };

  function handleKeypress(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  useEffect(() => {
    fetch("https://servermikiflix-7.onrender.com/api/movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data fetching failed");
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data);
        setIsloading(false);
      });
  }, []);

  useEffect(() => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1OWIxY2I1Zjc2OTQzYWE1NjAwMjE4NSIsImV4cGlyZSI6MTcwNTM1MTkxMjcwMH0.-mtHcd4hQAXZk94OuD38nyyukwFlAY4XMeVBayVTrG4";

    const decodedToken = jwtDecode(token);
    console.log("Decoded token:", decodedToken);
    const expirationTimestamp = 1705351912700;
    const expirationDate = new Date(expirationTimestamp);
    console.log(expirationDate);
    if (decodedToken && decodedToken.userId) {
      setUserId(decodedToken.UserId);
    }
  }, []);

  const handleBookmarkClick = async (movieslug, title) => {
    console.log(movieslug);
    const newBookmarkDetails = bookmarkItem.find(
      (movie) => movie.slug === movieslug
    );
    console.log(newBookmarkDetails);
    if (newBookmarkDetails) {
      console.log(newBookmarkDetails); // Log the details to the console
      addBookmark(newBookmarkDetails);
      setbookmarks((prevBookmarks) => prevBookmarks + 1);
      const titledetails = bookmarkItem.find((Movie) => Movie.title === title);
      console.log(titledetails);
      alert(`${title} added to bookmarks`);
    } else {
      console.error(`Movie with ID ${movieslug} not found`);
    }
  };

  
  return (
    <>
      {isloading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="nav-input-search">
            <div className="inputContainer">
              <input
                value={searchQuery}
                type="text"
                placeholder="Search movie by title "
                className="input"
                onKeyDown={handleKeypress}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch onClick={handleSearch} className="search" />
            </div>

            <div className="goHome">
              <Link to="/" className="linkHome">
                {" "}
                Home
              </Link>
            </div>
          </div>
          <div className="Bookmarks">
            <Link
              className="bookmarks"
              to="/bookmark"
              title="Click to see Bookmarks"
            >
              Bookmarks
            </Link>
          </div>
          <div className="grid-container">
            {searchResults.length > 0
              ? searchResults.map((movie) => (
                  <div key={movie._id} className="movie">
                    <Link className="movieLink" to={`/movies/${movie.slug}`}>
                      <div className="grid-item">
                        <img src={movie.thumbnail} alt={movie.title} />
                        <div className="Image-overlay">
                          <div className="overlayIcons">
                            <FaShare className="shareIcon" alt="Share" />
                          </div>
                        </div>
                      </div>
                      {movie.title}
                    </Link>
                  </div>
                ))
              : movies.map((movie) => (
                  <div key={movie._id} className="movie">
                    <Link className="movieLink" to={`/movies/${movie.slug}`}>
                      <div className="grid-item">
                        <img src={movie.thumbnail} alt={movie.title} />
                        <div className="Image-overlay">
                          <div className="overlayIcons"></div>
                        </div>
                      </div>
                      <div className="movietitle">{movie.title}</div>
                    </Link>
                    <div>
                      <FaBookmark
                        className="bookmarkIcon"
                        title="Bookmark"
                        alt="Bookmark"
                        onClick={(e) =>
                          handleBookmarkClick(movie.slug, movie.title)
                        }
                      />
                    </div>
                  </div>
                ))}
          </div>
        </>
      )}
    </>
  );
}

export default Movies;
