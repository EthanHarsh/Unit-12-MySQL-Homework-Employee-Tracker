const connection = require('./../server');
const commands = require('./../lib/sqlCommands');

exports.clearTable = () => {
    //console.log('clearTable')
    try {
      connection.query(
        commands.create,
          (err, results) => {
            if(err) {
              console.error(err);
              return
            }
            console.log('Schema created successfully');
          }
        )
    } catch(err) {
      console.error(err);
    }
}