function birthYear(num) {
    if (typeof num === 'number') {
        return 2019 - num;
    }
    return 'Invalid Birth Year'; 
}

function changeMe(arr) {
    for (let i = 0; i < arr.length; i++) {
        let obj = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: birthYear(arr[i][3])
        };
        console.log(`${i+1}. ${obj.firstName} ${obj.lastName}`);
        console.log(obj);
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""