// Week 03 - Exercises 02
// Tantangan Array 1 (Mengakses Nilai Dalam Array)

function balikString(str) {
  if (str == 0) {
    return '';
  }
  
  return balikString(str.slice(1)) + str[0];
}

console.log(balikString('hello world!'));