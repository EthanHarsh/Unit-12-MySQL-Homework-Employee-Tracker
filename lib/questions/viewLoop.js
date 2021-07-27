const viewLoop = {
    type: 'list',
    message: `What would you like to do?`,
    name: 'choice',
    suffix: ' - ',
    choices: ['View employees', 'View departments', 'View roles']
}

//Full questions
//['View employees', 'View employees by department', 'View employees by manager', 'View departments', 'View roles']

module.exports = viewLoop;