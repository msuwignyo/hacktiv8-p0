// Week 04 - Exercises 02
// Faktor Persekutuan Terbesar

function findFactors(num) {
    let res = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0)  { res.push(i); }
    }
    return res;
}

function intersection(arr1, arr2) {
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) { 
                res.push(arr1[i]); 
                break;
            }
        }
    }

    return res;
}

function fpb(angka1, angka2) {
    let res = intersection(findFactors(angka1),
                           findFactors(angka2));
    return res[res.length - 1];
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1