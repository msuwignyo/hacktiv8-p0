/**
 * =======
 * MatchIn
 * =======
 * 
 * [Description]
 * matchIn merupakan sebuah function yang menerima data berupa object pelamar ( @applicant )
 * dan mengembalikan sebuah array berisi perusahaan apa saja yang memenuhi kualifikasi
 * pelamar tersebut dan skill apa saja yang sesuai dengan kebutuhan perusahaan yang dilamar
 * 
 * Berikut adalah data dari masing-masing perusahaan:
 * | Company Name | Required Skills                          | Job Experience (years) |
 * | ------------ | ---------------------------------------- | ---------------------- |
 * | PT ABC       | XML, Kotlin, HTML, C++, Java, Javascript |            5           |
 * | PT HIJ       | Python, Javascript, HTML                 |            3           |
 * | PT JKL       | C++, Java                                |            1           |
 * | PT XYZ       | Golang, Java, JQuery                     |            2           |
 * | PT KLM       | Python, Javascript, HTML                 |            4           |
 * 
 * Adapaun kriteria minimal yang dibutuhkan pelamar untuk memenuhi kualifikasi adalah:
 * 1. Memiliki minimal 2 skill yang sama dengan perusahaan
 * 2. Memiliki pengalaman kerja yang sama/lebih besar dari perusahaan
 * 
 * [Example]
 *  @applicant = {
 *    name: 'Yusuf',
 *    skills: ['Javascript', 'HTML'],
 *    experience: 3
 *  }
 *   
 * Penjelasan:
 * - Tidak masuk PT ABC => hanya punya javascript dan pengalaman < 5 tahun
 * - Masuk PT HIJ => memiliki skill yang cocok (javascript & html) dan pengalaman 3 tahun
 * - Tidak masuk PT JKL => Tidak memiliki skill yang cocok
 * - Tidak masuk PT XYZ => Tidak memiliki skill yang cocok
 * - Tidak masuk PT KLM => hanya memiliki skill javascript dan pengalaman < 4 tahun
 * 
 * Maka:
 * @output = [
 *   {
 *     companyName: 'PT HIJ',
 *     matchedSkills: ['Javascript', 'HTML']
 *   }
 * ]
 * 
 * [Rules]
 * 1. DILARANG menggunakan built in function: map, reduce, filter
 * 2. Skill dalam key matchedSkills tidak perlu berurut sesuai test case selama skill yang cocok sesuai
 */


function matchIn(applicant) {

  /**
   * yang kita ketahui sampai sejauh ini:
   * - loop tiap data perusahaan
   *   - cek apakah pengalaman kerja aplicant >= dari permintaan
   *     - jika ya, silahakan maju ke line berikutnya,
   *     - jika tidak, skip!
   *   - cek apakah persyarataan sesuai minimal 2?
   *     - jika ya, nama perusahaan dimasukkan!
   *     - jika tidak, skip!
   */


  // biar ga bingung
  // data perusahaan
  // indeks 0 untuk nama perusahaan
  // indeks 1 untuk nama teknologi
  // indeks 2 untuk minimal pengalaman kerja
  const dataPerusahaan = [
    ['PT ABC', ['XML', 'Kotlin', 'HTML', 'C++', 'Java', 'Javascript'], 5],
    ['PT HIJ', ['Python', 'Javascript', 'HTML'], 3],
    ['PT JKL', ['C++', 'Java'], 1],
    ['PT XYZ', ['Golang', 'Java', 'JQuery'], 2],
    ['PT KLM', ['Python', 'Javascript', 'HTML'], 4]
  ]

  const out = [];
  for (perusahaan of dataPerusahaan) {
    // cek pengalaman kerja
    if (applicant.experience < perusahaan[2]) { continue; }

    // hitung berapa banyak teknologi yg dikuasainya
    let skillYangCocok = [];
    for (skillYangDiminta of perusahaan[1]) {
      for (applicantSkill of applicant.skills) {
        if (applicantSkill === skillYangDiminta) {
          skillYangCocok.push(applicantSkill);
        }
      }
    }

    // cek skillnya
    if (skillYangCocok.length >= 2) {
      out.push({
        companyName: perusahaan[0],
        matchedSkills: skillYangCocok
      });
    }
  }

  return out == 0 ? 'Unqualified!' : out;
}

var applicant1 = {
  name: 'Alpha',
  skills: ['Android', 'Kotlin', 'XML', 'Python', 'PHP'],
  experience: 5
}
console.log(matchIn(applicant1))
// [
//   { companyName: 'PT ABC', matchedSkills: [ 'XML', 'kotlin' ] },
// ]

var applicant2 = {
  name: 'Beta',
  skills: ['PHP', 'HTML', 'CSS', 'JQuery', 'Python'],
  experience: 1
}
console.log(matchIn(applicant2))
// Unqualified!

var applicant3 = {
  name: 'Charlie',
  skills: ['HTML', 'Photoshop', 'CSS', 'Javascript'],
  experience: 7
}
console.log(matchIn(applicant3))
// [
//   { companyName: 'PT ABC', matchedSkills: ['HTML', 'Javascript'] },
//   { companyName: 'PT HIJ', matchedSkills: ['Javascript', 'HTML'] },
//   { companyName: 'PT KLM', matchedSkills: ['Javascript', 'HTML'] }
// ]

var applicant4 = {
  name: 'Delta',
  skills: ['Python', 'PHP', 'C++', 'Javascript'],
  experience: 3
}
console.log(matchIn(applicant4))
// [
//   { companyName: 'PT HIJ', matchedSkills: ['Python', 'Javascript'] }
// ]