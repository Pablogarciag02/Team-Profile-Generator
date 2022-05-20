//Employee Class is imported
const Employee = require("./employee");

//Intern class is created and its extending from the employee class
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)

        this.school = school
    }

    //function will return this.school from the constructor
    getSchool() {
        return this.school;
    }

    //Establishes that the getRole function within the engineer Class will always return the string "Engineer"
    getRole() {
        return "Intern";
    }
}

//Exporting Code to use in index.js
module.exports = Intern;