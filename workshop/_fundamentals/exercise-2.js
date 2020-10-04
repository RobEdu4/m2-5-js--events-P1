// Exercise 2
//
// 1. Write a function accepts 2 arrays of strings and returns a new combined array of the strings in alphabetical order.
// e.g. combineArrays(["crisp", "bacon"], ['zuchini', 'apple']) returns ['apple', 'bacon', 'crispy', 'zuchini']

// - if any of the values in either array is not strings, return undefined.

const combineArrays = (arr1, arr2) => {
  let newArray = [...arr1, ...arr2];
  let stringOrNo = true;

  newArray.forEach((arr) => {
    if (typeof arr !== "string") stringOrNo = false;
  });

  if (stringOrNo === true) {
    return newArray.sort();
  } else {
    return undefined;
  }

  /*
  newArray.map((array) => {
    if (typeof array === "number") {
      return newArray.sort();
    } else {
      return undefined;
    }
  });

  return newArray.sort();
  // Insert missing solution please */
};

// 2. Do a console.log to verify your function.
console.log(combineArrays(["zulu", "sierra"], ["alpha", "echo"]));
// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = combineArrays;
