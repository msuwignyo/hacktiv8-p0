// Week 03 - Exercises 12
// Deret Geometri

function tentukanDeretGeometri(arr, a) {
  if (arr.length === 1) {
    return true;
  }

  const temp = arr.shift();

  if (a === undefined || (arr[0] / temp) === a) {
    a = arr[0] / temp;
  } else {
    return false;
  }

  return tentukanDeretGeometri(arr, a);
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false