// Week 04 - Exercises 14
// Naik Angkot

function naikAngkot(arrPenumpang) {
    
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    let petaRute = {};
    for (let i = 0; i < rute.length; i++) {
        petaRute[rute[i]] = i;
    }

    let result = [];
    for (let data of arrPenumpang) {
        let biayaTempuh = (petaRute[data[2]] - petaRute[data[1]]) * 2000;
        result.push({
            penumpang: data[0],
            naikDari: data[1],
            tujuan: data[2],
            bayar: biayaTempuh
        });
    }

    return result;
}

// TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]