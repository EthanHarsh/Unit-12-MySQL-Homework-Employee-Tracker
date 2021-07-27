const questions = require('./../lib/questions');
const admin = require('./adminController');
const inq = require('inquirer');
var SqlString = require('sqlstring');

const connection = require('./../server');
const employee = require('./../lib/employeeSqlCommands');
const department = require('./../lib/departmentSqlCommands');
const role = require('./../lib/roleSqlCommands');

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
function editEmployee () {
  let resultsArr = []
  connection.query(employee.getAll,
    (err, results, fields) => {
        console.log(results);
        results.forEach((el) => {
          resultsArr.push(`${el.first_name} ${el.last_name}`)
        })
        const question = {
          type: 'list',
          message: `Which employee would you like to edit?`,
          name: 'choice',
          suffix: ' - ',
          choices: resultsArr
        }
        inq.prompt(question)
        .then((answer) => {
            //console.log(answer);
            editEmployeeRole(answer.choice);
        })
    });
}

function editEmployeeRole(person) {
  let resultsArr = []
  connection.query(role.getAll,
    (err, results, fields) => {
        console.log(results);
        results.forEach((el) => {
          resultsArr.push(`${el.title}`)
        })
        const question = {
          type: 'list',
          message: `What new role should ${person} have?`,
          name: 'choice',
          suffix: ' - ',
          choices: resultsArr
        }
        inq.prompt(question)
        .then((answer) => {
            getEmployeeRoleId(person, answer.choice);
    });
  })
}

function getEmployeeRoleId(person, newRole) {
  const sqlStr = SqlString.format(role.getRoleId, [newRole]);
  connection.query(sqlStr,
    (err, results, fields) => {
      updateEmployeeRole(person, results[0].id)
    }
  )
}

function updateEmployeeRole(person, newRoleId) {
  person = person.split(' ');
  const sqlStr = SqlString.format(employee.updateEmployeeRole, [newRoleId, person[0], person[1]]);
  connection.query(sqlStr,
    (err, results, fields) => {
      if(err) {
        console.error(err);
      }
      console.log(`Employee Role Updated!`)
      mainLoop();
    })
}

function newEmployee() {

}

function newRoles() {

}

function newDepartment() {
  inq.prompt(questions.newDepartment)
  .then((answer) => {
      //console.log(answer);
      const sqlStr = SqlString.format(department.newDept, [answer.name])
      connection.query(sqlStr,
        (err, results) => {
          if(err) {
            console.error(err)
          } else {
            console.log('New Department Created!');
            mainLoop();
          }
        })
  })
}
/*
function editDepartment () {
  let resultsArr = []
  connection.query(department.getAll,
    (err, results, fields) => {
        //console.log(results);
        results.forEach((el) => {
          resultsArr.push(`${el.name}`)
        })
        const question = {
          type: 'list',
          message: `Which department would you like to edit?`,
          name: 'choice',
          suffix: ' - ',
          choices: resultsArr
        }
        inq.prompt(question)
        .then((answer) => {
            console.log(answer);
        })
    });
}

function editRoles () {
  let resultsArr = []
  connection.query(role.getAll,
    (err, results, fields) => {
        console.log(results);
        results.forEach((el) => {
          resultsArr.push(`${el.title}`)
        })
        const question = {
          type: 'list',
          message: `Which department would you like to edit?`,
          name: 'choice',
          suffix: ' - ',
          choices: resultsArr
        }
        inq.prompt(question)
        .then((answer) => {
            console.log(answer);
        })
    });
}
*/
//Eval Functions
function checkEdit (el) {
  switch (el) {
    case 'Edit Employee':
      editEmployee();
      break;
    /*
    case 'Edit Department':
      editDepartment();
      break;
    case 'Edit Manager':
      editManager();
      break;
    case 'Edit Roles':
      editRoles();
    */
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
    /*  
    case 'View employees by manager':
      view.byManager();
      break;
    */
    case 'View departments':
      view.depts();
      break
    case 'View roles':
      view.roles();
      break
  }
}

function checkAdd(el) {
  switch(el) {
    case 'New Employee':
      newEmployee();
      break
    case 'New Role':
      newRole();
      break
    case 'New Department':
      newDepartment();
      break
  }
}