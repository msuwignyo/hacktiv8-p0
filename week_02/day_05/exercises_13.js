// Logic Challenge - X and O

function xo(str) {
    let n = str.length;
    let count_x = 0;
    let count_o = 0;
    for (let i = 0; i < n; i++) {
        if (str[i] === 'x') count_x++;
        if (str[i] === 'o') count_o++;
    }

    return count_x === count_o;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true