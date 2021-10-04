import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

const user = {
  name: "Tom",
  age: 30,
};
const user2 = {
  // name: "Mike",
  age: 20,
};

test("Mike 라는 글자가 포함되는가?", () => {
  // The render method creates a virtual dom for whatever JSX you give it as the argument here
  render(<Hello user={user} />);
  // screen - Access virtual DOM via screen global
  const helloEl = screen.getByText(/Tom/);
  // this matcher comes from Jest-DOM
  expect(helloEl).toBeInTheDocument();
});

test("snapshot : name 있음", () => {
  const el = render(<Hello user={user} />);
  expect(el).toMatchSnapshot();
});
test("snapshot : name 없음", () => {
  const el = render(<Hello />);
  expect(el).toMatchSnapshot();
});
