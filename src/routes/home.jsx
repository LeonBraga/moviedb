import { useState } from "react";
import MovieList from "../components/poster-list/movie-list";
import SearchInput from "../components/search/search";

export default function Profile() {

  const [filteredMovies, setFilteredMovies] = useState([]);


  return (
    <>
      <SearchInput setFilteredMovies={setFilteredMovies}/>
      <MovieList moviesList={filteredMovies}/>
    </>
  );
}
