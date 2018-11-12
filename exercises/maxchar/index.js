// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //loop through string
  //store letter in hash table (object), letter is key and count is value
  //return letter with the most count

  const myStrObj = {};
  let maxCount = 0;
  let char;

  for (character of str) {
    if (!myStrObj[character]) {
      myStrObj[character] = 1;
    } else {
      myStrObj[character] += 1;
    }
  }

  for (key in myStrObj) {
    if (myStrObj[key] > maxCount) {
      char = key;
      maxCount = myStrObj[key];
    }
  }
  return char;
}

module.exports = maxChar;
