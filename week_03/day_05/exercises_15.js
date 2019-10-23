// Logic Challenge - Mengelompokkan Hewan

function groupAnimals(animals) {

    const listOfAlphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
    ]

    let result = [];
    for (let i = 0; i < listOfAlphabet.length; i++) {
        let temp = [];
        for (let j = 0; j < animals.length; j++) {
            if (animals[j][0] === listOfAlphabet[i]) {
                temp.push(animals[j]);
            }
        }
        if (temp != 0) { result.push(temp); }
    }

    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]