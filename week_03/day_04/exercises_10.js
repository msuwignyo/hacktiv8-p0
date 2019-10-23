// Logic Challenge - Perkalian Unik

function perkalianUnik(arr) {
    let n = arr.length;

    let res = [];
    for (let i = 0; i < n; i++) {
        // selalu ambil elemen pertama
        let temp = arr.shift();
        
        // kalikan elemen yg tersisa
        let buff = 1;
        for (let j = 0; j < n - 1; j++) {
            buff *= arr[j];
        }

        // masukkan hasil kle res
        res.push(buff);

        // elemen pertama dimasukkan paling belakang
        arr.push(temp);
    }

    return res;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]