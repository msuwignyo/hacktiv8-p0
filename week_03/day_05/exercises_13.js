// Week 03 - Exercises 13
// Target Terdekat

function targetTerdekat(arr) {
    let index_o = [];
    let index_x = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') { index_o.push(i); }
        if (arr[i] === 'x') { index_x.push(i); }
    }

    let max = 999999;
    for (let i = 0; i < index_o.length; i++) {
        for (let j = 0; j < index_x.length; j++) {
            let temp = Math.abs(index_o[i] - index_x[j]);
            if (temp < max) { max = temp; }
        }
    }

    if (max === 999999) { return 0; }
    return max;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2