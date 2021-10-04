import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

test("button has correct initial color", () => {
  render(<Button />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background:  color to be red;
  expect(colorButton).toHaveStyle({ background: "red" });
});
test("button has correct initial text", () => {
  render(<Button />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // clicked button
  fireEvent.click(colorButton);

  // expect the background: color to be blue;
  expect(colorButton).toHaveStyle({ background: "blue" });

  // expect the button text to be 'Change to blue';
  expect(colorButton.textContent).toBe("Change to blue");
});
test("button turns blue when clicked", () => {});
