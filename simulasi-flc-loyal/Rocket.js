/**
 * ===================
 * Every Step You Take
 * ===================
 * 
 * [Description]
 * steps merupakan sebuah function yang menghitung jarak langkah antara titik start 's' dan end 'e'.
 * function menerima sebuah array multidimensional berisikan array of spasi, dan 2 diantaranya adalah s dan e.
 * 
 * [Instruction]
 * Buatlah function steps agar dapat menghitung jumlah langkah minimal yang dapat ditempuh
 * oleh 's' hingga sampai ke 'e'. Range langkah yang dapat diambil tiap turn adalah 1 ke delapan arah
 * (vertikal, horizontal, diagonal).
 * 
 * [Example]
 * @input = [
 *   [' ', ' ', 's'],
 *   [' ', ' ', ' '],
 *   ['e', ' ', ' '],
 * ]
 * karena 's' dapat melangkah diagonal, maka 's' hanya butuh 2 langkah:
 * langkah 1 : [
 *   [' ', ' ', ' '],
 *   [' ', 's', ' '],
 *   ['e', ' ', ' '],
 * ]
 * langkah 2 : [
 *   [' ', ' ', ' '],
 *   [' ', ' ', ' '],
 *   ['s', ' ', ' '],
 * ]
 * maka @output = 2
 * 
 * Rules:
 * 1. tidak boleh menggunakan indexOf, lastIndexOf, includes, some, every, find, findIndex
 * 2. tidak boleh map, forEach, filter, reduce
 */

function yukJalan(koord_s, koord_e) {
  // if (koord_s === koord_e) {
  //   return 0;
  // }

  if (koord_s[0] === koord_e[0] &&
      koord_s[1] === koord_e[1]) {
    return 0;
  }

  new_koord_s = [...koord_s];
  for (let ix = 0; ix < new_koord_s.length; ix++) {
    if (new_koord_s[ix] > koord_e[ix]) {
      new_koord_s[ix]--;
    } else if (new_koord_s[ix] < koord_e[ix]) {
      new_koord_s[ix]++;
    } else {
      continue;
    }
  }

  return 1 + yukJalan(new_koord_s, koord_e);
}

function steps(arr) {

  const cariKoord = (char, arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === char) {
          return [i, j]
        }
      }
    }
  }

  koord_s = cariKoord('s', arr)
  koord_e = cariKoord('e', arr)

  // let min_path = Math.abs(koord_s[0] - koord_e[0]);
  // if (Math.abs(koord_s[1] - koord_e[1]) < min_path) {
  //   min_path = Math.abs(koord_s[1] - koord_e[1])
  // }

  return yukJalan(koord_s, koord_e);
}

let a1 = [
  [' ', ' ', ' ', ' ', ' ', ' ', 'e', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', 's', ' ', ' ', ' ', ' ', ' ', ' '],
]
console.log(steps(a1)) // 5

let a2 = [
  [' ', ' '],
  [' ', 's'],
  [' ', ' '],
  [' ', ' '],
  [' ', ' '],
  [' ', ' '],
  [' ', ' '],
  [' ', ' '],
  [' ', ' '],
  [' ', ' '],
  [' ', ' '],
  ['e', ' '],
  [' ', ' '],
  [' ', ' '],
]
console.log(steps(a2)) // 10

let a3 = [
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['s', ' ', ' ', ' ', ' ', ' ', ' '],
]
console.log(steps(a3)) // 6