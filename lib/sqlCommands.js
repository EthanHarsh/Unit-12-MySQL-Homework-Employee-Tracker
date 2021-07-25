const fs = require('fs');
const path = require('path')

const schema = fs.readFileSync(path.resolve('./lib/sql/SCHEMA.sql')).toString();
const all = fs.readFileSync(path.resolve('./lib/sql/ALL.sql')).toString();
//console.log(schema);


const commands = {
    create: schema,
    all: all,
}

module.exports = commands;