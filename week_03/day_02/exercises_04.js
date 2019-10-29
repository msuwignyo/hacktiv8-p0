// Week 03 - Exercises 04
// Tantangan Array 3 (Menggunakan Built-in Function pada Array)

function dataHandling2(input) {
    // buang hobi
    input.pop();
    // push 2 item baru
    input.push('Pria', 'SMA Internasional Metro');
    input[1] += 'Elsharawy';
    input[2] = 'Provinsi ' + input[2];
    console.log(input);


    // ambil TIL-nya
    let til = input[3];
    // kita mau pisah tanggal, bulan, sama tahun
    til = til.split('/');
    // kopi til
    til_copy = [...til];

    switch (til_copy[1]) {
        case '01':  console.log('Januari'); break;
        case '02':  console.log('Februari'); break;
        case '03':  console.log('Maret'); break;
        case '04':  console.log('April'); break;
        case '05':  console.log('Mei'); break;
        case '06':  console.log('Juni'); break;
        case '07':  console.log('Juli'); break;
        case '08':  console.log('Agustus'); break;
        case '09':  console.log('September'); break;
        case '10':  console.log('Oktober'); break;
        case '11':  console.log('November'); break;
        case '12':  console.log('Desember'); break;
        default  :  break;
    }

    // sort menurun, warning fungsi sort inplace item-nya
    console.log(til.sort(function(a, b) { return b - a}));

    // join pake sep -
    console.log(til_copy.join('-'));

    // print nama tapi cuman 15 char aja
    console.log(input[1].slice(0, 15));
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);