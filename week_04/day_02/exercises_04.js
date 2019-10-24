// Logic Challenge - Mencari Modus
// NOT FINISH YET!

function cariModus(arr) {

    // let dict = null;

    // for (let i = 0; i < arr.length; i++) {
    //     // inisialisasi dict jika masih null
    //     if (dict === null) { dict = {}; }

    //     // cek apakah kunci ada?
    //     // kalau ada, nilainya tambah 1
    //     // kalau tidak ada, masukkan kunci dan nilai 1
    //     if (dict[arr[i]] === undefined) {
    //         dict[arr[i]] = 1;
    //     } else {
    //         dict[arr[i]]++;
    //     }
    // }

    // console.log(dict);
    // let max_value = [];
    // let max_index = [];
    // for (let key in dict) {
    //     if (max_value == 0 || max_value[0] < dict[key]) { 
    //         max_value.push(dict[key]);
    //         max_index.push(key);
    //     }
    // }

    // console.log(max_value);
    // console.log(max_index);
    // console.log();

    

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

    console.log(myMap);

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