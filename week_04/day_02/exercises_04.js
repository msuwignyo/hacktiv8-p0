// Logic Challenge - Mencari Modus

function cariModus(arr) {
    let myMap = null;

    for (let i = 0; i < arr.length; i++) {
        // inisialisasi myMap kalau masih null
        if (myMap === null) { myMap = new Map(); }
        
        // cek apakah kunci ada?
        // kalau ada, nilai-nya tambah 1
        // kalau tidak ada, tambah kunci serta nilai 1
        if (myMap.has(arr[i])) {
            myMap.set(arr[i], myMap.get(arr[i]) + 1);
        } else {
            myMap.set(arr[i], 1);
        }
    }

    let max = 0;
    let index = 0;
    for (let key of myMap.keys()) {
        if (myMap.get(key) > max) { 
            max = myMap.get(key);
            index = key;
        }
    }

    return index;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1