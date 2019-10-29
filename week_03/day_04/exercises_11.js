// Week 03 - Exercises 11
// Deret Aritmatika

function tentukanDeretAritmatika(arr) {
    let selisih = null;
    for (let i = 0; i < arr.length - 1; i++) {
        if (selisih == null)
            selisih = arr[i + 1] - arr[i];
        let temp = arr[i + 1] - arr[i];
        if (temp !== selisih) {
            return false;
        }
    }
    return true;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false