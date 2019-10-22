// Logic Challenge - Balik Kata

function balikKata(kata) {
    let n = kata.length;
    let reverseString = '';
    for (let i = n - 1; i >= 0; i--) {
        reverseString += kata[i];
    }
    return reverseString;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS