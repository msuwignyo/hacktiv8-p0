// 1. Menyusun Barisan Bintang

var rows1 = 5;

for (let i = 0; i < rows1; i++) {
    console.log('*');
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 2;

for (let i = 0; i < rows2; i++) {
    let row = '';
    for (let j = 0; j < rows2; j++) {
        row += '*'
    }
    console.log(row);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5;

for (let i = 0; i < rows3; i++) {
    let row = '';
    for (let j = 0; j < i + 1; j++) {
        row += '*'
    }
    console.log(row);
}