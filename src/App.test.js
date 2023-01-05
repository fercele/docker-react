import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("This one is going to pass again", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(true).toBe(false);
});
