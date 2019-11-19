/**
 * =====================================
 * Multiplication Table BUT with a twist
 * =====================================
 * 
 * [INSTRUCTIONS]
 * 
 * Diberikan sebuah array multidimensi yang berisikan angka - angka pada sisi atas table dan kiri nya.
 * tugas kalian adalah dapat mengalikan angka - angka tersebut sesuai dengan koordinatnya
 * lalu ditambahkan dengan angka pertama dari array input yang diberikan.
 * 
 * [EXAMPLES]
 * input :
 * [
 *   [3,1,2,3,4],
 *   [5,0,0,0,0],
 *   [6,0,0,0,0],
 *   [7,0,0,0,0],
 *   [8,0,0,0,0]
 * ]
 * 
 * proses :
 * pertama, untuk mengetahui cara penghitungan angka - angka 0 yang belum diketahui hasil perkaliannya,
 * kita umpamakan mereka seperti variable :
 * [
 *   [3,1,2,3,4],
 *   [5,a,b,c,d],
 *   [6,e,f,g,h],
 *   [7,i,j,k,l],
 *   [8,m,n,o,p]
 * ]
 * 
 * untuk mengetahui nilai a , maka kalikan 1 dengan 5 lalu ditambahkan dengan angka pertamanya (3), maka:
 * a = 5 + 3 = 8
 * b = (5 * 2) + 3
 * c = (5 * 3) + 3
 * d = (5 * 4) + 3
 * e = (6 * 1) + 3
 * dst ..
 * 
 * sehingga output nya :
 * [
 *   [3,1,2,3,4],
 *   [5,8,13,18,23],
 *   [6,9,15,21,27],
 *   [7,10,17,24,31],
 *   [8,11,19,27,35]
 * ]
 * 
 * [RULES]
 * 1. HANYA boleh menggunakan `push dan unshift`
 * 2. `DILARANG` menggunakan method REGEX
 */

function multiplicationTable(table) {
  /**
   * yang kita ketahui:
   * - ini koordinat x mulai dari 1
   * - koordinat y juga mulai dari 1
   * - jadi, kita pakai loop 2x, mulainya dari 1 semua
   * - operasi untuk tiap koordinat [i,j]:
   *    - nilai [i, 0] dan [0, j] dijumlah + [0, 0]
   *    - udah kelar, masukkan ke table baru
   */

  let out = [...table];

  for (let j = 1; j < out.length; j++) {
    for (let i = 1; i < out[j].length; i++) {
      out[i][j] = out[i][0] * out[0][j] + out[0][0]
    }
  }

  return out;
}

console.log(multiplicationTable([
  [3, 1, 2, 3, 4],
  [5, 0, 0, 0, 0],
  [6, 0, 0, 0, 0],
  [7, 0, 0, 0, 0],
  [8, 0, 0, 0, 0]
]))
// [
//   [ 3,  1,  2,  3,  4 ],
//   [ 5,  8, 13, 18, 23 ],
//   [ 6,  9, 15, 21, 27 ],
//   [ 7, 10, 17, 24, 31 ],
//   [ 8, 11, 19, 27, 35 ]
// ]

console.log(multiplicationTable([
  [5, 3, 5, 7, 9],
  [2, 0, 0, 0, 0],
  [4, 0, 0, 0, 0],
  [6, 0, 0, 0, 0],
  [8, 0, 0, 0, 0]
]))
// [
//   [ 5,  3,  5,  7,  9 ],
//   [ 2, 11, 15, 19, 23 ],
//   [ 4, 17, 25, 33, 41 ],
//   [ 6, 23, 35, 47, 59 ],
//   [ 8, 29, 45, 61, 77 ]
// ]