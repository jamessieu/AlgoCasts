// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const checker = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;

  for(char of str.toLowerCase()){
    if(checker.includes(char)) counter += 1;
  }

  return counter
}

console.log(vowels('hello'));
console.log(vowels('Hi There!'));

module.exports = vowels;
