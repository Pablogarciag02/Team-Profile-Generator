//Employee Class is created
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //function will return this.name from the constructor
    getName() {
        return this.name;
    }

    //function will return this.id from the constructor
    getId() {
        return this.id;
    }

    //function will return this.email from the constructor
    getEmail() {
        return this.email
    }

    //function will return employee role from the string typed bellow "Employee" 
    getRole() { 
        return "Employee"
    }
}
//Exporting code to then import and extend onto the new clases.
module.exports = Employee;


