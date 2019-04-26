function join(str, concatStr) {
  let x = [];
  for (let i = 0; i < str.length; i += 1) {
    const y = str[i] + concatStr;
    x += y;
  }

  return x;
}

function repeat(str, times) {
  let n = [];
  let multiply = [];
  while (n < times) {
    multiply += str;
    n += 1;
  }
  return multiply;
}

console.log(join([1, 2, 3], '!'));
console.log(repeat('yoyo', 2));
