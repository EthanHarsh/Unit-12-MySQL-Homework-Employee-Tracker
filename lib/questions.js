const init = require('./questions/init');
const mainLoop = require('./questions/mainLoop');
const viewLoop = require('./questions/viewLoop');
const editLoop = require('./questions/editLoop');
const addLoop = require('./questions/addLoop');
const newDepartment = require('./questions/newDepartment');
const newRole = require('./questions/newRole');
const newEmployee = require('./questions/newEmployee');



const questions = {
    init: init,
    main: mainLoop,
    view: viewLoop,
    edit: editLoop,
    add: addLoop,
    newDepartment: newDepartment,
    newRole: newRole,
    newEmployee: newEmployee,
}

module.exports = questions;