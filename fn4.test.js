// mock function

const mockFn = jest.fn();

mockFn();
mockFn(1);

test("dd", () => {
  console.log(mockFn.mock.calls);
  expect(1).toBe(1);
});
