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




function checkerBoard(num) {
  // Write your code here

  res = '';

  // proteksi input
  if (!isValidInput(num)) {
    return 'Invalid';
  }

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (isBothEven(i, j) || isBothOdd(i, j)) {
        res += '*';
      } else {
        res += ' ';
      }
    }
    res += '\n';
  }

  return res;
}

/* 

jika kamu perhatikan, * hanya terisi
jika i dan j sama-sama ganjil
atau i dan j sama-sama genap
so harusnya, cek aja apakah
keduanya ganjil atau genap?
ga usah rumit lah.

*/

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


/*

01234
0 * * *
1  * *
2 * * *
3  * *
4 * * *



*/