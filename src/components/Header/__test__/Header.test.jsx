import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("shoud render same text passed into title props", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/My Header/);
  expect(headingElement).toBeInTheDocument();
});

test("shoud render same text passed into title props", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", {
    name: "My Header",
  });
  expect(headingElement).toBeInTheDocument();
});

test.skip("shoud render same text passed into title props", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

// find by
test("shoud render same text passed into title props", async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByText(/My Header/);
  expect(headingElement).toBeInTheDocument();
});

// Query by

test("shoud render same text passed into title props", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.queryByText(/dogs/);
  expect(headingElement).not.toBeInTheDocument();
});

test("shoud render same text passed into title props", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.queryByText(/dogs/);
  expect(headingElement).not.toBeInTheDocument();
});

test.skip("shoud render same text passed into title props", async () => {
  render(<Header title="My Header" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});
