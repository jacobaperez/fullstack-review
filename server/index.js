const express = require('express');
const db = require('../database');
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser());


app.post('/', function (req, res) {
  getReposByUsername(req.body.user);

  res.send('POSTED!')

});

app.get('/repos', function (req, res) {

  // let queryStr = 'select * from repos order by stars desc limit 25';
  // db.query(queryStr, (error, results) => {
  //   if (error) throw error;
  //   res.json(results);
  // });


  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
