// Week 03 - Exercises 09
// Cari Mean

function sumArray(arr) {
  if (arr == 0) {
    return 0;
  }

  return arr[0] + sumArray(arr.slice(1));
}

function cariMean(arr) {
  return Math.ceil(sumArray(arr) / arr.length);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7