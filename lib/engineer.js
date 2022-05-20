const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github, githubLink){
        super(name, id, email)

        this.github = github
        this.githubLink = githubLink
    }

    getGithub() {
        return this.github;
    }

    getgithubLink(){
        return this.githubLink;
    }

    getRole(){
        return "Engineer";
    }
}


module.exports = Engineer;