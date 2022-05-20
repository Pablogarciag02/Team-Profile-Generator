//Imports the intern class
const Intern = require("../lib/intern");

//Tests to see that the intern object can be created and that it takes in a new parameter = school
test ("intern object is created", () => {
    const intern = new Intern ("Pablo", "2", "pgarciag566@gmail.com", "Tecnologico de Monterrey")

    expect(intern.school).toEqual(expect.any(String));
})

//Tests to see if the getSchool function will return a string containing the school name
test ("getSchool() will return this.school", () => {
    const intern = new Intern ("Pablo", "2", "pgarciag566@gmail.com", "Tecnologico de Monterrey")

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
})

//tests to see if the GetRole function within the intern class will return the string "Intern". 
test ("GetRole() returns === Intern ", () => {
    const intern = new Intern ("Pablo", 1, "pgarciag566@gmail.com", "Tecnologico de Monterrey")

    expect(intern.getRole()).toEqual("Intern");
});