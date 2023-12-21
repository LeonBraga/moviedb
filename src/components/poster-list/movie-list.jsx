import React, { useState, useEffect, useRef } from "react";
import MoviePoster from "./movie-card";
import styles from "./movie-list.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const MovieList = ({ moviesList, backdrop, inline, note, sinopse }) => {
  let scrollInterval;
  const [movies, setMovies] = useState([moviesList]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const movieListRef = useRef(null);

  const handleScroll = (direction) => {
    const moviePosterWidth = getMoviePosterWidth();
    if (direction === "right") {
      scrollInterval = setInterval(() => {
        movieListRef.current.scrollLeft += moviePosterWidth;
      }, 500);
    } else {
      scrollInterval = setInterval(() => {
        movieListRef.current.scrollLeft -= moviePosterWidth;
      }, 500);
    }
  };

  const handleStopScroll = () => {
    clearInterval(scrollInterval);
    setShowLeftArrow(movieListRef.current.scrollLeft > 0);
  };

  const getMoviePosterWidth = () => {
    if (movieListRef.current) {
      const moviePosters = movieListRef.current.getElementsByTagName("div");
      if (moviePosters.length > 0) {
        return moviePosters[0].offsetWidth;
      }
    }
    return null;
  };

  useEffect(() => {
    getMoviePosterWidth();
  }, [movies]);

  useEffect(() => {
    setMovies(moviesList);
  }, [moviesList]);

  return (
    <div
      className={`${styles.movieList} ${inline ? styles.inline : ""}`}
      id="movieList"
      ref={movieListRef}
    >
      {inline && !isLoading && showLeftArrow && (
        <span
          className={`${styles.scrollArrow} ${styles.leftArrow}`}
          onMouseEnter={() => handleScroll("left")}
          onMouseLeave={() => handleStopScroll()}
        >
          <ChevronLeftIcon fontSize="large" />
        </span>
      )}

      {movies &&
        movies.map((movie, index) => (
          <MoviePoster
            movie={movie}
            key={index}
            backdrop={backdrop}
            note={note}
            sinopse={sinopse}
          />
        ))}
      {isLoading && <p>Loading...</p>}

      {inline && !isLoading && (
        <span
          className={`${styles.scrollArrow} ${styles.rightArrow}`}
          onMouseEnter={() => handleScroll("right")}
          onMouseLeave={() => handleStopScroll()}
        >
          <ChevronRightIcon fontSize="large" />
        </span>
      )}
    </div>
  );
};

export default MovieList;
