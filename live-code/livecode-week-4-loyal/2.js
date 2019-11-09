/**
 * ===============
 * NARUTO PLAYLIST
 * ===============
 * 
 * [Description]
 * Naruto mempunyai sebuah playlist di handphone nya yang terdiri dari 3 lagu
 * yaitu : "bersama bintang", "jujur", dan "puspa"
 * 
 * Naruto ingin membuat sebuah function untuk mengetahui lagu apa yang sering ia putar
 * ketika sedang latihan.
 * Setiap kali Naruto memutar playlist , hanya ada SATU lagu yang di paling sering di putar oleh Naruto
 * 
 * [Example]
 * 1. ["jujur", "jujur", "puspa", "bersama bintang"] -> lagu yang paling sering di putar yaitu jujur
 *     output: "lagu jujur diputar sebanyak 2 kali"
 *
 * 2. ["jujur", "jujur", "puspa", "puspa", "puspa", "bersama bintang"] -> lagu yang paling sering di putar yaitu puspa
 *     output: "lagu puspa di putar sebanyak 3 kali"
 *
 * [Restrictions]
 * Jika tidak ada lagu yang di putar oleh naruto maka
 * output yang di harapkan adalah : -> "tidak ada lagu yang di putar"
 *
 * Jika input parameter function bukan sebuah array maka
 * output yang di harapkan adalah -> "ini bukan sebuah playlist"
 *
 * [RULES] !!
 * - Dilarang menggunakan Regex (.test, .match dan sebagainya)
 * - Dilarang menggunakan .filter .reduce
 */

function favouritePlaylist(arr) {
  // proteksi input
  if (!Array.isArray(arr)) { // tipe bukan array
    return 'ini bukan sebuah playlist';
  }

  // proteksi input
  if (arr == 0) { // array tapi kosong
    return 'tidak ada lagu yang di putar';
  }

  let listLagu = [];
  let listFreqLagu = [];
  for (let item of arr) {
    if (!listLagu.includes(item)) {
      listLagu.push(item);
      listFreqLagu.push(1);
    } else {
      let indexLagu = listLagu.indexOf(item);
      listFreqLagu[indexLagu]++;
    }
  }

  let maxFreqLagu = -Infinity;

  for (let item of listFreqLagu) {
    if (item > maxFreqLagu) {
      maxFreqLagu = item;
    }
  }

  let ans = listLagu[listFreqLagu.indexOf(maxFreqLagu)];

  return `lagu ${ans} diputar sebanyak ${maxFreqLagu} kali`;
}

console.log(favouritePlaylist(["jujur", "puspa", "bersama bintang", "jujur", "jujur"])) 
//output: "lagu jujur diputar sebanyak 3 kali"
console.log(favouritePlaylist(["bersama bintang", "bersama bintang", "puspa", "jujur"]))
//output: "lagu bersama bintang diputar sebanyak 2 kali"
console.log(favouritePlaylist(["puspa"])) 
//output: "lagu puspa diputar sebanyak 1 kali"
console.log(favouritePlaylist([]))
//output: "tidak ada lagu yang di putar"
console.log(favouritePlaylist(''))
//output: "ini bukan sebuah playlist"
console.log(favouritePlaylist(50))
//output: "ini bukan sebuah playlist"