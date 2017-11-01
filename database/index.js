const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'github'
});

connection.connect();

connection.query('select * from repos', (error, results, fields) => {
  if (error) throw error;
  results.forEach( value => {
    console.log(value.username, value.name, value.html_url, value.stars);
  })
});




module.exports = connection;
