function stars(n) {
  const arry = [];
  let star = '';

  for (let i = 0; i < n; i += 1) {
    star += '*';
    arry.push(star);
  }
  return arry;
}
console.log(stars(3));
module.exports = stars;
