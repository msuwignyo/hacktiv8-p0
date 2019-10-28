function strToArray(str) {
    let res = [];
    for (let char of str) {
        res.push(char);
    }

    return res;
}

function arrayToStr(arr) {
    let res = '';
    for (let item of arr) {
        res += item;
    }

    return res;
}

function urutkanAbjad(str) {
    
    let arr = strToArray(str);

    arr.sort();

    return arrayToStr(arr);
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'