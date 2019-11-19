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
  return [...new Set([...firstData, ...secondData])];
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