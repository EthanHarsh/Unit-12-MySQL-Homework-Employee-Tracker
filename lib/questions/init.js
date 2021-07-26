const init = {
    type: 'list',
    message: `Do you want to continue working with saved data or clear all data and start over?`,
    name: 'start',
    suffix: ' - ',
    choices: ['Continue with data', 'Clear data & start fresh']
}

module.exports = init;