// Week 03 - Exercises 11
// Deret Aritmatika

function tentukanDeretAritmatika(arr, a=undefined) {
  if (arr.length === 1) {
    return true;
  }

  const temp = arr.shift();

  if (a === undefined || (arr[0] - temp) === a) {
    a = arr[0] - temp;
    return tentukanDeretAritmatika(arr, a);
  }
  
  return false;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false