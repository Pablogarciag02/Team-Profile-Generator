const inquirer = require("inquirer");

const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern")

const promptManager = () => {
  return inquirer.prompt ([
    {
      type: "input",
      name: "name",
      message: "What is the name of the Manager?",
      validate: managerInput => {
        if (managerInput) {
          return true;
        }
        else {console.log("please enter a name!!");
        return false;
      }
    }
    
    },

    {
      type: "input",
      name: "id",
      message: "Please enter the managers ID number",
      validate: managerId => {
        if(isNaN(managerId)) {
          console.log("An id must only contain numbers.")
        }
        else { 
          return true;
        }
      }
    },

    {
      type: "input",
      name: "email",
      message: "Please enter the Managers Email.",
      validate: email => {
        validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if(validEmail) {
          return true;
        }
        else {
          console.log("Please enter a valid Email");
          return false;
        }
      }
    },

    {
      type: "input",
      name: "officeID",
      message: "Please state the office number for the manager:",
      validate: officeID => {
        if(isNaN(officeID)) {
          console.log("An office number can only contain NUMBERS")
        }
        else{
          return true;
        }
      }
    }

  ])
  .then(managerInfo => {
    const {name, id, email, officeNumber} = managerInfo;
    const manager = new Manager(name, id, email, officeNumber);
    teamData.push(manager);
  })
};

const addteamMember =() {
  console.log(`Member added.`);
}

return inquirer.prompt ([
  {
    type: "list",
    name: "role",
    message: "Please select the roll of the next team member",
    choices: ["Engineer", "Intern"]
  },

  {
    type: "input",
    message: "name",
    message: "Please enter Employee name",
    validate: employeeName => {
      if(employeeName) {
        return true;
      }
      else{
        return false;
      }
    }
  },

  {
    type:"input",
    name: "id",
    message: "Type employees id number",
    validate: employeeId => {
      if(isNaN(employeeId)){
        console.log("An employee id can only contain NUMBERS");
        return false;
      }
      else {
        return true; 
      }
    }
  },

  {
    type:"input",
    name:"email",
    message:"Type employees Email",
    validate: email => {
      validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      if(validEmail) {
        return true;
      }
      else {
        console.log("Please enter a valid Email");
        return false;
      }
    }  
  },
  
  {
    type: "input",
    name: "github",
    message: "Enter engineers github username",
    when: (input) => input.role === "Engineer",
    validate: githubInput => {

    }
  }
])

const start = () => {
  promptUser()
}



start();