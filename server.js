const dotenv = require('dotenv').config()
const mysql = require('mysql');


var connection = mysql.createConnection({
  host     : process.env.DBHOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
});
 
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });