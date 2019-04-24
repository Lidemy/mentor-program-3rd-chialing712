function capitalize(str) {
  var a = str[0].toUpperCase() + str.substr(1,str.length-1)
  return a
}
console.log(capitalize('hello'));
