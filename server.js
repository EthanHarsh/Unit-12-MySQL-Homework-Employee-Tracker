const dotenv = require('dotenv').config()
const mysql = require('mysql2');
const commands = require('./lib/sqlCommands');
const inq = require('inquirer');
const questions = require('./lib/questions');
const { edit, view } = require('./lib/questions');


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
    init(); 
});

console.log('Hello! 👋 😄');
console.log('Welcome to the employee management systeminator 5000');





function clearTable() {
  //console.log('clearTable')
  try {
    connection.query(
      commands.create,
        (err, results) => {
          if(err) {
            console.error(err);
            return
          }
          console.log('Schema created successfully');
        }
      )
  } catch(err) {
    console.error(err);
  }
}

//Choice evaluation functions
function checkAdd(el) {
  switch (el) {

  }
}

function checkEdit(el) {
  switch (el) {
    case 'Edit Employee':
      edit.loop();
      break;
    case 'Edit Department':
      edit.department();
      break;
    case 'Edit Manager':
      edit.manager();
      break;
    case 'Add New Info':
      addLoop();
      break;
  }
}

function checkView(el) {
  switch (el) {
    case 'View employees':
      view.employees();
      break;
    case 'View employees by department':
      view.byDept();
      break;
    case 'View employees by manager':
      view.byManager();
      break;
    case 'View departments':
      view.depts();
      break
    case 'View roles':
      view.roles();
      break
  }
}

