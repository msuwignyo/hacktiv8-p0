// Week 04 - Exercises 06
// Digit Perkalian Minimum

function digitPerkalianMinimum(angka) {
    
    let list = [];

    let bag = new Set();

    for (let i = 1; i <= angka; i++) {
        if (angka % i == 0 && !bag.has(i) && !bag.has(angka/i)) {
            bag.add(i);
            bag.add(angka/i);
            list.push([i, angka/i]);
        }
    }

    let temp = list[list.length - 1];
    let buff = '';
    for (let i = 0; i < temp.length; i++) {
        buff += temp[i];
    }

    return buff.length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2