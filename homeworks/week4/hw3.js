const request = require('request');
const process = require('process');

const args = process.argv;
let n = 0;
const linkaa = 'https://lidemy-book-store.herokuapp.com/books';
const limitNumber = 20;

switch (args[2]) {
  case 'list':

    request(`${linkaa}?_limit=${limitNumber}`,
      (error, response, body) => {
        const json = JSON.parse(body);
        while (n < limitNumber) {
          console.log(`${json[n].id} ${json[n].name}`);
          n += 1;
        }
      });
    break;

  case 'read':

    request(`${linkaa}?_limit=${args[3]}`,
      (error, response, body) => {
        const json = JSON.parse(body);
        console.log(json[args[3] - 1].name);
      });
    break;
  case 'delete':

    request.delete(`${linkaa}/${args[3]}`);
    break;
  case 'create':

    request.post(`${linkaa}`).form({
      name: `${args[3]}`,
    });
    break;
  case 'update':

    request.patch(`${linkaa}/${args[3]}`).form({
      name: `${args[4]}`,
    });
    break;

  default:
    console.log('defalut');
}
