import { useEffect, useState } from "react";
import MovieList from "../../components/movie-list/movie-list";
import SearchInput from "../../components/search/search";
import styles from "./home.module.css";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTczMTJlOTEyMmFiMGY4OTMwYWM0YjRhNGJlMTFhMiIsInN1YiI6IjVhZmY0OWYzOTI1MTQxMzEyYTAwMDgwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z5utamcPdK_tUOjC2nGGQzm7JlDXNjH_vgolD7c4ioo",
  },
};

export default function Home() {
  const [searchMovies, setSearchedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getBestRatedMovies();
    getPopularMovies();
  }, []);

  const getBestRatedMovies = async () => {
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
      <span data-testid="search">
        <SearchInput setFilteredMovies={setSearchedMovies} />
      </span>
      {searchMovies && searchMovies.length > 0 && (
        <div className={styles.gallery} data-testid="search-results">
          <MovieList moviesList={searchMovies} backdrop="true" inline="true" />
        </div>
      )}

      <div className={styles.gallery}>
        <div className={styles.title}>Tendencias do momento</div>
        <MovieList
          title="Top Rated"
          moviesList={trendingMovies}
          backdrop="false"
          inline="true"
          sinopse="true"
        />
      </div>

      <div className={styles.gallery}>
        <div className={styles.title}>Os melhores </div>
        <MovieList
          title="Top Rated"
          moviesList={popularMovies}
          inline="true"
          note="true"
        />
      </div>
    </>
  );
}
