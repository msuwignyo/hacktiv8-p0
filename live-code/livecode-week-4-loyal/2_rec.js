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

function laguPopuler(freqLagu) {
  let ans = ['', -Infinity];
  
  for (entry of Object.entries(freqLagu)) {
    if (ans[1] < entry[1]) {
      ans = entry;
    }
  }

  const [lagu, freq] = ans;

  return `lagu ${lagu} diputar sebanyak ${freq} kali`;
}

function favouritePlaylist(arr, freqLagu=undefined) {
  if (!Array.isArray(arr)) {
    return 'ini bukan sebuah playlist'
  }

  if (arr == 0) {
    return (freqLagu === undefined) ?
        'tidak ada lagu yang diputar' :
        laguPopuler(freqLagu);
  }

  if (freqLagu === undefined) {
    freqLagu = {};
  }

  const temp = arr.shift();

  if (!freqLagu.hasOwnProperty(temp)) {
    freqLagu[temp] = 0;
  }

  freqLagu[temp]++;

  return favouritePlaylist(arr, freqLagu);
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