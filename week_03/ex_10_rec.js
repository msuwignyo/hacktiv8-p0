// Week 03 - Exercises 10
// Perkalian Unik

function perkalian(arr) {
  if (arr == 0) {
    return 1;
  }
  
  const temp = arr.shift();
  
  return temp * perkalian(arr);
}

function perkalianUnik(arr, out=[]) {
  if (out.length === arr.length) {
    return out;
  }

  const temp = arr.shift();
  const result = perkalian([...arr])

  out.push(result);
  arr.push(temp);

  return perkalianUnik(arr, out);
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]