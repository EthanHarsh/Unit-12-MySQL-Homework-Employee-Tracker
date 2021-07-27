const newEmployee  =[
    {
        type: 'input',
        message: `What is the new employee's first name?`,
        name: 'first',
        suffix: ' - ',
    },
    {
        type: 'input',
        message: `What is the new employee's last name?`,
        name: 'last',
        suffix: ' - ',
    },
    {
        type: 'input',
        message: `What is the new employee's manager's id?`,
        name: 'manager',
        suffix: ' - ',
    },
] 
module.exports = newEmployee;