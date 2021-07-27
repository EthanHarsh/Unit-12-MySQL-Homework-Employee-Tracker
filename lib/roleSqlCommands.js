const fs = require('fs')
const path = require('path')

const getAll = fs.readFileSync(path.resolve('./lib/sql/role/ALL.sql')).toString();

const getRoleId = fs.readFileSync(path.resolve('./lib/sql/role/GETROLEID.sql')).toString();
const newRole = fs.readFileSync(path.resolve('./lib/sql/role/NEW.sql')).toString();

const role = {
    getAll: getAll,
    getRoleId: getRoleId,
    newRole: newRole
}

module.exports = role