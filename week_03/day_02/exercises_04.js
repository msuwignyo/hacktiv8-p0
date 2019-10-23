// Menggunakan Built-in Function pada Array

function dataHandling2(input) {
    // buang hobi
    input.pop();
    // push 2 item baru
    input.push('Pria', 'SMA Internasional Metro');
    console.log(input);

    // ambil TIL-nya
    let til = input[3];
    // kita mau pisah tanggal, bulan, sama tahun
    til = til.split('/');
    // kopi til
    til_copy = [...til];
    
    // sort menurun, warning fungsi sort inplace item-nya
    console.log(til.sort(function(a, b) { return b - a}));

    // join pake sep -
    console.log(til_copy.join('-'));

    // print nama tapi cuman 15 char aja
    console.log(input[1].slice(0, 16));
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);