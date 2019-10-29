// Week 03 - Exercises 08
// Pasangan Angka Terbesar

function pasanganTerbesar(num) {
    let str = num.toString();
    let max = 0;
    let n = str.length;

    for (let i = 0; i < n - 1; i++) {
        let temp = Number(str[i] + str[i + 1]);
        if (temp > max) {
            max = temp;
        }
    }

    return max;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99