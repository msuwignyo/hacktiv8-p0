function isUpperCase(char) {
    // 'A' -- 65
    // 'Z' -- 90
    // 'a' -- 97
    // 'z' -- 122
    return char.charCodeAt() >= 65 &&
           char.charCodeAt() <= 90;
}

function tukarBesarKecil(kalimat) {

    let res = '';
    for (let char of kalimat) {
        if (isUpperCase(char)) {
            res += char.toLowerCase();
        } else {
            res += char.toUpperCase();
        }
    }

    return res;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"