const request = require('request');
const process = require('process');

const args = process.argv;
let n = 0;

switch (args[2]) {
  case 'list':

    request('https://lidemy-book-store.herokuapp.com/books?_limit=10',
      (error, response, body) => {
        const json = JSON.parse(body);
        while (n < 10) {
          console.log(`${json[n].id} ${json[n].name}`);
          n += 1;
        }
      });
    break;
  case 'read':

    request('https://lidemy-book-store.herokuapp.com/books?_limit=10',
      (error, response, body) => {
        const json = JSON.parse(body);
        console.log(json[args[3] - 1].name);
      });
    break;

  default:
    console.log('defalut');
}
