const mockFn = jest.fn();

mockFn(10, 20);
mockFn();
mockFn(30, 40);

test("한번 이상 호출시 정상 입니다.", () => {
  expect(mockFn).toBeCalled();
});
test("정확히 세번 호출 되었습니다.", () => {
  expect(mockFn).toBeCalledTimes(3);
});
test("10 과 20 을 전달받은 함수가 있는가?", () => {
  expect(mockFn).toBeCalledWith(10, 20);
});
test("마지막 함수는 30과 40을 전달 받았는가?", () => {
  expect(mockFn).lastCalledWith(30, 40);
});
