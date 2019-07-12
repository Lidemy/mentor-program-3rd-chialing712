const email = document.querySelector('.emailaddress');
const nickname = document.querySelector('.nickname');
const submit = document.querySelector('.submit');
const warning = document.querySelectorAll('.warning');
const formblock = document.querySelectorAll('.formblock');
const application = document.querySelector('#application');
const application2 = document.querySelector('#application2');
const occupation = document.querySelector('.occupation');
const plan = document.querySelector('.plan');
const experience = document.querySelector('.experience');
const applicationtype = [];
const other = document.querySelector('.other');
let fillform = true; // 判斷是否有沒有填乾淨


function emailfunction() {
  if (email.value === '') {
    alert('要填乾淨');// eslint-disable-line no-alert
    warning[0].style.visibility = 'visible';
    formblock[0].classList.add('active');
    fillform = false;
    alert('email要填');// eslint-disable-line no-alert
  } if (nickname.value === '') {
    warning[1].style.visibility = 'visible';
    formblock[1].classList.add('active');
    alert('暱稱要填');// eslint-disable-line no-alert
    fillform = false;
  } if (application.checked === false && application2.checked === false) {
    warning[2].style.visibility = 'visible';
    formblock[2].classList.add('active');
    alert('記得打勾勾');// eslint-disable-line no-alert
    fillform = false;
  } if (occupation.value === '') {
    warning[3].style.visibility = 'visible';
    formblock[3].classList.add('active');
    alert('你的職業呢');// eslint-disable-line no-alert
    fillform = false;
  } if (plan.value === '') {
    warning[4].style.visibility = 'visible';
    formblock[4].classList.add('active');
    alert('計畫咧?');// eslint-disable-line no-alert
    fillform = false;
  } if (experience.value === '') {
    warning[5].style.visibility = 'visible';
    formblock[5].classList.add('active');
    alert('經驗呢');// eslint-disable-line no-alert
    fillform = false;
  } if (fillform === true) {
    console.log(`電子郵件：${email.value}`);
    console.log(`暱稱：${nickname.value}`);
    console.log(`報名班次：${applicationtype}`);
    console.log(`職業：${occupation.value}`);
    console.log(`怎麼知道這個計畫的：${plan.value}`);
    console.log(`是否有程式背景：${experience.value}`);
    console.log(`其他：${other.value}`);
    alert('已經成功送出');// eslint-disable-line no-alert
  } else {
    alert('重填吧兄弟');// eslint-disable-line no-alert
  }
}

function hidewarning() {
  const x = document.querySelectorAll('.formblock');
  for (let i = 0; i < x.length; i += 1) {
    x[i].classList.remove('active');
    warning[i].style.visibility = 'hidden';
  }
}

function applicationcheck() {
  if (application.checked === true) {
    application.push(applicationtype.value);
  } else {
    application2.push(applicationtype.value);
  }
}

submit.addEventListener('click', emailfunction, applicationcheck);
hidewarning();
