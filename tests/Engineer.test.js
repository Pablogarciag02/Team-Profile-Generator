//Importing the Engineer Class
const Engineer = require("../lib/engineer");

//Checks to see if the engineer object is created with the github variabe and the githubLink Variable
test ("Engineer object is created", () => {
    const engineer = new Engineer ("Pablo", "2", "pgarciag566@gmail.com", "Pablogarciag02", "https://github.com/Pablogarciag02")

    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.githubLink).toEqual(expect.any(String));
})

//This Checks to see wether the getGithub funciton returns a string containing the github of the employee as a string
test ("getGithub() will return this.github", () => {
    const engineer = new Engineer ("Pablo", "2", "pgarciag566@gmail.com", "Pablogarciag02", "https://github.com/Pablogarciag02")

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()))
})

//This checks to see wether the getgithubLink function returns a string containint the github link of the employee as a string
test ("getgithubLink() will return this.githubLink", () => {
    const engineer = new Engineer ("Pablo", "2", "pgarciag566@gmail.com", "Pablogarciag02", "https://github.com/Pablogarciag02")

    expect(engineer.getgithubLink()).toEqual(expect.stringContaining(engineer.githubLink.toString()))
})

//Tests to see that the getRole function within the Engineer Class returns a string that always contains "Engineer"
test ("GetRole() returns === Engineer ", () => {
    const engineer = new Engineer ("Pablo", 1, "pgarciag566@gmail.com", "Pablogarciag02", "https://github.com/Pablogarciag02")

    expect(engineer.getRole()).toEqual("Engineer");
});