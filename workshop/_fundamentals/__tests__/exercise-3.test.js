const getPairing = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(getPairing("burger")).toBe("beer");
  expect(getPairing(`beef`)).toBe("red wine");
  expect(getPairing(2)).toBe("I didn't get that!");
  expect(getPairing(`salami`)).toBe(undefined);
  // add more tests here...
});
