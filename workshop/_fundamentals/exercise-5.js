// Exercise 5
//
// 1. Write a function that accepts a month (as a string) as an argument and returns the number of days in that month.
// Use a switch statement to solve this exercise.

// - Ignore leap years
// - If the provided argument is not a known month, return 'error';

const getDaysInMonth = (month) => {
  month = month.toLowerCase();
  switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
      return 31;
    case "april":
    case "june":
    case "september":
    case "november":
      return 30;
    case "february":
      return 28;
    default:
      return `error`;
  }
};

// 2. Do a console.log to verify your function.
console.log(getDaysInMonth("not a month"));
// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = getDaysInMonth;
