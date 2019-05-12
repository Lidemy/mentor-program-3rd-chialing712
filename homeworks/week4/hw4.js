const request = require('request');

let i = 0;

const auth = {
  url: 'https://api.twitch.tv/helix/games/top',
  headers: {
    'Client-ID': 'sctgeg5bfyegxs9g5k70s6r432dujv',
  },
};

request(auth, (error, response, body) => {
  const json = JSON.parse(body);
  while (i < json.data.length) {
    console.log(`${json.data[i].id} ${json.data[i].name}`);
    i += 1;
  }
});
