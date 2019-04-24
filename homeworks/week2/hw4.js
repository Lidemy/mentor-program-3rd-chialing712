function printFactor(n) {
	for(var i = 0; i <= n; i++){
		if( n % i ==0){
			console.log(i)
		}
	}
  return n;
}
printFactor(7);
