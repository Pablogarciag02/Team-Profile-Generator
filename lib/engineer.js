const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)

        this.github = github
    }

    getGithub() {
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}


const engineer1 = new Engineer("pedro", "34", "pgarciag566@gmail.com", "pablogarciag02")

console.log(engineer1);