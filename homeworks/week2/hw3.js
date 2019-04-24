x = ''
function reverse(str) {
	for(var i = str.length -1 ; i >= 0; i--){
		x = x + str[i]
	}
  return console.log(x);
}
reverse('1,2,3,2,1');
