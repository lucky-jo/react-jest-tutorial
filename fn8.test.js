const mockFn = jest.fn();

mockFn.mockResolvedValue({ name: "Mike" });

test("리턴된 이름은 Mike 이다.", async () => {
  const response = await mockFn();
  expect(response.name).toBe("Mike");
});
