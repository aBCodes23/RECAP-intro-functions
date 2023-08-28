const { check, runTest } = require("../test-api/index");

function containsNoRepeats(str) {
  // This function should take a string as its argument and return true if each character appears only once and false otherwise

  //split string into array
  //create a new array of unique values (something to do with new and Set)
  //https://dev.to/clairecodes/how-to-create-an-array-of-unique-values-in-javascript-using-sets-5dg6
  //compare lengths

  const strArray = str.split('')
  const uniqueArray = [...new Set(strArray)]

  return strArray.length === uniqueArray.length
}

runTest("containsNoRepeats() returns true for an empty string", function () {
  check(containsNoRepeats("")).isEqualTo(true);
});

runTest(
  "containsNoRepeats() returns false for a single repeated character",
  function () {
    check(containsNoRepeats("oo")).isEqualTo(false);
    check(containsNoRepeats("zzz")).isEqualTo(false);
  }
);

runTest(
  "containsNoRepeats() returns true when each character appears only once",
  function () {
    check(containsNoRepeats("dog")).isEqualTo(true);
    check(containsNoRepeats("cat")).isEqualTo(true);
    check(containsNoRepeats("abcde")).isEqualTo(true);
  }
);

runTest(
  "containsNoRepeats() returns false if any characters are repeated",
  function () {
    check(containsNoRepeats("dooog")).isEqualTo(false);
    check(containsNoRepeats("iHaveRepeats")).isEqualTo(false);
    check(containsNoRepeats("anat")).isEqualTo(false);
    check(containsNoRepeats("abcdea")).isEqualTo(false);
  }
);
