const RandomTime = Math.random() * 3000;
let ClickTIme = '';
let StartTime = '';
const element = document.querySelector('body');
const mybutt = document.querySelector('#mybutt');

function colorChange() {
  element.style.background = 'orange';
}

function Iclick() {
  ClickTIme = Date.now(); // 按下按鈕之後的時間
  // console.log('clicktime', ClickTIme);
  // console.log('difference', (ClickTIme - StartTime) / 1000);
  // console.log('random', RandomTime / 1000);
  const difference = (ClickTIme - StartTime) / 1000;
  const RandomTimeSec = RandomTime / 1000;
  const DisTanceBetweenClick = difference - RandomTimeSec;

  if (difference < RandomTimeSec) {
    alert('too early'); // eslint-disable-line no-alert
    mybutt.style.visibility = 'visible';
  } else if (difference >= RandomTimeSec) {
    alert(`好強!，你離變顏色的距離 = ${DisTanceBetweenClick.toFixed(2)}秒`); // eslint-disable-line no-alert
    mybutt.style.visibility = 'visible';
  }
  window.removeEventListener('click', Iclick); // 移除 Iclick 事件
}

function restart() {
  StartTime = Date.now();
  element.style.background = 'white';
  mybutt.style.visibility = 'hidden';
  setTimeout(colorChange, RandomTime);
  window.addEventListener('click', Iclick);
}

StartTime = Date.now();
element.style.background = 'white';
mybutt.style.visibility = 'hidden';
setTimeout(colorChange, RandomTime);
window.addEventListener('click', Iclick);
mybutt.addEventListener('click', (e) => {
  restart();
  e.stopPropagation();
});
