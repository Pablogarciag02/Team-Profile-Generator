//Manager team card that contains template literals specifying where the information from inquirer will go.
const newManager = function (manager) {
    return `
    <div class ="m-5 border-2 border-slate-800 rounded-lg">
        <div class ="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 p-3 py-5 border-1 rounded-md">
            <h2 class="text-3xl">${manager.name}</h2>
            <h3 class ="text-2xl">Manager</h3>
            <i class="gg-smile-mouth-open"></i>
        </div>

        <div class="bg-gray-200 p-3 py-10 px-10 rounded-lg ">
            <p class ="bg-white p-3 my-1 rounded-lg">ID: ${manager.id}</p>
                    
            <p class ="bg-white p-3 my-1 rounded-lg">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
             
            <p class ="bg-white p-3 my-1 rounded-lg">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>`
} 

//Intern team card that contains template literals specifying where the information from inquirer will go.
const newIntern = function (intern) {
    return `
    <div class ="m-5 border-2 border-slate-800 rounded-lg">
        <div class ="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 p-3 py-5 border-1 rounded-md">
            <h2 class="text-3xl">${intern.name}</h2>
            <h3 class ="text-2xl">Intern</h3>
            <i class="gg-boy"></i>
        </div>

        <div class="bg-gray-200 p-3 py-10 px-10 rounded-lg ">
            <p class ="bg-white p-3 my-1 rounded-lg">ID: ${intern.id}</p>
                    
            <p class ="bg-white p-3 my-1 rounded-lg">Email: <a href="mailto:${intern.mail}">${intern.mail}</a></p>
             
            <p class ="bg-white p-3 my-1 rounded-lg">School: ${intern.school}</p>
        </div>
    </div>`
}

//Engineer team card that contains template literals specifying where the information from inquirer will go.
const newEngineer = function (engineer) {
    return `
    <div class ="m-5 border-2 border-slate-800 rounded-lg">
        <div class ="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 p-3 py-5 border-1 rounded-md">
            <h2 class="text-3xl">${engineer.name}</h2>
            <h3 class ="text-2xl">Engineer</h3>
            <i class="gg-code-slash"></i>
        </div>

        <div class="bg-gray-200 p-3 py-10 px-10 rounded-lg ">
            <p class ="bg-white p-3 my-1 rounded-lg">ID: ${engineer.id}</p>
            
            <p class ="bg-white p-3 my-1 rounded-lg">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
    
            <p class ="bg-white p-3 my-1 rounded-lg">Github:<a href="${engineer.githubLink}"> ${engineer.github}</a></p>
        </div>
    </div>`
}

//Generate html function will grab all data and with a for loop will place it on an array
generatehtml = (data) => {
    pageArray = [];

    //For each string of employee added we will define the role
    for (let i = 0; i < data.length; i++) {
        const employee = data [i];
        const role = employee.getRole();
    
        //if the role is manager we call the function newManager that contains the template literals from the Manager Class and will then push this into the pageArray within the function
        if(role === "Manager") {
            const managerInfo = newManager(employee);

            pageArray.push(managerInfo);
        }

        //if the role is Intern we call the function newIntern that contains the template literals from the Intern Class and will then push this into the pageArray within the function
        if(role === "Intern") {
            const internInfo = newIntern(employee);

            pageArray.push(internInfo);
        }

        //if the role is Engineer we call the function newEngineer that contains the template literals from the Engineer Class and will then push this into the pageArray within the function
        if(role === "Engineer") {
            const engineerInfo = newEngineer(employee);

            pageArray.push(engineerInfo);
        }
    }

    //this wil join all the information added to the Array that had all the code from above.
    const teamCards = pageArray.join("")

    //createTeam is a function called newTeamPage that which has the constant teamCards which contains the joined array
    const createTeam = newTeamPage(teamCards);
    return createTeam;
    
}

//Template literal that contains the full html page and calls the function newTeamPage that will call teamCards which contain the array of all employees added into the function. 
//With template literals we call ${teamCards} that contains the array with each different employee card: Engineer, Manager, Intern
const newTeamPage = function (teamCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <style src="style.css"></style>
        <link href='https://css.gg/css' rel='stylesheet'>
        <title>MyTeam</title>
    </head>

    <body>
        <header class="bg-blue-400 py-12 text-center text-white text-8xl">My Team</header>

        <main>
            <div class ="flex flex-wrap justify-center m-12 mr-10 ml-10"  id = "Card">
                
                ${teamCards}
               
            </div>
        </main>

    </body>
</html>`
}

//Exporting code to use in index.js
module.exports = generatehtml;
