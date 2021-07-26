const questions = require('./../lib/questions');
const dynamic = require('./dynamicController');
const eval = require('./evalController');
const admin = require('./adminController');
const inq = require('inquirer');

const init = () => {
    inq.prompt(questions.init)
    .then((answers) => {
      //console.log(answers.start);
      answers = answers.start;
      if(answers === 'Continue with data') {
        //console.log('continue')
        mainLoop();
      } else {
        //console.log('else')
        admin.clearTable();
        mainLoop();
      }
    })
}

const obj = {
  init: init,
}

module.exports = obj;

//Loop functions
function mainLoop () {
    inq.prompt(questions.main)
      .then((answer) => {
        if(answer.choice === 'View info') {
          viewLoop();
        } else {
          editLoop();
        }
      })
}
  
function viewLoop () {
  inq.prompt(questions.view)
  .then((answer) => {
    checkView(answer.choice)
  })
}
  
function editLoop () {
    inq.prompt(questions.edit)
      .then((answer) => {
        checkEdit(answer.choice)
      })
  }
  
function addLoop () {
    inq.prompt(questions.add)
    .then((answer) => {
      checkAdd(answer.choice)
    })
}

//Edit functions
async function editEmployee () {
  let question = await dynamic.employee;
  inq.prompt(question)
  .then((answer) => {
      console.log(answer);
  })
}

async function editDepartment () {
  let question = await dynamic.department;
  inq.prompt(question)
  .then((answer) => {
      console.log(answer);
  })
}

//Eval Functions
function checkEdit (el) {
  switch (el) {
    case 'Edit Employee':
      edit.employee();
      break;
    case 'Edit Department':
      edit.department();
      break;
    case 'Edit Manager':
      edit.manager();
      break;
    case 'Edit Roles':
      edit.roles();
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