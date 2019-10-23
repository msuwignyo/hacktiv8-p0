function isPalindrome(num) {
    let buff = num.toString();
    let n = buff.length;
    let temp = '';
    for(let i = n - 1; i >= 0; i--) {
        temp += buff[i];
    }

    return temp === buff;
}

function angkaPalindrome(num) {
    while (!isPalindrome(num)) {
        num++;
    }
    return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001