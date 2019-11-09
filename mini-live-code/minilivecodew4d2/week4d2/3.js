
/**
 * 
 *  Belanja
 * 
 *  Function ini akan membalikkan output yang berupa daftar belanjaan
 *  yang dapat di beli dengan uang yang ada. 
 *  Barang yang menjadi prioritas di beli yaitu dari yang paling mahal dahulu
 * 
 *  contoh: 
 *  1. Belanjaan: [[20000, "bola"], [15000, "sepatu"], [50000, "susu"]] 
 *  2. Uang: 65000
 * 
 *  Maka barang yang dapat di beli adalah 
 *  Output: ['susu', 'sepatu']
 * 
 *  RULES:
 *  - Dilarang menggunakan OBJEK
 *  - Dilarang menggunakan .filter, .map, Math.max(), .sort, Math.min()
 */

function belanja (belanjaan, uang) {

  /**
   * ALGORITMA:
   * 
   * belanja(belanjaan, uang):
   *   ans = []
   *   belanjaan = belanjaan.sort()
   *   for i = 0 to belanjaan.length - 1
   *     if uang > belanjaan[i][0]
   *       uang -= belanjaan[i][0]
   *       ans.push(belanjaan[i][1])
   *   return ans
   */
  let ans = []

  for (let i = 0; i < belanjaan.length; i++) {
    for (let j = 0; j < belanjaan.length - i - 1; j++) {
      if (belanjaan[j + 1][0] > belanjaan[j][0]) {
        [belanjaan[j + 1], belanjaan[j]] = [belanjaan[j], belanjaan[j + 1]];
      }
    }
  }
  
  for (let i = 0; i < belanjaan.length; i++) {
    if (uang > belanjaan[i][0]) {
      uang -= belanjaan[i][0];
      ans.push(belanjaan[i][1]);
    }
  }

  if (ans == 0) {
    return 'Tidak ada yang bisa dibeli'
  }

  return ans;
}

// function bubbleSort(belanjaan) {
  // return belanjaan;
// }

// console.log(bubbleSort([2, 7, 5, 9, 4, 1]));

console.log(belanja([[150000, "Batik Jawa"],[250000, "Wayang"],[30000, "Gantungan Kunci"]], 410000))
// ["Wayang", "Batik Jawa"]
console.log(belanja([[70000, "KFC"], [14000, "Bakso"], [20000, "Ayam Penyet"]], 85000))
// ["KFC", "Bakso"]
console.log(belanja([[200000, "Avanza"], [500000, "Innova"], [450000, "Terios"]], 150000))
// Tidak ada yang bisa dibeli
console.log(belanja([[45000, "Starbucks"], [23000, "Jus Alpukat"], [10000, "Marimas"]], 100000))
//["Starbucks", "Jus Alpukat", "Marimas"]