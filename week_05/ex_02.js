// Week 05 - Exercises 02
// Password Generator

function changeVocals(str) {
    let ans = '';
    for (let char of str) {
        switch (char) {
            case 'a': ans += 'b'; break;
            case 'i': ans += 'j'; break;
            case 'u': ans += 'v'; break;
            case 'e': ans += 'f'; break;
            case 'o': ans += 'p'; break;
            case 'A': ans += 'B'; break;
            case 'I': ans += 'J'; break;
            case 'U': ans += 'V'; break;
            case 'E': ans += 'F'; break;
            case 'O': ans += 'P'; break;
            default : ans += char; break;
        }
    }

    return ans;
}

function reverseWord(str) {
    let ans = '';

    for (let i = str.length - 1; i >= 0; i--) {
        ans += str[i];
    }

    return ans;
}

function isLowerCase(char) {
    return char.charCodeAt() >= 'a'.charCodeAt() && 
           char.charCodeAt() <= 'z'.charCodeAt();
}

function isUpperCase(char) {
    return char.charCodeAt() >= 'A'.charCodeAt() && 
           char.charCodeAt() <= 'Z'.charCodeAt();
}

function setLowerUpperCase(str) {

    let temp = str.split('');
    temp = temp.map((item) => {
        if (isLowerCase(item)) {
            return item.toUpperCase();
        } else if (isUpperCase(item)) {
            return item.toLowerCase();
        } else {
            return item;
        }
    });

    return temp.join('');
}

function removeSpaces(str) {
    let temp = str.split('');
    temp = temp.filter((item) => {
        return item !== ' ';
    })

    return temp.join('');
}

function passwordGenerator(name) {

    // proteksi
    if (name.length < 5) { return 'Minimal karakter yang diinputkan adalah 5 karakter'; }

    let ans = changeVocals(name);
    ans = reverseWord(ans);
    ans = setLowerUpperCase(ans);
    ans = removeSpaces(ans);
    return ans;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'