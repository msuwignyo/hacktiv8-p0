// Week 05 - Exercises 02
// Password Generator

function changeVocals(str) {
  if (str == 0) {
    return '';
  }

  const vowels = ['a', 'A', 'i', 'I', 'u', 'U', 'e', 'E', 'o', 'O'];
  let temp = str[0];
  
  for (let v of vowels) {
    if (temp === v) {
      temp = String.fromCharCode(temp.charCodeAt() + 1);
      break;
    }
  }

  return temp + changeVocals(str.slice(1));
}

function reverseWord(str) {
  if (str == 0) {
    return '';
  }

  return reverseWord(str.slice(1)) + str[0];
}

function isLowerCase(char) {
  return char.charCodeAt() >= 'a'.charCodeAt() &&
    char.charCodeAt() <= 'z'.charCodeAt();
}

function isUpperCase(char) {
  return char.charCodeAt() >= 'A'.charCodeAt() &&
    char.charCodeAt() <= 'Z'.charCodeAt();
}

function setLowerUpperCase(str) {
  let temp = str.split('');
  temp = temp.map((item) => {
    if (isLowerCase(item)) {
      return item.toUpperCase();
    } else if (isUpperCase(item)) {
      return item.toLowerCase();
    } else {
      return item;
    }
  });

  return temp.join('');
}

function removeSpaces(str) {
  let temp = str.split('');
  temp = temp.filter((item) => {
    return item !== ' ';
  })

  return temp.join('');
}

function passwordGenerator(name) {
  // proteksi
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  let ans = changeVocals(name);
  ans = reverseWord(ans);
  ans = setLowerUpperCase(ans);
  ans = removeSpaces(ans);

  return ans;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'