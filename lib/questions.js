const init = require('./questions/init');
const mainLoop = require('./questions/mainLoop');
const viewLoop = require('./questions/viewLoop');
const editLoop = require('./questions/editLoop');
const addLoop = require('./questions/addLoop');
const newDepartment = require('./questions/newDepartment');
const newDepartment = require('./questions/newRole');



const questions = {
    init: init,
    main: mainLoop,
    view: viewLoop,
    edit: editLoop,
    add: addLoop,
    newDepartment: newDepartment,
    newRoll: this.newRoll,
}

module.exports = questions;