/**
 * ============
 * Checkerboard
 * ============
 * 
 * [Instruction]
 * Buatlah sebuah function yang mengembalikan string berupa
 * asterisk yang berbentuk pola seperti papan catur.
 * 
 * [Resctrictions]
 * 1. Result selalu dimulai dari asterisk '*' bukan spasi ' '
 * 2. Function mengembalikan 'Invalid' jika input kurang dari 1
 *    ATAU input bukan number
 */

function isValidInput(num) {
  return num >= 1 && typeof num === 'number';
}

function isBothOdd(a, b) {
  return a % 2 == 1 && b % 2 == 1;
}

function isBothEven(a, b) {
  return a % 2 == 0 && b % 2 == 0;
}

function draw(num, out='', i=0) {
  if (i === num) {
    return out;
  }

  for (let j = 0; j < num; j++) {
    if (isBothEven(i, j) || isBothOdd(i, j)) {
      out += '*';
    } else {
      out += ' ';
    }
  }

  out += '\n';

  return draw(num, out, i+1);
}

function checkerBoard(num) {
  if (!isValidInput(num)) {
    return 'Invalid';
  }

  return draw(num)
}

console.log(checkerBoard(1))
// *
console.log(checkerBoard(2))
// * 
//  *
console.log(checkerBoard(3))
// * *
//  *
// * *
console.log(checkerBoard(4))
// * *
//  * *
// * *
//  * *
console.log(checkerBoard(5))
// * * *
//  * *
// * * *
//  * *
// * * *
console.log(checkerBoard(-1)) // Invalid
console.log(checkerBoard('5')) // Invalid
console.log(checkerBoard(false)) // Invalid