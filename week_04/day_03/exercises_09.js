function checkAB(num) {
    
    // to store location a or b
    let loc = [];

    for (let ix = 0; ix < num.length; ix++) {
        if (num[ix] === 'a' || num[ix] === 'b') {
            loc.push(ix);
        }
    }

    for (let char1 of loc) {
        for (let char2 of loc) {
            if (Math.abs(char1 - char2) === 4) {
                return true;
            }
        }
    }
    
    return false;

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false