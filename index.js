const inquirer = require("inquirer");

const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern")

const employeePrompt = () => {
return inquirer.prompt ([
    {
        type: "list",
        name: "role",
        message: "Please select the roll of the next team member",
        choices: ["Manager", "Engineer", "Intern"]
    },

    {
        type:"input",
        name:"name",
        message:"Please enter Employees name:",
        validate: employeeName => {
            if(employeeName){
                return true;
            }
            else {
                return false;
            }
        }
    },

    {
        type: "input",
        name: "id",
        message: "please input employee id",
        validate: employeeId => {
            if(isNaN(employeeId)) {
            console.log("id must only contain numbers")
            }
            else {
                return true
            }
        }  
    },

    {
        type:"input",
        name: "email",
        message: "Please type employees Email",
        validate: email => {
            validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if(validEmail) {
                return true
            }
            else { 
                console.log("Are you sure thats an Email???")
                return false
            }
        }

    },

    {
        type: "input",
        name: "officeId",
        message: "What is the office id for the Manager?",
        when: (input) => input.role === "Manager",
        validate: officeId => {
            if(isNaN(officeId)) {
                console.log("Office id must be a number");
                return false
            }
            else {
                return true;
            }
        }
    },

    {
        type: "input",
        name:"github",
        message: "Enter Engineers Github username",
        when:(input) => input.role === "Engineer",
        validate: github => {
            if (github) {
                return true;
            }
            else{ 
                return false;
            }
        }

    },

    {
       type: "input",
       name: "schoolName",
       message: "Please enter the interns school name",
       when: (input) => input.role === "Intern", 
       validate: schoolName => {
           if(schoolName) {
               return true;
           }
           else {
               return false;
           }
       }
    },

    {
    type: "confirm",
    name: "addEmployees",
    message: "Do you want to add another Employee?",
    }
])
.then(employeeInfo => {
    const {role, name, id, email, officeId, github, schoolName} = employeeInfo;
    let teamMember

    if(role === "Manager") {
        teamMember = new Manager (name, id, email, officeId);
        console.log("Added Manager");
    }

    else if (role === "Engineer") {
        teamMember = new Engineer(name, id, email, github);
        console.log("Added Engineer");
    }

    else if (role === "Intern") {
        teamMember = new Intern(name, id, email, schoolName);
        console.log("Added Intern")
    }
})
}

