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
  .then(({role}) => {
    
    // console.log(answer) })
    if(role === "Engineer") {
      const engineerStart = () => {
        engineerPrompt()
      }
      
      engineerStart();

      const engineerPrompt = () =>{
        return inquirer.prompt([
          {
            type: "input",
            name: "name",
            message:"Please enter the engineers name"
          },
          {
            type: "input",
            name: "id",
            message:"Please enter the engineers id"
          },
          {
            type: "input",
            name: "email",
            message:"Please enter the engineers Email"
          },
          {
            type: "input",
            name: "github",
            message:"Please enter the engineers Github"
          },
        ])
      }  
    }  
  })  
}

const start = () => {
  promptUser()
}



start();