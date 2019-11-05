// Week 04 - Exercises 05
// Ubah Huruf

function ubahHuruf(kata) {

    let res = '';
    for (let i = 0; i < kata.length; i++) {
        res += String.fromCharCode(kata[i].charCodeAt() + 1);
    }

    return res;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu