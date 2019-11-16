// Week 03 - Exercises 08
// Pasangan Angka Terbesar

function pasanganTerbesar(num, maxNum=Number.NEGATIVE_INFINITY) {
  if (num < 10) {
    return maxNum;
  }

  const temp = String(num);
  const [a, b] = temp.slice(0, 2);

  if (maxNum < Number(a + b)) {
    maxNum = Number(a + b);
  }

  return pasanganTerbesar(Number(temp.slice(1)), maxNum);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99