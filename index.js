const inquirer = require('inquirer');


inquirer
  .prompt([
    /* Pass your questions in here */
    {
        name:"title",
        type:"input",
        message:"What is your project Title?"
    },
    {
        name:"github",
        type:"input",
        message:"What is your GitHub username?"
    },

  ])
  .then(answers => {
    console.log(answers);
    console.log(answers.title);
  })
  .catch(error => {
    if(error) {
        console.log(error);
      // Prompt couldn't be rendered in the current environment
    }
  });