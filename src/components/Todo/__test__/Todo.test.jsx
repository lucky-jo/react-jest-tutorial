import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo></Todo>
    </BrowserRouter>
  );
};

const tasksArr = ["Go Grocery Shopping", "Pet my Cat", "Wash my Hands"];

const addTask = (tasks) => {
  const inputelement = screen.getByPlaceholderText(/Add a new task here.../);
  const buttonElement = screen.getByRole("button", { name: /Add/ });
  tasks.forEach((task) => {
    fireEvent.change(inputelement, {
      target: {
        value: task,
      },
    });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("should erender input element", async () => {
    render(<MockTodo />);
    const inputelement = screen.getByPlaceholderText(/Add a new task here.../);
    const buttonElement = screen.getByRole("button", { name: /Add/ });
    fireEvent.change(inputelement, {
      target: {
        value: "Go Grocery Shopping",
      },
    });
    fireEvent.click(buttonElement);

    const divElement = screen.getByText(/Go Grocery Shopping/);
    expect(divElement).toBeInTheDocument();
  });

  it("should render multiple items", async () => {
    render(<MockTodo />);
    addTask(tasksArr);
    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(3);
  });

  it("tasks should not have completed class when initally rendered", async () => {
    render(<MockTodo />);
    addTask(tasksArr);
    const divElement = screen.getByText(/Go Grocery Shopping/);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("tasks should not have completed class when initally rendered", async () => {
    render(<MockTodo />);
    addTask(tasksArr);
    const divElement = screen.getByText(/Go Grocery Shopping/);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
