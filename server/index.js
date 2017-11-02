const express = require('express');
const db = require('../database');
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
  next();
});
app.use(bodyParser());

let getTop25Repos = function(res) {
  let queryStr = 'select * from repos order by stars desc limit 25';
  db.query(queryStr, (error, results) => {
    if (error) {
      throw error
      console.log('Err:', error);
    };
    res.json(results);
  });
}

app.post('/', function (req, res) {
  // Store repos from github into db
  getReposByUsername(req.body.user);
  getTop25Repos(res);
});

app.get('/repos', function (req, res) {
  getTop25Repos(res);
});


let port = 1128;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
