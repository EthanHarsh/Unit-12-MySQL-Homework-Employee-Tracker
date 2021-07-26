const dotenv = require('dotenv').config()
const mysql = require('mysql2');

var connection = mysql.createConnection({
  host     : process.env.DBHOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  multipleStatements: true
});
 
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    //console.log('DB connected as id ' + connection.threadId);
    //console.log(`Let's get started...`);
});

module.exports = connection;