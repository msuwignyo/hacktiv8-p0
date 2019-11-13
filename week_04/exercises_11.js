// Week 04 - Exercises 11
// Shopping Time!

function belanja(money) {

    const listHarga = [
        ['Sepatu Stacattu', 1500000], 
        ['Baju Zoro', 500000], 
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000], 
        ['Casing Handphone', 50000]
    ];

    let listBelanjaan = [];
    for (let item of listHarga) {
        if (money >= item[1]) {
            listBelanjaan.push(item[0]);
            money -= item[1];
        }
    }

    return [listBelanjaan, money];
}

function shoppingTime(memberId = 0, money = 0) {

    // proteksi member
    if (memberId == 0) { return 'Mohon maaf, toko X hanya berlaku untuk member saja'; }

    // proteksi uang kurang
    if (money < 50000) { return 'Mohon maaf, uang tidak cukup'; }

    let listAndChange = belanja(money);

    let obj = {
        memberId: memberId,
        money: money,
        listPurchased: listAndChange[0],
        changeMoney: listAndChange[1]
    }

    return obj;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja