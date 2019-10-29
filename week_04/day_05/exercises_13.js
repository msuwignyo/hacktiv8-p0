function deepSum(arr, depth = 0) {

    // proteksi jika array kosong di awal
    if (arr.length === 0 && depth === 0) {
        return 'No number'; 
    }

    let result = 0;
    
    if (Array.isArray(arr)) {
        for (let item of arr) {
            result += deepSum(item, depth++);
        }
    }

    if (typeof arr === 'number') {
        result = arr;
    }

    return result;
}

// TEST CASE
console.log(deepSum([
    [
        [4, 5, 6],
        [9, 1, 2, 10],
        [9, 4, 3]
    ],
    [
        [4, 14, 31],
        [9, 10, 18, 12, 20],
        [1, 4, 90]
    ],
    [
        [2, 5, 10],
        [3, 4, 5],
        [2, 4, 5, 10]
    ]
])); // 316

console.log(deepSum([
    [
        [20, 10],
        [15],
        [1, 1]
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [2],
        [9, 11]
    ],
    [
        [3, 5, 1],
        [1, 5, 3],
        [1]
    ],
    [
        [2]
    ]
])); // 156

console.log(deepSum([])); // No number