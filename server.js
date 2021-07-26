const dotenv = require('dotenv').config()
const mysql = require('mysql2');
const loop = require('./controllers/loopController');



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
   
    console.log('DB connected as id ' + connection.threadId);
    console.log(`Let's get started...`);
    loop.init(); 
});

console.log('Hello! 👋 😄');
console.log('Welcome to the employee management systeminator 5000');

module.exports = connection;