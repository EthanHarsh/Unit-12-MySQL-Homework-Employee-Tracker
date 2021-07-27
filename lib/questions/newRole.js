const newRole =[
    {
        type: 'input',
        message: `What is the title of the new role?`,
        name: 'title',
        suffix: ' - ',
    },
    {
        type: 'input',
        message: `What is the salary of the new role?`,
        name: 'salary',
        suffix: ' - ',
    },

] 
module.exports = newRole;