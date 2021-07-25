const dotenv = require('dotenv').config()
const mysql = require('mysql2');
const app = require('./app');


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

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port} 👍`)
})