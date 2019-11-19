/**
 * ===============
 * Closest to Zero
 * ===============
 * 
 * [Instruction]
 * Buatlah sebuah function yang mengembalikan nilai temperatur yang paling dekat dengan 0 (nol).
 * 
 * [Description]
 * 1. Function menerima satu parameter berupa array of @temperatures
 * 2. Function mengembalikan sebuah nilai temperatur (positif ataupun negatif) yang paling dekat dengan 0
 * 3. Jika terdapat dua nilai yang sama (positif dan negatif) maka tampilkan nilai positifnya
 * 4. Jika input berupa array kosong, maka kembalikan nilai 0
 * 
 * [Example]
 * @input = [-1, 2, -3, 4, -5]
 * Berdasarkan input tersebut, -1 merupakan angka yang paling dekat dengan 0, maka:
 * @output = -1
 * 
 * @input = [10, -14, -87, 43, -76, -10, 86, 94]
 * Berdasarkan input tersebut, terdapat dua nilai yang paling dekat dengan 0 => 10 dan -10,
 * maka ambil nilai positifnya, sehingga:
 * @output = 10
 * 
 * [Rules]
 * 1. Dilarang menggunakan built-in function: map, filter, reduce, forEach
 * 1. Dilarang menggunakan built-in function: indexOf, lastIndexOf, includes, some, every, find, findIndex
 * 1. Dilarang menggunakan built-in function: Math.max, Math.min
 * 1. Dilarang menggunakan built-in function: sort
 */

function closestToZero(arr) {

  // proteksi
  if (arr == 0) { return 0; }

  let terdekat = Number.POSITIVE_INFINITY;

  for (let item of arr) {
    if ((Math.abs(item) < terdekat) ||
        (Math.abs(item) - Math.abs(terdekat) <= 0 && item >= 0)) {
      terdekat = item;
    }
  }

  return terdekat;
}

console.log(closestToZero([1, -2, -8, 4, 5])) // 1
console.log(closestToZero([-12, -50, -137])) // -12
console.log(closestToZero([42, -5, 12, 21, 5, 24])) // 5
console.log(closestToZero([42, 5, 12, 21, -5, 24])) // 5
console.log(closestToZero([-5, -4, -2, 12, -40, 4, 2, 18, 11, 5])) // 2
console.log(closestToZero([-5, 8, 62, -48, 0, -59, -76, 2, 1, -56, 37, -98, -1])) // 0
console.log(closestToZero([])) // 0