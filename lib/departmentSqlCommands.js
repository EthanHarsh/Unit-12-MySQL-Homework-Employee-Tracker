const fs = require('fs')
const path = require('path')

const all = fs.readFileSync(path.resolve('./lib/sql/department/ALL.sql')).toString();

const department = {
    all: all
}

module.exports = department