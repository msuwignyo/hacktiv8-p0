/**
 *  Cari kemiripan
 * 
 *  Function ini menerima 2 inputan:
 *  1. Array yang berisikan kata2 random,
 *  2. String yang berisikan sebuah kata
 * 
 *  Function ini akan mencarikan ISI dari array INPUT yang mengandung INPUT STRING
 * 
 *  contoh: 
 *  input array: ['ola ramlan', 'coca cola', 'soba', 'caca']
 *  input string: 'ola
 * 
 *  maka output dari function ini yaitu berupa array yang mengandung kata yang mirip dengan 
 *  string tersebut yaitu 'ola'
 * 
 *  output: ['ola ramlan', 'coca cola']
 * 
 *  [RULE] 
 *  1. dilarang menggunakan indexOf(), find(), filter() 
 *  2. dilarang menggunakan regex
 * 
 */

function cariKemiripan (arr, kata) {

  /**
   * ALGORITMA:
   * 
   * cariKemiripan(arr, kata):
   *   ans = []
   *   for i = 0 to arr.length
   *     for j = 0 to arr[i].length - kata + 1
   *       if arr[i][j..j+kata-1] == kata
   *         ans.push(arr[i])
   *         break
   */

  let ans = []

  for (let item of arr) {
    for (let i = 0; i < item.length - kata.length + 1; i++) {
      let isSame = true
      for (let j = 0; j < kata.length; j++) {
        if (item[i + j] !== kata[j]) {
          isSame = false
        }
      }

      if (isSame) {
        ans.push(item);
        break;
      }
    }
  }

  return ans;
}

console.log(cariKemiripan(['bola', 'ola ramlan', 'sholat', 'gajah', 'fanta'], 'ola'))
//["bola", "ola ramlan", "sholat"]
console.log(cariKemiripan(['kata', 'atta halilintar', 'hatta', 'bata', 'fanta'], 'atta'))
//["atta halilintar", "hatta"]