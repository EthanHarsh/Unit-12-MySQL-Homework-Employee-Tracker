const fs = require('fs')
const path = require('path')

const getAll = fs.readFileSync(path.resolve('./lib/sql/employee/ALL.sql')).toString();

const getAllManagers = fs.readFileSync(path.resolve('./lib/sql/employee/GETALLMANAGERS.sql')).toString();

const employee = {
    getAll: getAll,
    getAllManagers: getAllManagers
}

module.exports = employee