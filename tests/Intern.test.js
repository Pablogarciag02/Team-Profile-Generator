const Intern = require("../lib/intern");

test ("intern object is created", () => {
    const intern = new Intern ("Pablo", "2", "pgarciag566@gmail.com", "Tecnologico de Monterrey")

    expect(intern.school).toEqual(expect.any(String));
})

test ("getSchool() will return this.school", () => {
    const intern = new Intern ("Pablo", "2", "pgarciag566@gmail.com", "Tecnologico de Monterrey")

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
})

test ("GetRole() returns === Intern ", () => {
    const intern = new Intern ("Pablo", 1, "pgarciag566@gmail.com", "Tecnologico de Monterrey")

    expect(intern.getRole()).toEqual("Intern");
});