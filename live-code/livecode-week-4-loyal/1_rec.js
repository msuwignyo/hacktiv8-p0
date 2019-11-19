/**
 * ================
 * Number Spreader
 * ================
 * numberSpreader adalah sebuah function yang menerima satu parameter berupa angka.
 * function akan mereturn sebuah array dengan pola berikut:
 * Jika n = 5
 * maka hasil = [ 5, 4, 3, 2, 1, 2, 3, 4, 5 ]
 * Jika n = 3
 * maka hasil = [ 3, 2, 1, 2, 3 ]
 * Jika n = 15
 * maka hasil = [ 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
 * 
 * [ASUMSI]
 * - NILAI PARAMETER `SELALU ANGKA POSITIF` (KECUALI 0)
 * - JIKA PARAMETER BUKAN ANGKA POSITIF MAKA KEMBALIKAN `invalid number`
 * 
 * [RULES]
 * - WAJIB MENULISKAN PSEUDOCODE/ALGORITMA
 * - DILARANG MENGGUNAKAN BUILT IN FUNCTION .reverse()
 */

function numberSpreader(num) {
  if (typeof num !== 'number' || num < 1) {
    return 'invalid number';
  }

  if (num === 1) {
    return [1];
  }

  return [num, ...numberSpreader(num - 1), num];
}

console.log(numberSpreader(5)); // [ 5, 4, 3, 2, 1, 2, 3, 4, 5 ]
console.log(numberSpreader(3)); // [ 3, 2, 1, 2, 3 ]
console.log(numberSpreader(10)); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(numberSpreader(7)); // [ 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7 ]
console.log(numberSpreader(0)); // invalid number
console.log(numberSpreader()); // invalid number