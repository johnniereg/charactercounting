// Remove spaces and lower case and return array of letters
function removeSpaces(input) {
  var noSpaces = input.split(" ").join("").toLowerCase().split("");
  return noSpaces;
}

function countLetters(inputString) {
  var input = removeSpaces(inputString);
  var countedLetters = {};
    for (var i = 0; i < input.length; i++) {
      if (countedLetters[input[i]] === undefined) {
        countedLetters[input[i]] = 1;
      }
      else
        countedLetters[input[i]] += 1;
  }
  return countedLetters;
}

console.log(countLetters("lighthouse in the house"));