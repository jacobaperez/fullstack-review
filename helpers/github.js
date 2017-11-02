const request = require('request');
const config = require('../config.js');
const db = require('../database')

let getReposByUsername = (username) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    method: 'get',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  }



  request(options, (err, res, body) => {
    if (err) {
      console.log(err);
      throw err;
    }
    let data = JSON.parse(body);

    

    console.log("BODY:", data.length);
  });
}

module.exports = getReposByUsername;
