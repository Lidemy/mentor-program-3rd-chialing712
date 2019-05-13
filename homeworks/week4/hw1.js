const request = require('request');

request('https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    let n = 0;
    const json = JSON.parse(body);
    while (n < 10) {
      console.log(`${json[n].id} ${json[n].name}`);
      n += 1;
    }
  });
