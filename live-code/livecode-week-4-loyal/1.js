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

function isValid(num) {
  /**
   * ALGORITMA:
   * 
   * isValid(num)
   *   return (type(num) == number) or (num >= 1)
   * 
   * KETERANGAN:
   *  1. type() adalah sebuah fungsi untuk mengetahui
   *     tipe dari suatu data. Pada contoh, type(num)
   *     akan mengeluarkan tipe data dari num.
   *  2. Di sini, semua nama tipe data diperlakukan
   *     seperti kata kunci. Pada contoh, number
   *     adalah kata kunci. Lainnya adalah string,
   *     boolean, object, array, dsb.
   *  3. sebuah num dikatakan valid jika tipe datanya
   *     berupa sebuah angka dan lebih besar sama dengan
   *     nol.
   */

  return typeof num === 'number' || num < 1;
}

function numberSpreader(num) {

  /**
   * ALGORITMA:
   * 
   * numberSpreader(num):
   *   if !isValid(num)  // cek apakah input valid?
   *     return error
   *   ans = []         // untuk menampung hasil
   *   temp = num       // inisiasi angka num
   *   isForward = false // penanda inkremen/dekremen
   *   for i = 0 to (2 * num - 2)
   *     if temp == 1
   *       isForward = true
   *     ans[i] = temp
   *     if isForward
   *       temp++
   *     else
   *       temp--
   *   return ans
   */

  if (!isValid(num)) {
    return 'invalid number';
  }

  let ans = [];
  let temp = num;
  let isForward = false;
  for (let i = 0; i < (2*num - 1); i++) {
    if (temp == 1) { isForward = true; }
    ans[i] = temp;
    if (isForward) { temp++; }
    else           { temp--; }
  }
  return ans;
}

console.log(numberSpreader(5)); // [ 5, 4, 3, 2, 1, 2, 3, 4, 5 ]
console.log(numberSpreader(3)); // [ 3, 2, 1, 2, 3 ]
console.log(numberSpreader(10)); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(numberSpreader(7)); // [ 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7 ]
console.log(numberSpreader(0)); // invalid number
console.log(numberSpreader()); // invalid number