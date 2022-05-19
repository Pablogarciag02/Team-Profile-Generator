const Engineer = require("../lib/engineer");

test ("Engineer object is created", () => {
    const engineer = new Engineer ("Pablo", "2", "pgarciag566@gmail.com", "Pablogarciag02")

    expect(engineer.github).toEqual(expect.any(String));
})

test ("getGithub() will return this.github", () => {
    const engineer = new Engineer ("Pablo", "2", "pgarciag566@gmail.com", "Pablogarciag02")

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()))
})

test ("GetRole() returns === Engineer ", () => {
    const engineer = new Engineer ("Pablo", 1, "pgarciag566@gmail.com", "Pablogarciag02")

    expect(engineer.getRole()).toEqual("Engineer");
});