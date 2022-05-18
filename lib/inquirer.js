const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt ([
    {
      type: "list",
      name: "role",
      message: "Please Enter the Role",
      choices: ["Engineer", "Manager", "Intern"],
    }
  ])
  .then(answers => {
    if(answers === "Engineer") {
      const engineerPrompt = () =>{
        inquirer.prompt([
          {
            type: "input",
            name: "name",
            message:"Please enter the engineers name"
          },
          {
            type: "input",
            name: "id",
            message:"Please enter the enineers id"
          },
          {
            type: "input",
            name: "email",
            message:"Please enter the enineers Email"
          },
          {
            type: "input",
            name: "github",
            message:"Please enter the enineers Github"
          },
        ])
        const engineerStart = () => {
          engineerPrompt()
        }
        engineerStart();
      }  
    }  
  })  
}


const start = () => {
  promptUser()
}

// const engineerStart = () => {
//   engineerPrompt()
// }


start();

// engineerStart();