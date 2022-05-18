const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        //Parent: Name
        //Parent: id
        //Parent: email

        //Adding: School
        super(name, id, email)
        this.school = school
    }
}

const intern1 = new Intern("pedro", "34", "pgarciag566@gmail.com", "itesm")

console.log(intern1);