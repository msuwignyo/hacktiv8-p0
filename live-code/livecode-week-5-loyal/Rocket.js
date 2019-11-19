
/**
 * -----------
 * Mountain 🗻
 * ------------
 *
 * Instruction
 * -----------
 * Buatlah sebuah fungsi yang akan membuat sebuah gunung. Fungsi ini akan menerima tiga parameter
 * - tinggi dari gunung
 * - lebar dari landscape
 * - tinggi dari landscape
 *
 * Fungsi ini akan membuat sebuah gunung dengan tinggi sesuai dengan yang kita kirimkan.
 * Misal kita mengirimkan tinggi gunung 3 dan lebar landscape 5 dan tinggi landscape 5
 * Maka output yang akan kita hasilkan adalah.
 *
 * Rule
 * ----
 * - HANYA BOLEH menggunakan built in function push dan unshift
 * - Lebar dari landscape dan Tinggi dari landscape haruslah sama
 *   ( jika tidak keluarkan output 'Tinggi dan lebar dari landscape yang akan dibuat haruslah sama')
 * - Minimal tinggi dan lebar landscape adalah 5
 *   ( jika tidak keluarkan output 'Lebar landscape tidak cukup untuk membuat gunung' )
 * 
 * Contoh ukuran 5x5:
 * [
 * [' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', 'X', ' ', ' '],
 * [' ', 'X', ' ', 'X', ' '],
 * ['X', ' ', ' ', ' ', 'X']
 *]
 */

function draw(num, kiri = 0, kanan = num-1) {
  if (kiri === num) {
    return [];
  }

  let res = draw(num, kiri+1, kanan-1);
  let temp = [];
  
  for (let i = 0; i < num; i++) {
    if ((kiri === i || kanan === i) && (kiri <= kanan)) {
      temp.push('X');
    } else {
      temp.push(' ');
    }
  }

  res.push(temp);
  
  return res;
}

function mountainView(height, landscapeHeight, landscapeWidth) {
  if (landscapeWidth !== landscapeHeight) {
    return 'Lebar landscape tidak sama dengan tinggi landscape';
  }

  const lebarGunung = 1 + 2 * (height - 1);

  if (landscapeWidth < lebarGunung) {
    return 'Lebar landscape tidak cukup untuk membuat gunung';
  }

  return draw(landscapeWidth);
}

console.log(mountainView(3, 6, 5)) // Lebar landscape tidak sama dengan tinggi landscape

console.log(mountainView(3, 2, 2)) // Lebar landscape tidak cukup untuk membuat gunung

console.log(mountainView(3, 5, 5))

/**
 * [
 * [' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', 'X', ' ', ' '],
 * [' ', 'X', ' ', 'X', ' '],
 * ['X', ' ', ' ', ' ', 'X']
 *]
 */

console.log(mountainView(4, 7, 7))
/**
 * [
 * [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', ' ', 'X', ' ', ' ', ' '],
 * [' ', ' ', 'X', ' ', 'X', ' ', ' '],
 * [' ', 'X', ' ', ' ', ' ', 'X', ' '],
 * ['X', ' ', ' ', ' ', ' ', ' ', 'X']
 *]
 */