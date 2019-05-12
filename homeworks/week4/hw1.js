const request = require('request');

let n = 0;

request('https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    const json = JSON.parse(body);
    while (n < 10) {
      console.log(`${json[n].id} ${json[n].name}`);
      n += 1;
    }
  });
