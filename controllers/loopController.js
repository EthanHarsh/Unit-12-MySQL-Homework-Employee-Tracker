const questions = require('./../lib/questions');

exports.init = () => {
    inq.prompt(questions.init)
    .then((answers) => {
      //console.log(answers.start);
      answers = answers.start;
      if(answers === 'Continue with data') {
        //console.log('continue')
        mainLoop();
      } else {
        //console.log('else')
        clearTable();
        mainLoop();
      }
    })
}

exports.mainLoop = () => {
    inq.prompt(questions.main)
      .then((answer) => {
        if(answer.choice === 'View info') {
          viewLoop();
        } else {
          editLoop();
        }
      })
}
  
exports.viewLoop = () => {
    inq.prompt(questions.view)
      .then((answer) => {
        checkView(answer.choice);
      })
}
  
exports.editLoop = () => {
    inq.prompt(questions.edit)
      .then((answer) => {
        checkEdit(answer.choice)
      })
  }
  
exports.addLoop = () => {
    inq.prompt(questions.add)
    .then((answer) => {
      checkAdd(answer.choice)
    })
}