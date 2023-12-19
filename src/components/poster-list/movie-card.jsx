import React from "react";
import styles from "./movie-card.module.css";
import DefaultImage from "./img/default_poster.jpg";
import { Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PollIcon from "@mui/icons-material/Poll";
import PersonIcon from "@mui/icons-material/Person";

const MoviePoster = ({ movie }) => {
  const handleSelect = () => {
    console.log("Selected");
  };
  const posterPath = movie.poster_path;
  const backdropPath = movie.backdrop_path;
  const vote = Math.round(movie.vote_average * 10) / 10;

  return (
    <>
      <div className={`${styles.moviePoster}`} onClick={handleSelect}>
        {posterPath ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${posterPath}` || DefaultImage}
            alt="Movie Poster"
          />
        ) : (
          <img src={DefaultImage} alt="Default Movie Poster" />
        )}
        <span className={`${styles.overlay}`}></span>
        <div className="details">
          <h3 className={styles.title}>{movie.title || movie.name}</h3>
          <div className={styles.description}>
            Média {vote} em {movie.vote_count} votos
          </div>
          <div className={styles.description}>{movie.overview}</div>
        </div>
      </div>
    </>
  );
};

export default MoviePoster;
