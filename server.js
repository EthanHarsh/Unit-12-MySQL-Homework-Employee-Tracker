const dotenv = require('dotenv').config()
const mysql = require('mysql2');
const commands = require('./lib/sqlCommands');
const inq = require('inquirer');
const questions = require('./lib/questions');


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

function init() {
  inq.prompt(questions.init)
  .then((answers) => {
    //console.log(answers.start);
    answers = answers.start;
    if(answers === 'Continue with data') {
      //console.log('continue')
      mainLoop();
    } else {
      //console.log('else')
      clearTable();
      mainLoop();
    }
  })
}

function mainLoop() {
  inq.prompt(questions.main)
    .then((answer) => {
      if(answer.choice === 'View info') {
        viewLoop();
      } else {
        editLoop();
      }
    })
}

function viewLoop() {
  inq.prompt(questions.view)
    .then((answer) => {
      console.log(answer);
    })
}

function editLoop() {
  inq.prompt(questions.edit)
    .then((answer) => {
      console.log(answer);
    })
}

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