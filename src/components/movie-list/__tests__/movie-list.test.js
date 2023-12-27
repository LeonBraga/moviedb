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

  it("scrolls right on right arrow hover", () => {
    render(<MovieList moviesList={moviesList} inline={true} />);

    const rightArrow = screen.getByTestId("rightArrow");
    fireEvent.mouseEnter(rightArrow);

    const movieList = screen.getByTestId("movieList");
    const styles = window.getComputedStyle(movieList);

    expect(styles.cursor).toBe("pointer");
  });
});
