// Week 03 - Exercises 10
// Perkalian Unik

function perkalian(arr) {
  if (arr == 0) {
    return 1;
  }

  return arr[0] * perkalian(arr.slice(1));
}

function perkalianUnik(arr) {
  let temp = 0;
  let out = [];

  for (let i = 0; i < arr.length; i++) {
    temp = arr.shift();
    out.push(perkalian(arr));
    arr.push(temp);
  }

  return out;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]