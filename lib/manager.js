const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)

        this.officeNumber = officeNumber
    }

    getofficeNumber() {
        return this.officeNumber
    }

    getRole(){
        return "Manager"
    }
    
}

const manager = new Manager("pedro", "34", "pgarciag566@gmail.com", "29")

console.log(manager);