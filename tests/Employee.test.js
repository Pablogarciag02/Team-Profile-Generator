//Imports Employee class
const Employee = require("../lib/employee");

//This tests proves that the employee class contains 3 variables: 2 strings and 1 number
test ("Employee class creates an employee object which contains string number and string", () => {
    const employee = new Employee ("Pablo", 1, "pgarciag566@gmail.com")

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//This test proves that the getName function within the employee class will return the *Name* string
test("getName() returns this.name",() => {
    const employee = new Employee ("Pablo", 1, "pgarciag566@gmail.com")

    expect(employee.getName()).toEqual(expect.any(String));
});

//This test proves that the getId function within the employee class will return the *ID* Number
test("getId() returns this.Id", () => {
    const employee = new Employee ("pablo,", 1, "pgarciag566@gmail.com")

    expect(employee.getId()).toEqual(expect.any(Number));
})

//This test proves that the getEmail function within the employee class will return any *Email* String
test("getEmail() returns this.Email", () => {
    const employee = new Employee ("pablo,", 1, "pgarciag566@gmail.com")

    expect(employee.getEmail()).toEqual(expect.any(String));
})

//Establishes that the get role function within the employee class will return a string containing "Employee"
test ("GetRole() returns === Employee ", () => {
    const employee = new Employee ("Pablo", 1, "pgarciag566@gmail.com")

    expect(employee.getRole()).toEqual("Employee");
});