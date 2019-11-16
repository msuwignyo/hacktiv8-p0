// Week 03 - Exercises 05
// Palindrome

function palindrome(kata) {

  if (kata.length === 1) {
    return true;
  }

  const charDepan = kata[0];
  const charBelakang = kata[kata.length - 1];

  if (charDepan === charBelakang) {
    return palindrome(kata.slice(1, kata.length - 1));
  }
  
  return false;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false