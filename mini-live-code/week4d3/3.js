/**
 *  COUNT LETTER
 * 
 *  FUNCTION INI AKAN MENGHITUNG JUMLAH HURUF YANG ADA PADA KATA TERSEBUT KECUALI SPASI
 *  DAN MENGEMBALIKAN BERUPA OBJECT 
 *  
 *  FUNCTION INI MENGABAIKAN BESAR KECIL PADA KALIMAT TERSEBUT ,
 *  DAN MENGELOMPOKKANNYA KE DALAM OBJECT BERUPA HURUF KECIL HURUF TERSEBUT
 *  
 *  CONTOH: 
 *  INPUT: "MarAh"
 *  OUTPUT: {m: 1, a: 2, r: 1, h: 1}
 * 
 *  RULES:
 *  - DILARANG MENGGUNAKAN .FILTER .MAP .REDUCE .REGEX .INDEXOF .INCLUDE 
 */

function countLetter (string) {
  let ans = {};
  string = string.toLowerCase();
  for (let char of string) {
    if (!ans.hasOwnProperty(char)) {
      ans[char] = 1;
    } else {
      ans[char]++;
    }
  }
  return ans;
}

console.log(countLetter("Hesoyam"))
// { h: 1, e: 1, s: 1, o: 1, y: 1, a: 1, m: 1 }
console.log(countLetter("KasUr Rusak"))
// { k: 2, a: 2, s: 2, u: 2, r: 2, ' ': 1 }
console.log(countLetter("MantAb GaN"))
// { m: 1, a: 3, n: 2, t: 1, b: 1, ' ': 1, g: 1 }