import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";


jest.mock("react-router-dom", () => ({
    Link: jest.fn().mockImplementation(({ children }) => children),
  }));

describe("Sidebar component", () => {
  test("renders the sidebar with initial state", () => {
    render(<Sidebar />);
    
    expect(screen.getByTestId("sidebar")).toHaveClass("closed");
    
    expect(screen.getByTestId("home-link")).toBeInTheDocument();
    expect(screen.getByTestId("search-link")).toBeInTheDocument();
    expect(screen.getByTestId("mylist-link")).toBeInTheDocument();
    expect(screen.getByTestId("profile-link")).toBeInTheDocument();
  });

  test("opens the sidebar on mouse enter", () => {
    render(<Sidebar />);
    
    fireEvent.mouseEnter(screen.getByTestId("sidebar"));
    
    expect(screen.getByTestId("sidebar")).not.toHaveClass("closed");
  });

  test("closes the sidebar on mouse leave", () => {
    render(<Sidebar />);
    
    fireEvent.mouseEnter(screen.getByTestId("sidebar"));
    
    fireEvent.mouseLeave(screen.getByTestId("sidebar"));
    
    expect(screen.getByTestId("sidebar")).toHaveClass("closed");
  });
});