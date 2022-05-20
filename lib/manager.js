//Employee class is imported
const Employee = require("./employee");

//Manager class is created and is extending from the empoloyee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)

        this.officeNumber = officeNumber
    }

    //Function will return this.officeNumber from the constructor
    getofficeNumber() {
        return this.officeNumber
    }


    //getRole function within the Manager class will return "Manager" string
    getRole(){
        return "Manager"
    }
    
}

module.exports= Manager;