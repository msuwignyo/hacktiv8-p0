// Logic Challenge - X and O

function xo(str, count_x=0, count_o=0) {
  if (str == 0) {
    return count_x === count_o;
  }

  const temp = str[0];

  switch(temp) {
    case 'x': count_x++; break;
    case 'o': count_o++; break;
  }

  return xo(str.slice(1), count_x, count_o);
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true