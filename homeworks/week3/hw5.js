const leftpad = require('left-pad');
/* eslint-disable no-param-reassign */
function add(a, b) {
  let carry = '';
  let number = '';
  let words = '';

  if (a.length >= b.length) {
    b = leftpad(b, a.length, '0');
  } else {
    a = leftpad(a, b.length, '0');
  }
  for (let i = 1; i <= a.length; i += 1) {
    number = parseInt(a.charAt(a.length - i), 10) + parseInt(b.charAt(b.length - i), 10) + carry;
    number = number.toString();
    if (number.length > 1) {
      number = number.charAt(1);
      carry = 1;
    } else {
      carry = 0;
    }

    words += number;
    words = words.split('').reverse().join('');
  }
  return words;
}

console.log(add('111111111111111111111111111111111111', '111111111111111111111111111111111111'));
module.exports = add;
