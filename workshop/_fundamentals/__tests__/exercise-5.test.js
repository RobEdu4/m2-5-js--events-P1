const getDaysInMonth = require("../exercise-5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getDaysInMonth("November")).toBe(30);
  expect(getDaysInMonth("november")).toBe(30);
  expect(getDaysInMonth("SePtEmBeR")).toBe(30);
  expect(getDaysInMonth("not a month")).toBe(`error`);
  // add more tests here...
});
