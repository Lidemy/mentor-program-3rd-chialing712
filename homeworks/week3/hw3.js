function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i < n - 1; i += 1) {
    if (n % i === 0) { return false; }
  }
  return true;
}


for (let g = 0; g < 38; g += 1) {
  console.log(g, isPrime(g));
}


console.log(isPrime(38));

module.exports = isPrime;
