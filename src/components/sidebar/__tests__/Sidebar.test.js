import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "../Sidebar";
import { BrowserRouter, Link } from "react-router-dom";

const MockSidebar = () => {
  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
};

describe("Sidebar component", () => {
  test("renders the sidebar with initial state", () => {
    render(<MockSidebar />);

    const sidebar = screen.getByTestId("sidebar");

    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveClass("closed");
  });

  test("opens the sidebar on mouse enter", () => {
    render(<MockSidebar />);

    const sidebar = screen.getByTestId("sidebar");
    fireEvent.mouseEnter(sidebar);

    expect(sidebar).not.toHaveClass("closed");
  });

  test("closes the sidebar on mouse leave", () => {
    render(<MockSidebar />);

    fireEvent.mouseEnter(screen.getByTestId("sidebar"));

    fireEvent.mouseLeave(screen.getByTestId("sidebar"));

    expect(screen.getByTestId("sidebar")).toHaveClass("closed");
  });
});
