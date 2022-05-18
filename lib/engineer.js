const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        //Parent: Name
        //Parent: id
        //Parent: email

        //Adding: Github
        super(name, id, email)
        this.github = github
    }
}


const engineer1 = new Engineer("pedro", "34", "pgarciag566@gmail.com", "pablogarciag02")

console.log(engineer1);