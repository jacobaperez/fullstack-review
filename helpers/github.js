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

    // Log into Database
    data.forEach( index => {
      let params = [ index.owner.login, index.name, index.html_url, index.stargazers_count];
      db.query('INSERT INTO repos (username, name, html_url, stars) VALUES (?,?,?,?)', params, (err, results) => {
        if (err) {
          console.log(err);
          throw err;
        }
        console.log("LOGGED REPO IN DB SUCCESS!");
      })
    })

  });
}

module.exports = getReposByUsername;
