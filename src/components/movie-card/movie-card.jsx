import React from "react";
import styles from "./movie-card.module.css";
import DefaultImage from "./img/default_poster.jpg";

const MovieCard = ({ movie, backdrop, note, sinopse }) => {
  const handleSelect = () => {
    console.log("Selected");
  };
  const posterPath = movie.poster_path;
  const backdropPath = movie.backdrop_path;
  const vote = Math.round(movie.vote_average * 10) / 10;
  const imagePath = `https://image.tmdb.org/t/p/w300${
    backdrop ? backdropPath : posterPath
  }`;

  return (
    <>
      <div className={styles.moviePoster} onClick={handleSelect} data-testid="movie-poster">
        {posterPath ? (
          <img
            src={imagePath || DefaultImage}
            className={styles.image}
            alt="Movie Poster"
          />
        ) : (
          <img
            src={DefaultImage}
            className={styles.image}
            alt="Default Movie Poster"
          />
        )}
        <div className={styles.details}>
          <h3 className={styles.title}>{movie.title || movie.name}</h3>

          {note && (
            <div
              className={styles.circle}
              style={{
                backgroundImage: `conic-gradient(#ffa12c ${movie.vote_average*10}%, #fd3a2d 0)`,
              }}
            >
              <div className={styles.inner}>{vote}</div>
            </div>
          )}

          {sinopse && (
            <div className={styles.description}>{movie.overview}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
