// Week 05 - Exercises 07
// Melee Ranged Grouping

function meleeRangedGrouping(str) {
    
    if (str == 0) {
        return [];
    }

    str = str.split(',')
    
    let ans = {};
    for (let item of str) {
        let temp = item.split('-');
        // console.log(temp[1])
        if (ans[temp[1]] === undefined) {
            ans[temp[1]] = [];
        }
        ans[temp[1]].push(temp[0]);
    }

    let buff = [];
    for (let item in ans) {
        buff.push(ans[item]);
    }

    return buff;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []