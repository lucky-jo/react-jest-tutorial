const fn = require("./fn");

beforeAll(() => {
  console.log("밖 beforeAll()");
});
beforeEach(() => {
  console.log("밖 beforeEach()");
});
afterEach(() => {
  console.log("밖 afterEach()");
});
afterAll(() => {
  console.log("밖 afterAll()");
});

test("0은 0이다", () => {
  expect(0).toBe(0);
});

describe("describe 안의 테스트", () => {
  beforeAll(() => {
    console.log("안 beforeAll()");
  });
  beforeEach(() => {
    console.log("안 beforeEach()");
  });
  afterEach(() => {
    console.log("안 afterEach()");
  });
  afterAll(() => {
    console.log("안 afterAll()");
  });
  test("1은 1이다", () => {
    expect(1).toBe(1);
  });
});
