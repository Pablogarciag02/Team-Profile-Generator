const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)

        this.school = school
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}


const intern1 = new Intern("pedro", "34", "pgarciag566@gmail.com", "itesm")

console.log(intern1);