//Imports manager Class
const Manager = require("../lib/manager");

//Tests to see if the manager object is being created with a new parameter officeNumber
test ("manager object is created", () => {
    const manager = new Manager("Pablo", 2, "pgarciag566@gmail.com", 3)

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//getofficeNumber function will test to see if the returned variable contains a number.
test ("getofficeNumber() will return this.officeNumber", () => {
    const manager = new Manager("Pablo", 2, "pgarciag566@gmail.com", 200)

    expect(manager.getofficeNumber()).toEqual(expect.any(Number));
});

//The gerrole function within the manager class checks to see if the role we recieve is equale to "Manager"
test ("GetRole() returns === Manager ", () => {
    const manager = new Manager("Pablo", 1, "pgarciag566@gmail.com", 200)

    expect(manager.getRole()).toEqual("Manager");
});