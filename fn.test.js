const fn = require("./fn");

test("1 은 1이다.", () => {
  expect(1).toBe(1);
});

test("2 더하기 3은 5이다.", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("3 더하기 3은 5이 아니다.", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

test("이름과 나이를 전달받아서 객체를 반환한다.", () => {
  expect(fn.makeUser("Mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
  });
});

test("null 은 null 입니다.", () => {
  expect(null).toBeNull();
});

test("0 은 false 입니다.", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

test("1 은 true 입니다.", () => {
  expect(fn.add(1, 0)).toBeTruthy();
});

test("ID는 10자 이하여야 합니다.", () => {
  const id = "last29192919239";
  expect(id.length).not.toBeLessThanOrEqual(10);
});
test("ID는 10자 이하여야 합니다.", () => {
  const id = "last29192";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("0.1 더하기 0.2 는 0.3 입니다.", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});
test("Hollow Wolrd 에 h가 존재 하는가?", () => {
  expect("Hello World").toMatch(/h/i);
});
test("유저 리스트에 Mike 가 있는가?", () => {
  const user = "Mike";
  const userList = ["Tom", "Jane", "Mike"];
  expect(userList).toContain(user);
});

test("에러가 발생했는가?", () => {
  expect(() => fn.throwErr()).toThrow("error");
});
