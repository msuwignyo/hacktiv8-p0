// Week 04 - Exercises 07
// Urutkan Abjad

function urutkanAbjad(str) {
    return str.split('')  // string to array
              .sort()     // sort the array
              .join('');  // array to string
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'