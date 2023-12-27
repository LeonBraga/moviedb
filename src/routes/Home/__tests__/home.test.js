import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../home";
import React from "react";
import SearchInput from "../../../components/search/search";

jest.mock("../../../components/movie-list/movie-list", () => {
  return function MockMovieList() {
    return <div data-testid="mock-movie-list">Mock Movie List</div>;
  };
});

const mockResponse = [
  {
    title: "Movie 1",
    vote_average: 8.5,
    poster_path: "movie_poste_1.jpg",
    backdrop_path: "movie_backdrop_1.jpg",
    overview: "Sinopse of the movie 1",
  },
  {
    title: "Movie 2",
    vote_average: 5.9,
    poster_path: "movie_poste_2.jpg",
    backdrop_path: "movie_backdrop_2.jpg",
    overview: "Sinopse of the movie 2",
  },
  {
    title: "Movie 3",
    vote_average: 3.3,
    poster_path: "movie_poste_3.jpg",
    backdrop_path: "movie_backdrop_3.jpg",
    overview: "Sinopse of the movie 3",
  },
];

describe("Home Component", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("renders search input", () => {
    render(<Home />);
    const searchContainer = screen.getByTestId("search");
    expect(searchContainer).toBeInTheDocument();
  });

  test("updates searchMovies state when search input is changed", () => {
    render(<Home />);
    const searchInput = screen.getByRole("textbox");
    act(() => {
      userEvent.type(searchInput, "Avengers");
    });
    expect(searchInput.value).toBe("Avengers");
  });
});
