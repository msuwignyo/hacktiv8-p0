// Week 04 - Exercises 01
// Angka Prima (Recursive Version)

function angkaPrima(angka, divider=2) {
    if (angka < 2) { 
        return false; 
    }

    if (angka === divider) {
        return true;
    }

    if (angka % divider === 0) {
        return false;
    }

    return angkaPrima(angka, divider+1);
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false