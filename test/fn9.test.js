const fn = require("./fn");

jest.mock("./fn");

fn.createUser.mockReturnValue({ name: "Mike" });

test("유저를 만듭니다.", () => {
  const user = fn.createUser("Mike");
  expect(user.name).toBe("Mike");
});
