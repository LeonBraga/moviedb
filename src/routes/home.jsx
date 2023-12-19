import { useEffect, useState } from "react";
import MovieList from "../components/poster-list/movie-list";
import SearchInput from "../components/search/search";
import styles from "./home.module.css";

export default function Profile() {
  const [searchMovies, setSearchedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTczMTJlOTEyMmFiMGY4OTMwYWM0YjRhNGJlMTFhMiIsInN1YiI6IjVhZmY0OWYzOTI1MTQxMzEyYTAwMDgwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z5utamcPdK_tUOjC2nGGQzm7JlDXNjH_vgolD7c4ioo",
    },
  };

  useEffect(() => {
    getBestratedMovies();
    getPopularMovies();
  });

  const getBestratedMovies = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setPopularMovies(data.results);
      })
      .catch((err) => console.error(err));
  };

  const getPopularMovies = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setTrendingMovies(data.results);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <SearchInput setFilteredMovies={setSearchedMovies} />
      {searchMovies && searchMovies.length && (
        <div className={styles.gallery}>
          <MovieList moviesList={searchMovies} />
        </div>
      )}

      <div className={styles.gallery}>
        <div className={styles.title}>Tendencias do momento</div>
        <MovieList title="Top Rated" moviesList={trendingMovies} />
      </div>

      <div className={styles.gallery}>
        <div className={styles.title}>Os melhores </div>
        <MovieList title="Top Rated" moviesList={popularMovies} />
      </div>
    </>
  );
}
