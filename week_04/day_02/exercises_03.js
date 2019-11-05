// Week 04 - Exercises 03
// Cari Median

function cariMedian(arr) {
    if (arr.length % 2 == 0) { // kalau besar array genap
        let posisiTengah = arr.length / 2;
        return (arr[posisiTengah - 1] + 
                arr[posisiTengah]) / 2;
    } else {
        let posisiTengah = Math.ceil(arr.length / 2);
        return arr[posisiTengah - 1];
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5