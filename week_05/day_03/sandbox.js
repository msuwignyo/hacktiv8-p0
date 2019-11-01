function pirusRekurcip(str, virus) {
    
    // proteksi jika virus tak terdifinisi
    // dan str kosong
    if (virus === undefined ||
        str === "") {
        return 'There is no virus';
    }

    // kondisi henti rekursif
    if (virus == 0) {
        return 0;
    }

    return str.toLowerCase()
        .split('')
        .map((item) => {
            return item === virus.toLowerCase()[0] ? 1 : 0;
        }).reduce((acc, curr) => acc + curr) +
        pirusRekurcip(str, virus.slice(2));
}
// BELUM NGERTI
console.log(pirusRekurcip("qlD4MZax0raQqew", "x|0|q")); // 5
console.log(pirusRekurcip("HH0NBP1zRa", "h|r")); // 3
console.log(pirusRekurcip("4O4TmIF6ONaiMlzpXxPqwy", "4|X|p")); // 6
console.log(pirusRekurcip("mjBgPlzks", "m")); // 1
console.log(pirusRekurcip("AIn4Ks05bBaa", "x")); // 0
console.log(pirusRekurcip("RsMFjBUjvIaP")); // There is no virus
console.log(pirusRekurcip("")); // There is no virus