/**
 * =========
 * Isi Kotak
 * =========
 * 
 * [Description]
 * Function isiKotak merupakan sebuah function yang membuat sebuah array multidimensi
 * yang berisikan angka dengan ketentuan:
 * 1. Angka mulai dari 1 dan `bertambah` hingga angka @input yang diberikan.
 * 2. Ketika angka tersebut sudah mencapai angka @input maka akan `berkurang sampai angka 0`.
 * 3. Proses 1 & 2 berulang hingga seluruh array dengan ukuran @input x @input diisi dengan angka.
 * 4. Jika angka yang diisi mencapai 2 digit, `gunakan bilangan satuannya`.
 *    contoh: 15 => 5, 47 => 7, 124 => 4
 * 
 * [Rules]
 * 1. Dilarang membuat function lain selain yang berada di skeleton code.
 * 2. Dilarang menggunakan built-in function:
 *    map, filter, reduce, forEach, split, slice, splice, join, reverse, sort
 */

function isiKotak(num) {
  // proteksi input
  if (typeof num !== 'number') {
    return 'Invalid';
  }
  
  let isForward = true;
  let ans = [];
  let pointer = 1;
  for (let i = 1; i <= num; i++) {
    let temp = [];
    for (let j = 1; j <= num; j++) {
      // kalau udah nyampe num, di-decrement
      if (pointer === num) {
        isForward = false;
      }
      // kalau udah nyampe 1, di-increment balik
      if (pointer === 1) {
        isForward = true;
      }

      if (isForward) {
        temp.push(pointer++ % 10);
      } else {
        temp.push(pointer-- % 10);
      }
    }

    ans.push(temp);
  }

  return ans;
}

console.log(isiKotak(1))
// [ [ 1 ] ]
console.log(isiKotak(2))
// [ [ 1, 2 ],
//   [ 1, 2 ] ]
console.log(isiKotak(3))
// [ [ 1, 2, 3 ],
//   [ 2, 1, 2 ],
//   [ 3, 2, 1 ] ]
console.log(isiKotak(4))
// [ [ 1, 2, 3, 4 ],
//   [ 3, 2, 1, 2 ],
//   [ 3, 4, 3, 2 ],
//   [ 1, 2, 3, 4 ] ]
console.log(isiKotak(5))
// [ [ 1, 2, 3, 4, 5 ],
//   [ 4, 3, 2, 1, 2 ],
//   [ 3, 4, 5, 4, 3 ],
//   [ 2, 1, 2, 3, 4 ],
//   [ 5, 4, 3, 2, 1 ] ]
console.log(isiKotak('5'))
// Invalid
console.log(isiKotak(false))
// Invalid
console.log(isiKotak(10))
// [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],
//   [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 2 ],
//   [ 3, 4, 5, 6, 7, 8, 9, 0, 9, 8 ],
//   [ 7, 6, 5, 4, 3, 2, 1, 2, 3, 4 ],
//   [ 5, 6, 7, 8, 9, 0, 9, 8, 7, 6 ],
//   [ 5, 4, 3, 2, 1, 2, 3, 4, 5, 6 ],
//   [ 7, 8, 9, 0, 9, 8, 7, 6, 5, 4 ],
//   [ 3, 2, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 9, 0, 9, 8, 7, 6, 5, 4, 3, 2 ],
//   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ] ]
console.log(isiKotak(11))
// [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1 ],
//   [ 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2 ],
//   [ 3, 4, 5, 6, 7, 8, 9, 0, 1, 0, 9 ],
//   [ 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4 ],
//   [ 5, 6, 7, 8, 9, 0, 1, 0, 9, 8, 7 ],
//   [ 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6 ],
//   [ 7, 8, 9, 0, 1, 0, 9, 8, 7, 6, 5 ],
//   [ 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 9, 0, 1, 0, 9, 8, 7, 6, 5, 4, 3 ],
//   [ 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],
//   [ 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] ]
console.log(isiKotak(15))
// [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5 ],
//   [ 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2 ],
//   [ 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 4, 3 ],
//   [ 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4 ],
//   [ 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1 ],
//   [ 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6 ],
//   [ 7, 8, 9, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 9 ],
//   [ 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 9, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 9, 8, 7 ],
//   [ 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],
//   [ 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5 ],
//   [ 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2 ],
//   [ 3, 4, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3 ],
//   [ 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4 ],
//   [ 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] ]