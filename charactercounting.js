
// Remove spaces and lower case and return array of letters
function removeSpaces(input) {
  var noSpaces = input.split(" ").join("").toLowerCase().split("");
  return noSpaces;
}
// console.log(removeSpaces("Here is a test."));

var countedLetters = {};
var instances = 1;
function addLettersToObjectUncounted(input) {
  for (var i = 0; i < input.length; i++) {
    countedLetters[input[i]] = instances;
  }
  return countedLetters;
}

console.log(addLettersToObjectUncounted(removeSpaces("Here is a test.")));






