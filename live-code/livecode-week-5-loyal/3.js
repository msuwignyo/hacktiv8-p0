/**
 * ======================
 * TRANSFER WINDOW FILTER
 * ======================
 * 
 * Function ini menerima 2 parameter yaitu:
 * 1. list posisi dan range harga pada posisi tersebut yang di inginkan oleh club bola
 * 2. list pemain yang tersedia pada musim transfer window saat ini
 * 
 * Buatlah sebuah proses yang dapat mencari pemain yang memungkinkan dapat dibeli
 * oleh club sesuai range harga pada posisi yang di inginkan.
 * 
 * contoh :
 * scoutlist:
 * [
 *   { pos: "Forward", range: "1000000-2000000" },
 *   { pos: "Midfielder", range: "1500000-1800000" }
 * ]
 *  playerlist:
 * [
 *   { name: "Ronaldo", position: "Forward", price: 1500000 },
 *   { name: "Lampard", position: "Midfielder", price: 2000000},
 *   { name: "Vidal", position: "Midfielder", price: 900000}
 * ]
 *
 * Maka Output yang di harapkan adalah :
 *  [
 *   { pos: "Forward", range: "1000000-2000000", suggestedPlayer = ["Ronaldo"] },
 *   { pos: "Midfielder", range: "1500000-1800000", suggestedPlayer = [] }
 * ]
 * karena pada posisi midfielder walaupun posisi terpenuhi tetapi range harga tidak terpenuhi,
 * maka suggested player tidak ada (array kosong) pada posisi forward karena
 * memiliki posisi yang sama dan harganya memenuhi range, maka
 * suggested player berisi nama pemain yang lolos requirement scoutlist nya
 *
 * RULES:
 * - Dilarang menggunakan .map .filter atau built-in function yang serupa
 * - Boleh menggunakan push unshift pop shift split splice concat
 * - Boleh menggunakan built in function untuk mengubah string menjadi number
 */

function transferWindowFilter(scoutList, playerList) {
  let ans = [];
  for (let scout of scoutList) {
    let tempObj = {};
    tempObj.pos = scout.pos;
    tempObj.priceRange = scout.priceRange;
    tempObj.suggestedPlayer = [];
    let priceLow, priceHigh;
    [priceLow, priceHigh] = tempObj.priceRange.split('-')
    for (let player of playerList) {
      if (player.position === tempObj.pos && 
          player.price >= priceLow && 
          player.price <= priceHigh) {
        tempObj.suggestedPlayer.push(player.name);
      }
    }
    ans.push(tempObj)
  }

  return ans;
}

var scoutPosition1 = [{
    pos: "Midfielder",
    priceRange: "1000000-2000000"
  },
  {
    pos: "Center Back",
    priceRange: "1500000-2000000"
  }
]

var availablePlayer1 = [{
    name: "Cristiano Ronaldo",
    position: "Forward",
    price: 2300000
  },
  {
    name: "Van dijk",
    position: "Center Back",
    price: 3300000
  },
  {
    name: "Cesc Fabregas",
    position: "Midfielder",
    price: 1800000
  },
  {
    name: "Thiago Motta",
    position: "Midfielder",
    price: 1200000
  },
]

console.log(transferWindowFilter(scoutPosition1, availablePlayer1))
// OUTPUT:
// [{ pos: 'Midfielder',
//    priceRange: '1000000-2000000',
//    suggestedPlayer: [ 'Cesc Fabregas', 'Thiago Motta' ] 
//  },
//  { pos: 'Center Back',
//    priceRange: '1500000-2000000',
//    suggestedPlayer: [] 
//  }]


var scoutPosition2 = [{
    pos: "Goalkeeper",
    priceRange: "1800000-3200000"
  },
  {
    pos: "Forward",
    priceRange: "1500000-2000000"
  },
  {
    pos: "Center Back",
    priceRange: "600000-1500000"
  }
]

var availablePlayer2 = [{
    name: "Lionel Messi",
    position: "Forward",
    price: 3000000
  },
  {
    name: "Rio Ferdinand",
    position: "Center Back",
    price: 700000
  },
  {
    name: "Andres Iniesta",
    position: "Midfielder",
    price: 2000000
  },
  {
    name: "De gea",
    position: "Goalkeeper",
    price: 2200000
  },
  {
    name: "Kepa",
    position: "Goalkeeper",
    price: 1000000
  }
]

console.log(transferWindowFilter(scoutPosition2, availablePlayer2))
// OUTPUT:
// [{ pos: 'Goalkeeper',
//   priceRange: '1800000-3200000',
//   suggestedPlayer: [ 'De gea' ] },
// { pos: 'Forward',
//   priceRange: '1500000-2000000',
//   suggestedPlayer: [] },
// { pos: 'Center Back',
//   priceRange: '600000-1500000',
//   suggestedPlayer: [ 'Rio Ferdinand' ] 
// }]