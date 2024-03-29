import React, { useEffect, useState } from "react";
import { FaBackward, FaTrash, FaTimes, FaTrashAlt } from "react-icons/fa";
import movieObject from "./movielist";
import { Link } from "react-router-dom";

import "../Cssfiles/movie.css";
import { useSharecontext } from "../CreateContext/SharedContext";
function Bookmarks(props) {
  const [bookmarkItem, setbookmarkItem] = useState(movieObject);
  const { bookmarkedmovies, removeBookmark, clearBookmarks } =
    useSharecontext();
  const [bookmarks, setbookmarks] = useState(0);

  function handleRemoveBookmark(movieSlug) {
    removeBookmark(movieSlug);
  }

  function ClearAllBookmarks() {
    clearBookmarks();
  }

  return (
    <div className = "bookmarkContainer">
      {bookmarkedmovies.length > 0 && (
        <>
        <div className = "NavBookmark">

        <Link className=" linkGoback" to="/movies">
            <FaBackward className="  return " title="Go back" />
          </Link>

          <FaTimes
            className="  clearAll "
            onClick={ClearAllBookmarks}
            title="Clear All"
          />


        </div>

       
        
         
        </>
      )}
      {bookmarkedmovies.map((movie) => {
        return (
          <div className="grid-container">
            <div key={movie.id} className="movies">
              <Link
                className="movieLink"
                to={`/movies/${movie.slug}?from=bookmark`}
              >
                <div className="grid-item">
                  <img src={movie.thumbnail} alt={movie.title} />
                </div>
                {movie.title}
              </Link>
              <FaTrash
                className="trash"
                onClick={() => handleRemoveBookmark(movie.slug)}
                alt="Delete"
                title="Delete Bookmark"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Bookmarks;
