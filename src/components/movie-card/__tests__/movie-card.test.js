import React from "react";
import { render, fireEvent, screen, within } from "@testing-library/react";
import MovieCard from "../movie-card";

const defaultImagePath = "https://image.tmdb.org/t/p/w300";
const backupImagePath = "default_poster.jpg";

describe("MoviePoster component", () => {
  const movie = {
    title: "Test Movie",
    poster_path: "/test_poster.jpg",
    backdrop_path: "/test_backdrop.jpg",
    vote_average: 7.5,
    overview: "Test movie description",
  };

  it("renders the movie title", () => {
    render(<MovieCard movie={movie} />);

    const title = screen.getByText(movie.title);

    expect(title).toBeInTheDocument();
  });

  it("renders the movie title text to be the same as the movie title mocked", () => {
    render(<MovieCard movie={movie} />);

    const poster = screen.getByText(movie.title);

    expect(poster).toBeInTheDocument();
    expect(poster.textContent).toEqual(movie.title);
  });

  it("should render the movie poster image when a valid poster path is provided with the default image path", () => {
    render(<MovieCard movie={movie} />);

    const imgElementSrc = screen.getByRole("img").getAttribute("src");

    expect(imgElementSrc).toEqual(`${defaultImagePath}${movie.poster_path}`);
  });

  it("renders the default movie poster image if no poster path is provided", () => {
    const mockedDataWithoutPoster = { ...movie, poster_path: null };
    render(<MovieCard movie={mockedDataWithoutPoster} />);

    const imgElementSrc = screen.getByRole("img").getAttribute("src");

    expect(imgElementSrc).toContain(backupImagePath);
  });

});
