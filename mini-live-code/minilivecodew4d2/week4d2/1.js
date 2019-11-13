/**
 * 
 *  Array merge
 *  
 *  Function ini menggabungkan 2 array inputan menjadi satu array
 *  hasil output dari function ini adalah gabungan dari 2 array yang isinya tidak ada yang sama
 *  contoh : ['sergei', 'jin'], ['jin', 'steve', 'bryan']
 * 
 *  makan outputnya: ['sergei', 'jin', 'steve', 'bryan']
 *
 *  rules: 
 *  - Dilarang menggunakan regex dll
 *  - Dilarang menggunakan indexOf / include
 *  - Dilarang menggunakan .map .filter .sort dll
 *  - Hanya boleh menggunakan push, unshift kondisional
 * 
 */

function arrayMerge (firstData, secondData) {
  /**
   * ALGORITMA
   * 
   * arrayMerge(arr1, arr2)
   *   ans = []
   *   for i = 0 to arr1.length
   *     ans[i] = arr1[i]
   *   isDuplicate = false
   *   for i = 0 to arr2.length
   *     for j = 0 to arr1.length
   *       if arr2[i] == ar1[j]
   *         isDuplicate = true
   *     if !isDpulicate
   *       ans.push(arr2[i])
   *   return ans
   */

  let ans = [];
  ans = [...firstData];
  for (let item1 of secondData) {
    let isDuplicate = false
    for (let item2 of firstData) {
      if (item1 === item2) {
        isDuplicate = true;
      }
    }
    if (!isDuplicate) {
      ans.push(item1);
    }
  }
  return ans;

}

// Test cases
console.log(arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']));
// // ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

console.log(arrayMerge(['sergei', 'jin'], ['jin', 'steve', 'bryan']));
// // ['sergei', 'jin', 'steve', 'bryan']

console.log(arrayMerge(['alisa', 'yoshimitsu'], ['devil jin', 'yoshimitsu', 'alisa', 'law']));
// // ['alisa', 'yoshimitsu', 'devil jin', 'law']

console.log(arrayMerge([], ['devil jin', 'sergei']));
// // ['devil jin', 'sergei']

console.log(arrayMerge(['hwoarang'], []));
// // ['hwoarang']

console.log(arrayMerge([], []));
// // []