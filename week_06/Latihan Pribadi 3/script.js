/**
 * Soal:
 * - Buatalh sebuah fungsi JS. Fungsi dipanggil dengan
 *   menambahkan event listener `submit` dan pada 
 *   `<form>`. Function ini berfungsi untuk menghandle
 *   input user dengan peraturan sebagai berikut:
 *     1. Semua elemen tidak boleh kosong
 *     2. Password dan Confirm Password harus sama
 *     3. Email dan Email Confirm harus sama
 */

// var submit = document.getElementById("submit")
// submit.addEventListener('submit', buttonClick);

function validate(e) {
  // semua input harus diisi
  var inputList = document.getElementsByTagName("input");
  var labelList = document.getElementsByTagName("label");
  for (let i = 0; i < inputList.length - 1; i++) {
    if (inputList[i].value == 0) {
      var labelName = labelList[i].textContent;
      alert(`${labelName.slice(0, -1)} ga boleh kosong`);
      return false;
    }
  }

  // password panjang harus minimal 6 karakter
  var pass = document.querySelectorAll("input[type=password]");
  if (pass[0].value.length > 6) {
    alert('Password Minimal 6 Karakter');
    return false;
  }

  // password hanya huruf dan/atau angka saja
  var regex = /\d|\w/
  for (let char of pass[0].value) {
    if (!char.match(regex)) {
      alert('Password Hanya Berupa Huruf dan/atau Angka Saja');
      return false;
    }
  }

  // password harus konsisten
  var pass = document.querySelectorAll("input[type=password]");
  if (pass[0].value !== pass[1].value) {
    alert('Password Harus Konsisten');
    return false;
  }

  // email harus konsisten
  var email = document.querySelectorAll("input[type=email]");
  if (email[0].value !== email[1].value) {
    alert('Email Harus Konsisten');
    return false;
  }

  return true;
}