// Week 04 - Exercises 08
// Tukar Ukuran

function isUpperCase(char) {
  return char.charCodeAt() >= 'A'.charCodeAt() &&
         char.charCodeAt() <= 'Z'.charCodeAt();
}

function tukarBesarKecil(kalimat) {
  if (kalimat == 0) {
    return '';
  }

  let result = isUpperCase(kalimat[0]) ?
      kalimat[0].toLowerCase() :
      kalimat[0].toUpperCase();
  
  return result + tukarBesarKecil(kalimat.slice(1));
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"