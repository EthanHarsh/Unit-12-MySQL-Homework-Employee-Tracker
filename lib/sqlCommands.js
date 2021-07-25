const fs = require('fs');
const path = require('path')

const schema = fs.readFileSync(path.resolve('./lib/sql/SCHEMA.sql')).toString();
//console.log(schema);


const commands = {
    create: schema
}

module.exports = commands;