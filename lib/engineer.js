//Employee class is being imported
const Employee = require("./employee");

//Engineer class is created and its extending from the employee class
class Engineer extends Employee {
    constructor(name, id, email, github, githubLink){
        super(name, id, email)

        this.github = github
        this.githubLink = githubLink
    }

    //getGithub will return github from the engineer class
    getGithub() {
        return this.github;
    }

    //get githubLink will return githubLink from the engineer class
    getgithubLink(){
        return this.githubLink;
    }

    //Establishes that the getRole function within the engineer Class will always return the string "Engineer"
    getRole(){
        return "Engineer";
    }
}

//Exporting Code to use in index.js
module.exports = Engineer;