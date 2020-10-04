const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  expect(letterCount(["word1", "word2", "word290123412", "ALSOWORD"])).toBe(20);
  expect(
    letterCount(["word1", "word2", "word290123412", "ALSOWORD#$%^$^%"])
  ).toBe(20);
  // add more tests here...
});
