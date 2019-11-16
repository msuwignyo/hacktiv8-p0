// Week 03 - Exercises 06
// Palindrome Angka

function isPalindrome(num) {
  let temp = String(num)

  if (temp.length === 1) {
    return true;
  }

  const digitDepan = temp[0];
  const digitBelakang = temp[temp.length - 1];

  if (digitDepan === digitBelakang) {
    return isPalindrome(Number(temp.slice(1, temp.length - 1)));
  }
  
  return false;
}

function angkaPalindrome(num) {  
  num++;

  if (isPalindrome(num)){
    return num;
  }

  return angkaPalindrome(num);
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001