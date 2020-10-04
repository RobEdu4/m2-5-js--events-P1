// Exercise 1
//
// 1. Write a function that returns the sum of the letter count of each string in the array
// e.g. letterCount(["crisp", "bacon"]) returns 10

const letterCount = (arr) => {
  let newArray = arr.join("").split("");
  let letterCount = 0;
  let letters = /^[A-Za-z]+$/;

  newArray.forEach((array) => {
    if (array.match(letters)) letterCount++;
  });

  return letterCount;
};

// 2. Do a console.log to verify your function.
console.log(
  letterCount(["word1", "word2", "word290123412", "ALSOWORD#$%^$^%"])
);
// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = letterCount;
