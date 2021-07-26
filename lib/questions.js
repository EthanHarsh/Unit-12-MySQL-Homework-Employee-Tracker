const init = require('./questions/init');
const mainLoop = require('./questions/mainLoop');
const viewLoop = require('./questions/viewLoop');
const editLoop = require('./questions/editLoop')


const questions = {
    init: init,
    main: mainLoop,
    view: viewLoop,
    edit: editLoop,
    add: 'placeholder'
}

module.exports = questions;