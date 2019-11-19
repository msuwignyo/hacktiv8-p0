/**
 * =============
 * Students List
 * =============
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function yang mengelompokkan student berdasarkan phase yang sedang berjalan.
 * 
 * Resctrictions
 * -------------
 * 1. Input berupa array of strings yang berisi nama dan phase dan dipisah dengan strip '-'
 *    Ex: 'yusuf-0'
 * 2. Output merupakan sebuah array yang berisi key berupa masing-masing phase dari 0-3
 * 3. Setiap key menyimpan array of names sesuai dengan input yang diberikan,
 *    Jika ada phase yang kosong (tidak ada student) maka key tersebut menyimpan array kosong []
 * 4. Jika phase kosong, maka hanya mengembalikan object kosong {}
 * 
 * Rules
 * -----
 * 1. Dilarang menggunakan built-in function split, slice, splice, includes, find, findIndex, indexOf
 * 2. Pastikan urutan key sesuai dengan expected output
 */

function getStudents(arr) {

  const ans = [];
  for (let student of arr) {
    let phase = student[student.length - 1];
    let temp = ''
    for (let i = 0; i < student.length - 2; i++) {
      temp += student[i];
    }
    if (ans[phase] === undefined) {
      ans[phase] = []
    }
    ans[phase].push(temp)
  }

  let obj = {}
  for (let i = 0; i < ans.length; i++) {
    let phase = 'phase ' + i;
    if (ans[i] !== undefined) {
      obj[phase] = ans[i];
    } else {
      obj[phase] = [];
    }
  }
  
  return obj;
}

console.log(getStudents(['okka-0', 'maulid-1', 'riko-2', 'bayu-3']))
// {
//   'phase 0': [ 'okka' ],
//   'phase 1': [ 'maulid' ],
//   'phase 2': [ 'riko' ],
//   'phase 3': [ 'bayu' ]
// }

console.log(getStudents([]))
// {}

console.log(getStudents(['serafim-1', 'amalya-0', 'fadhilah-1', 'reka-3', 'vika-2']))
// {
//   'phase 0': [ 'amalya' ],
//   'phase 1': [ 'serafim', 'fadhilah' ],
//   'phase 2': [ 'vika' ],
//   'phase 3': [ 'reka' ]
// }

console.log(getStudents(['yusuf-0', 'fiqi-3', 'adiel-1']))
// {
//   'phase 0': [ 'yusuf' ],
//   'phase 1': [ 'adiel' ],
//   'phase 2': [],
//   'phase 3': [ 'fiqi' ]
// }