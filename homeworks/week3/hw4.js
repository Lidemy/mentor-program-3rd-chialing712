function isPalindromes(str) {
  let same = '';
  let same1 = '';
  for (let i = 0; i < str.length; i += 1) {
    same = same + str.charAt(i) + str.charAt(str.length - i - 1);
  }
  for (let g = 0; g < str.length; g += 1) {
    same1 += str.charAt(g).repeat(2);
  }
  if (same === same1) {
    return true;
  }
  return false;
}

console.log(isPalindromes('abcba'));
console.log(isPalindromes('apple'));
console.log(isPalindromes('aaaaa'));
console.log(isPalindromes('applppa'));
module.exports = isPalindromes;
