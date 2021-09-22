import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter", () => {
  describe("function", () => {
    test("shoud render the corrent amount of incomplete tasks", async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={5} />);
      const paragraphElement = screen.getByText(/5 tasks left/);
      expect(paragraphElement).toBeInTheDocument();
    });
  });
  describe("TodoFooter", () => {
    test('shoud render "task" when the number of incomplete tasks is one', async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/);
      expect(paragraphElement).toBeInTheDocument();
    });
    test('shoud render "task" when the number of incomplete tasks is one', async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/);
      expect(paragraphElement).toBeTruthy();
    });
    test('shoud render "task" when the number of incomplete tasks is one', async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/);
      expect(paragraphElement).toBeVisible();
    });
    test('shoud render "task" when the number of incomplete tasks is one', async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/);
      expect(paragraphElement).toContainHTML("p");
    });
    test('shoud render "task" when the number of incomplete tasks is one', async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/);
      expect(paragraphElement).toHaveTextContent("1 task left");
    });
    test('shoud render "task" when the number of incomplete tasks is one', async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByTestId("para");
      expect(paragraphElement.textContent).toBe("1 task left");
    });
  });
});
