const Manager = require("../lib/manager");

test ("manager object is created", () => {
    const manager = new Manager("Pablo", 2, "pgarciag566@gmail.com", 3)

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test ("getofficeNumber() will return this.officeNumber", () => {
    const manager = new Manager("Pablo", 2, "pgarciag566@gmail.com", 200)

    expect(manager.getofficeNumber()).toEqual(expect.any(Number));
});

test ("GetRole() returns === Manager ", () => {
    const manager = new Manager("Pablo", 1, "pgarciag566@gmail.com", 200)

    expect(manager.getRole()).toEqual("Manager");
});