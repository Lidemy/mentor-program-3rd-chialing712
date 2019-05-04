
function join(str, concatStr) {
  let x = [];
  for (let i = 0; i < str.length; i += 1) {
    const y = str[i] + concatStr;
    x += y;
  }

  return x;
}

function repeat(str, times) {
  let n = 0;
  let multiply = [];
  while (n < times) {
    multiply += str;
    n += 1;
  }
  return multiply;
}

console.log(join([1, 2, 3, 4], ''));
console.log(repeat('a', 5));
