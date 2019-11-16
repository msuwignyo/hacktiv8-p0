// Week 04 - Exercises 14
// Naik Angkot

function naikAngkot(arrPenumpang) {
  if (arrPenumpang == 0) {
    return [];
  }

  const temp = arrPenumpang.shift()
  const [penumpang, naikDari, tujuan] = temp;
  const biaya = (tujuan.charCodeAt() - naikDari.charCodeAt())*2000;
  const result = [{
    penumpang: penumpang,
    naikDari: naikDari,
    tujuan: tujuan,
    bayar: biaya
  }, ...naikAngkot(arrPenumpang)];

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