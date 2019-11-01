var chess1 = [
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", "R", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", "K", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "]
]

var chess2 = [
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", "R", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["K", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "]
]

function cariPosisiBidak(arr, jenis) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === jenis) {
                return [j, i]
            }
        }
    }
}

function isKudaMakanRatu(a, b) {
    return a[0] === b[0] &&
        a[1] === b[1];
}

function kudaMakanRatu(arr) {
    let posisiKuda = cariPosisiBidak(arr, 'K');
    let posisiRatu = cariPosisiBidak(arr, 'R');

    let petaKuda = [
        [2, 3 ],
        [-2, 3],
        [2, -3],
        [-2, -3],
        [3, 2],
        [3, -2],
        [-3, 2],
        [-3, -2]
    ];

    for (langkah of petaKuda) {
        let posisiKudaNew = [
            posisiKuda[0] - langkah[0],
            posisiKuda[1] - langkah[1]
        ]
        if (isKudaMakanRatu(posisiKudaNew, posisiRatu)) {
            return 'makan';
        }
    }

    return '-1'
}

console.log(kudaMakanRatu(chess1));
console.log(kudaMakanRatu(chess2));