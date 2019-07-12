const keyboard = document.querySelector('.keyboard');
const result = document.querySelector('.result');
let numberInScreen = false;
let operatorPressed = false;
let operatorType = '';
let temp = '';
let temp2 = '';
let plusresult = '';
let minusresult = '';

//  console.log(numberInScreen)
keyboard.addEventListener('click', (e) => {
  if (e.target.className === 'number' && operatorPressed === false) {
    temp = result.innerText + e.target.innerText;
    result.innerText = temp;
    console.log(temp);
    numberInScreen = true;
  } else if (e.target.className === 'number' && operatorPressed === true) {
    temp2 = result.innerText + e.target.innerText;
    result.innerText = temp2;
  }
  if (e.target.id === 'AllClear') {
    result.innerText = '';
    numberInScreen = false;
    operatorPressed = false;
    operatorType = '';
  }
  if (e.target.id === 'plus') {
    if (numberInScreen === true) {
      result.innerText = '';
      operatorPressed = true;
      operatorType = 'plus';
    }
  } else if (e.target.id === 'minus') {
    result.innerText = '';
    operatorPressed = true;
  }
  if (operatorPressed === true && numberInScreen === true && e.target.id === 'equal') {
    if (operatorType === 'plus') {
      plusresult = Number(temp) + Number(temp2);
      result.innerText = plusresult;
    } else {
      minusresult = Number(temp) - Number(temp2);
      result.innerText = minusresult;
    }
  }
});
