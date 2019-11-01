// Week 05 - Exercises 16
// Total Digit Rekursif

function totalDigitRekursif(angka) {
    let temp = Math.floor(angka / 10);
    let accumulator = angka % 10;
    if (temp === 0) {
        return accumulator;
    } else {
        return accumulator + totalDigitRekursif(temp);
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5


/* 

512 // 10 === 51   --- return 512 % 10 = 2
51  // 10 === 5    --- return 51  % 10 = 1
5   // 10 === 0    --- return 5   % 10 = 5

*/