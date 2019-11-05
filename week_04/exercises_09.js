// Week 04 - Exercises 09
// Cek AB

function checkAB(num) {

    // index 0 -- a, index 1 -- b
    let location = [[], []];

    for (let i = 0; i < num.length; i++) {
        if (num[i] === 'a') { location[0].push(i)}
        if (num[i] === 'b') { location[1].push(i)}
    }

    let result = false;
    
    for (let loc_a of location[0]) {
        for (let loc_b of location[1]) {
            if (Math.abs(loc_a - loc_b) === 4) {
                result = true;
            }
        }
    }

    return result;

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
