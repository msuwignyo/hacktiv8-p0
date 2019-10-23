// Mengakses Nilai Dalam Array

function balikString(str) {
    let n = str.length;
    let res = ''
    for (let i = n - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}

console.log(balikString('hello world!'));