const connection = require('./../server');
const employee = require('./../lib/employeeSqlCommands');
const department = require('./../lib/departmentSqlCommands')

exports.employees = () => {
    try {
        connection.query(employee.getAll,
            (err, results) => {
                if(err) {
                    console.error(err);
                    return
                }
                const question = {
                        type: 'list',
                        message: `Which employee would you like to edit?`,
                        name: 'choice',
                        suffix: ' - ',
                        choices: results
                }
                return question
            })
    } catch(err) {
        console.error(err);
    }
}

exports.department = () => {
    try {
        connection.query(department.all,
            (err, results) => {
                if(err) {
                    console.error(err);
                    return
                }
                const question = {
                        type: 'list',
                        message: `Which department would you like to edit?`,
                        name: 'choice',
                        suffix: ' - ',
                        choices: results
                }
                return question
            })
    } catch(err) {
        console.error(err);
    }
}

exports.manager = () => {
    try {
        connection.query(employee.getAllManagers,
            (err, results) => {
                if(err) {
                    console.error(err);
                    return
                }
                const question = {
                        type: 'list',
                        message: `Which manager would you like to edit?`,
                        name: 'choice',
                        suffix: ' - ',
                        choices: results
                }
                return question
            })
    } catch(err) {
        console.error(err);
    }
}