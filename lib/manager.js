const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        //Parent: Name
        //Parent: id
        //Parent: email

        //Adding: Office Number
        super(name, id, email)
        this.officeNumber = officeNumber
    }
}

const manager = new Manager("pedro", "34", "pgarciag566@gmail.com", "29")

console.log(manager);