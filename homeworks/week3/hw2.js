function alphaSwap(str) {
  return str.split('').map(char => (char >= 'a' && char <= 'z' ? char.toUpperCase() : char.toLowerCase())).join('');
}
console.log(alphaSwap('abcd'));
console.log(alphaSwap('A1Lkk2'));

module.exports = alphaSwap;
