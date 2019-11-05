// Week 04 - Exercises 04
// Cari Modus

function cariModus(arr) {

    let dict = {};
    let modus = [];
    arr.sort((a, b) => a - b);

    for (let item of arr) {
        if (dict[item] === undefined) {
            dict[item] = 1;
        } else {
            dict[item]++;
        }

        if (modus == 0 ||
            modus[1] < dict[item]) {
            modus = [item, dict[item]];
        }
    }

    let dictValues = Object.values(dict);

    if (dictValues.length === 1) { return -1; }


    // cek apakah dictValues nilainya uniform?
    // contoh:
    // [ 1, 1, 1, 1, 1 ] --> uniform
    // [ 1, 2, 1, 1 ] --> tidak uniform
    
    let checkUniformity = (item, ix, arr) => {
        return item === arr[0];
    };
    
    if (dictValues.every(checkUniformity)) {
        return -1;
    }

    return modus[0];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1