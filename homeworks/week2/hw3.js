let x = '';
function reverse(str) {
  for (let i = str.length - 1; i >= 0; i -= 1) {
    x += str[i];
  }
  return console.log(x);
}

reverse('1,2,3,2,1');
