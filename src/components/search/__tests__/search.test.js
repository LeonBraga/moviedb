import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchInput from "../search";

describe("SearchInput component", () => {
  test("renders input field", () => {
    render(<SearchInput setFilteredMovies={() => {}} />);
    const inputElement = screen.getByPlaceholderText("Search ...");
    expect(inputElement).toBeInTheDocument();
  });

  test("should show update input value when user types", async () => {
    const setFilteredMovies = jest.fn();
    render(<SearchInput setFilteredMovies={setFilteredMovies} />);
    const inputElement = screen.getByRole("textbox");

    userEvent.type(inputElement, "test");

    expect(inputElement).toHaveValue("test");
  });

  test("should not render search result element when searchTerm is empty", async () => {
    const setFilteredMovies = jest.fn();
    render(<SearchInput setFilteredMovies={setFilteredMovies} />);
    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "" } });
    await new Promise((resolve) => setTimeout(resolve, 300));

    const searchResultElement = screen.queryByTestId("search-results");
    expect(searchResultElement).not.toBeInTheDocument();
  });

});
