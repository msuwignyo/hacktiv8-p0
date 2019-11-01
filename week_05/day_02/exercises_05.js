// Week 05 - Exercises 17
// Kali Terus Rekursif

function intToString(angka) {
    return angka.toString().split('');
}

function kaliTerusRekursif(angka) {

    // end condition
    if (angka < 10) { return angka; }

    let temp = intToString(angka);
    let result = 1;
    
    for (let int of temp) {
        result *= Number(int);
    }

    return kaliTerusRekursif(result);

}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6


/* 

66 ------ 36
36 ------ 18
18 ------ 8

*/