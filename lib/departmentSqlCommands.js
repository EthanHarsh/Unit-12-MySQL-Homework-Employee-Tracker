const fs = require('fs')
const path = require('path')

const getAll = fs.readFileSync(path.resolve('./lib/sql/department/ALL.sql')).toString();
const newDept = fs.readFileSync(path.resolve('./lib/sql/department/NEW.sql')).toString();
const getDeptId = fs.readFileSync(path.resolve('./lib/sql/department/GETDEPTID.sql')).toString();

const department = {
    getAll: getAll,
    newDept: newDept,
    getDeptId: getDeptId,
}

module.exports = department