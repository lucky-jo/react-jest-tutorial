import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

const user = {
  name: "Mike",
  age: 30,
};

test("Mike 라는 글자가 포함되는가?", () => {
  render(<Hello user={user} />);
  const helloEl = screen.getByText(/Mike/);
  expect(helloEl).toBeInTheDocument();
});
