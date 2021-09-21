const mockFn = jest.fn();

mockFn
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValue(true);

const results = [1, 2, 3, 4, 5].filter((num) => mockFn(num));

test("홀수는 1,3,5", () => {
  console.log("results", results);
  expect(results).toStrictEqual([1, 3, 5]);
});
