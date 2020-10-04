const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  expect(combineArrays(["zulu", "sierra"], ["alpha", "echo"])).toStrictEqual([
    "alpha",
    "echo",
    "sierra",
    "zulu",
  ]);
  expect(combineArrays(["zulu", 2], ["alpha", "echo"])).toStrictEqual(
    undefined
  );
  // add more tests here...
});
