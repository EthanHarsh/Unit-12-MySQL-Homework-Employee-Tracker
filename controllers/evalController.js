const loop = require('./loopController');
const edit = require('./editController');
exports.checkAdd = (el) => {
    switch (el) {
  
    }
}
  
exports.checkEdit = (el) => {
    switch (el) {
      case 'Edit Employee':
        edit.loop();
        break;
      case 'Edit Department':
        edit.department();
        break;
      case 'Edit Manager':
        edit.manager();
        break;
      case 'Add New Info':
        addLoop();
        break;
    }
}
  
exports.checkView = (el) => {
    switch (el) {
      case 'View employees':
        view.employees();
        break;
      case 'View employees by department':
        view.byDept();
        break;
      case 'View employees by manager':
        view.byManager();
        break;
      case 'View departments':
        view.depts();
        break
      case 'View roles':
        view.roles();
        break
    }
}