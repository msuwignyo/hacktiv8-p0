// Game Proxytia
// Hacktiv8 Phase 0
// Week 2 - Day 2

let nama = 'Zero';
let peran = 'Penyihir';

// proteksi kalau nama sama peran kosong
if (nama == 0) {
    console.log('Nama harus diisi!');
} else if (peran == 0) {
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
} else {
    // sampai disini nama dan peran harusnya sudah ada
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);

    switch (peran) {
        case 'Ksatria':
            console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);
            break;

        case 'Tabib':
            console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`);
            break;
    
        default:
            console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
            break;
    }
}