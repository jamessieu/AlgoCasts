// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // iterate  through a for loop n times
  // 
  
  for(let x = 0; x < n; x += 1) {
    let string = '';
    for(let y = 0; y < n; y += 1) {
      if(y + 1 <= x){
        string += '#';
      } else {
        string += ' ';
      }
    }
    console.log(string);
  }
}

steps(3);

module.exports = steps;
