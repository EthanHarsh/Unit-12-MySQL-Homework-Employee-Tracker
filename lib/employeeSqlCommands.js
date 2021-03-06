const fs = require('fs')
const path = require('path')

const getAll = fs.readFileSync(path.resolve('./lib/sql/employee/ALL.sql')).toString();

const getAllManagers = fs.readFileSync(path.resolve('./lib/sql/employee/GETALLMANAGERS.sql')).toString();

const updateEmployeeRole = fs.readFileSync(path.resolve('./lib/sql/employee/UPDATE.sql')).toString();

const newEmployee = fs.readFileSync(path.resolve('./lib/sql/employee/NEW.sql')).toString();

const employee = {
    getAll: getAll,
    getAllManagers: getAllManagers,
    updateEmployeeRole: updateEmployeeRole,
    newEmployee: newEmployee
}

module.exports = employee