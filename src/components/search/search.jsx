import { useState, useEffect } from "react";
import styles from "./search.module.css";

const SearchInput = ({ setFilteredMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTczMTJlOTEyMmFiMGY4OTMwYWM0YjRhNGJlMTFhMiIsInN1YiI6IjVhZmY0OWYzOTI1MTQxMzEyYTAwMDgwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z5utamcPdK_tUOjC2nGGQzm7JlDXNjH_vgolD7c4ioo",
    },
  };

  useEffect(() => {
    const filterMovies = async () => {
      if (searchTerm) {
        fetch(
          `https://api.themoviedb.org/3/search/multi?query=${searchTerm}&include_adult=false&language=pt-BR&page=1`,
          options
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data.results);
            setFilteredMovies(data.results);
          })
          .catch((err) => console.error(err));
      } else {
        setFilteredMovies([]);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      filterMovies();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, setFilteredMovies]);

  return (
    <input
      type="text"
      placeholder="Search movies..."
      className={styles.searchInput}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchInput;
