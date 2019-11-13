// Week 03 - Exercises 05
// Palindrome

function palindrome(kata) {
    let n = kata.length;
    let temp = '';
    for(let i = n - 1; i >= 0; i--) {
        temp += kata[i];
    }

    return kata === temp;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false