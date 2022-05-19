const Employee = require("../lib/employee");

test ("Employee class creates an employee object which contains string number and string", () => {
    const employee = new Employee ("Pablo", 1, "pgarciag566@gmail.com")

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("getName() returns this.name",() => {
    const employee = new Employee ("Pablo", 1, "pgarciag566@gmail.com")

    expect(employee.getName()).toEqual(expect.any(String));
});

test("getId() returns this.Id", () => {
    const employee = new Employee ("pablo,", 1, "pgarciag566@gmail.com")

    expect(employee.getId()).toEqual(expect.any(Number));
})

test("getEmail() returns this.Email", () => {
    const employee = new Employee ("pablo,", 1, "pgarciag566@gmail.com")

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test ("GetRole() returns === Employee ", () => {
    const employee = new Employee ("Pablo", 1, "pgarciag566@gmail.com")

    expect(employee.getRole()).toEqual("Employee");
});