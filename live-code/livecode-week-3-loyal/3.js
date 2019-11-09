/**
 * ============
 * NILAI KULIAH
 * ============
 * 
 * Buatlah sebuah fungsi nilaiKuliah yang menerima 4 buah parameter : nama, matkul1, matkul2, matkul3
 * - nama adalah string yang berisi nama mahasiswa
 * - matkul1, matkul2, matkul3 adalah angka yang berisi nilai-nilai mahasiswa tersebut
 * 
 * Fungsi akan menghitung rata-rata nilai mahasiswa tersebut dari 3 nilai mata kuliah yang diberikan
 * Dari nilai rata-rata yang didapat, mahasiswa akan diberikan grade sebagai berikut :
 * - nilai lebih besar atau sama dengan 80 akan mendapat grade A
 * - nilai lebih besar atau sama dengan 70 DAN lebih kecil dari 80 akan mendapat grade B
 * - nilai lebih kecil dari 70 akan mendapat grade C
 * 
 * Kemudian, buatlah sebuah kalimat sebagai output dengan menyertakan nama mahasiswa dalam kalimat tersebut.
 * Perhatikan dan analisa driver code untuk bisa membuat kalimat yang dimaksud
 * 
 * Rules :
 * - Fungsi TIDAK menampilkan apapun dalam prosesnya
 * - Kalimat yang dihasilkan HARUS di return oleh fungsi
 */

function nilaiKuliah(nama, matkul1, matkul2, matkul3) {
  // Write your code here

  let nilaiRerata = (matkul1 + matkul2 + matkul3) / 3;

  if (nilaiRerata >= 80) {
    return `Selamat ${nama}, grade kamu adalah A, Anda adalah lulusan terbaik`;

  } else if (nilaiRerata >= 70 && nilaiRerata < 80) {
    return `Selamat ${nama}, grade kamu adalah B, Anda adalah lulusan kedua terbaik`;

  } else {
    return `${nama}, grade kamu adalah C, Anda lulus`;

  }
}

console.log(nilaiKuliah("Adi", 75, 75, 75));
// Selamat Adi, grade kamu adalah B, Anda adalah lulusan kedua terbaik

console.log(nilaiKuliah("Budi", 80, 90, 100));
// Selamat Budi, grade kamu adalah A, Anda adalah lulusan terbaik

console.log(nilaiKuliah("Zira", 40, 50, 60));
// Zira, grade kamu adalah C, Anda lulus