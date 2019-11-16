// Week 05 - Exercises 01
// Most Frequent Largest Numbers

function sorting(arrNumber) {
  return arrNumber.sort((a, b) => b - a);
}

function getTotal(arrNumber, maxNumber = undefined, count = 0) {

  if (arrNumber == 0) {
    return maxNumber === undefined ?
        '' :
        `angka paling besar adalah ${maxNumber} dan jumlah kemunculan sebanyak ${count} kali`;
  }

  const temp = arrNumber.shift();

  if (maxNumber === undefined) {
    maxNumber = temp;
  }

  if (maxNumber === temp) {
    count++;
  } else {
    return `angka paling besar adalah ${maxNumber} dan jumlah kemunculan sebanyak ${count} kali`;
  }

  return getTotal(arrNumber, maxNumber, count)
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150, 90]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''