/**
 *  Cari kemiripan
 * 
 *  Function ini menerima 2 inputan:
 *  1. Array yang berisikan kata2 random,
 *  2. String yang berisikan sebuah kata
 * 
 *  Function ini akan mencarikan ISI dari array INPUT yang mengandung INPUT STRING
 * 
 *  contoh: 
 *  input array: ['ola ramlan', 'coca cola', 'soba', 'caca']
 *  input string: 'ola
 * 
 *  maka output dari function ini yaitu berupa array yang mengandung kata yang mirip dengan 
 *  string tersebut yaitu 'ola'
 * 
 *  output: ['ola ramlan', 'coca cola']
 * 
 *  [RULE] 
 *  1. dilarang menggunakan indexOf(), find(), filter() 
 *  2. dilarang menggunakan regex
 * 
 */

function isPatternHasFound(kata, pattern) {
  if (kata.length < pattern.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    if (kata[i] !== pattern[i]) {
      return isPatternHasFound(kata.slice(1), pattern);
    }
  }

  return true;
}

function cariKemiripan(arr, kata) {
  if (arr == 0) {
    return [];
  }

  const temp = arr.shift();
  const out = cariKemiripan(arr, kata);

  if (isPatternHasFound(temp, kata)) {
    out.unshift(temp);
  }

  return out;
}

console.log(cariKemiripan(['bola', 'ola ramlan', 'sholat', 'gajah', 'fanta'], 'ola'))
//["bola", "ola ramlan", "sholat"]
console.log(cariKemiripan(['kata', 'atta halilintar', 'hatta', 'bata', 'fanta'], 'atta'))
//["atta halilintar", "hatta"]