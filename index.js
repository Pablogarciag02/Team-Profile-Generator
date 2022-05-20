const inquirer = require("inquirer");
const fs = require("fs");

const generatehtml = require("./src/generatehtml")

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const team = [];

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
                    console.log("Please Enter an Employee name")
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "id",
            message: "please enter employee id",
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
                validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if(validation) {
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
            name: "officeNumber",
            message: "What is the office id for the Manager?",
            when: (input) => input.role === "Manager",
            validate: officeNumber => {
                if(isNaN(officeNumber)) {
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
        name: "school",
        message: "Please enter the interns school name",
        when: (input) => input.role === "Intern", 
        validate: school => {
            if(school) {
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
        default: "false"
        }
    ])
    .then(employeeInfo => {
        let {role, name, id, email, officeNumber, github, school, addEmployees} = employeeInfo;
        let teamMember

        if(role === "Manager") {
            teamMember = new Manager (name, id, email, officeNumber);
            console.log(teamMember);
        }

        else if (role === "Engineer") {
            teamMember = new Engineer(name, id, email, github);
            console.log(teamMember);
        }

        else if (role === "Intern") {
            teamMember = new Intern(name, id, email, school);
            console.log(teamMember)
        }

        team.push(teamMember);

        if (addEmployees) {
            return employeePrompt(team);
        }
        else{
            return team;
        }
    })
};


const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if(err){
            console.log(err);
            return;
        }
        else{
            console.log("Team Profile has been created succesfully. Check index.html to see it.")
        }
    })
};

employeePrompt()
  .then(team => {
    return generatehtml(team);
  })
  .then(htmlpage => {
    return writeFile(htmlpage);
  })
  .catch(err => {
 console.log(err);
  });