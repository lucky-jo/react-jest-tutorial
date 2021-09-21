const fn = require("./fn");

let num = 10;

beforeEach(() => {
  num = 0;
});

let user;

beforeAll(async () => {
  user = await fn.connectUserDb();
});
afterAll(async () => {
  return fn.disconnectDb();
});

test("0 더하기 1 은 1 입니다.", () => {
  num = fn.add(num, 1);
  expect(num).toBe(1);
});
test("0 더하기 2 은 2 입니다.", () => {
  num = fn.add(num, 2);
  expect(num).toBe(2);
});
test("0 더하기 3 은 3 입니다.", () => {
  num = fn.add(num, 3);
  expect(num).toBe(3);
});
test("0 더하기 4 은 4 입니다.", () => {
  num = fn.add(num, 4);
  expect(num).toBe(4);
});

test("이름은 Mike 입니다", () => {
  expect(user.name).toBe("Mike");
});
test("나이는 30 입니다", () => {
  expect(user.age).toBe(30);
});
test("성별은 남성 입니다", () => {
  expect(user.gender).toBe("male");
});
