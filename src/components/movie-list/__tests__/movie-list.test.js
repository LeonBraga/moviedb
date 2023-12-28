import { render, screen, fireEvent } from "@testing-library/react";
import MovieList from "../movie-list";

describe("MovieList", () => {
  const moviesList = [
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
    { id: 3, title: "Movie 3" },
  ];

  it("renders movie cards correctly", () => {
    render(<MovieList moviesList={moviesList} />);

    moviesList.forEach((movie) => {
      expect(screen.getByText(movie.title)).toBeInTheDocument();
    });
  });

});
