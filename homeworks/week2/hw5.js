function join(str, concatStr) {
	x = [];
	for(var i = 0; i < str.length; i++){
		y = str[i]+concatStr
		x = x + y
		
	}

  return x;
}

function repeat(str, times) {
 var n = []
 var multiply = []
 while(n < times){
 	multiply = multiply + str
 	n++;
 }
  return multiply;ddd
}

console.log(join([1,2,3], '!'));
console.log(repeat('yoyo', 2));
