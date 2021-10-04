import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Button, { replaceCamelWithSpaces } from "../Button";
import App from "../../../App";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

const MockApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

// test("button has correct initial color", () => {
//   render(<Button />);

//   // find an element with a role of button and text of 'Change to blue'
//   const colorButton = screen.getByRole("button", { name: "Change to blue" });

//   // expect the background:  color to be red;
//   expect(colorButton).toHaveStyle({ background: "red" });
// });
// test("button has correct initial text", () => {
//   render(<Button />);

//   const colorButton = screen.getByRole("button", { name: "Change to blue" });

//   // clicked button
//   fireEvent.click(colorButton);

//   // expect the background: color to be blue;
//   expect(colorButton).toHaveStyle({ background: "blue" });

//   // expect the button text to be 'Change to blue';
//   expect(colorButton.textContent).toBe("Change to red");
// });
// test("initial conditions", () => {
//   render(<App />);
//   // check that the button starts out enabled
//   const colorButton = screen.getByRole("button", { name: "Change to blue" });
//   expect(colorButton).toBeEnabled();

//   // check that the checkbox starts out unchecked
//   const checkbox = screen.getByRole("checkbox");
//   expect(checkbox).not.toBeChecked();
// });

// test("Checkbox disables button on first click and enabled on second click", () => {
//   render(<App />);
//   const colorButton = screen.getByRole("button", { name: "Change to blue" });
//   const checkbox = screen.getByRole("checkbox");

//   fireEvent.click(checkbox);
//   expect(colorButton).not.toBeEnabled();
//   fireEvent.click(checkbox);
//   expect(colorButton).toBeEnabled();
// });

test("Checkbox disables button on first click and enabled on second click", () => {
  render(<MockApp />);
  const checkbox = screen.getByRole("checkbox");
  const colorButton = screen.getByRole("button", { name: "Change to gray" });
  expect(colorButton).not.toBeEnabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();

  fireEvent.click(colorButton);
  expect(colorButton.textContent).toBe("Change to red");
  fireEvent.click(colorButton);
  expect(colorButton.textContent).toBe("Change to blue");
});

// Medium Violet Red
// Midnight Blue

describe("spaces before camel-case capital letters", () => {
  it("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  it("works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  it("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
