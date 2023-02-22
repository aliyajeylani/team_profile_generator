

function createManager(manager) {
    return `<div class='card'>
    <div class='card-header'>
        <h2 class='card-title'>${manager.name}</h2>
        <h3 class="card-title">${manager.role}</h3>
    </div>
        <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${manager.email}">${manager.email}</a>
                    </li>
                    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>`

}

function createIntern(intern) {
    return `<div class='card'>
    <div class='card-header'>
        <h2 class='card-title'>${intern.name}</h2>
        <h3 class="card-title">${intern.role}</h3>
    </div>
        <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${intern.email}">${intern.email}</a>
                    </li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>`

}

function createEngineer(engineer) {
    return `<div class='card'>
    <div class='card-header'>
        <h2 class='card-title'>${engineer.name}</h2>
        <h3 class="card-title">${engineer.role}</h3>
    </div>
        <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
                    </li>
                    <li class="list-group-item">
                    GitHub: <a href="https://github.com/${engineer.gitHub}"</li>
                </ul>
            </div>
        </div>`

}


//Function to gather data from user input and into functions above

function generatePage(data) {

    employeeCardArray = [];

    for (let i = 0; i < data.length; i++) {

        const employee = data[i];
        const role = employee.getRole();


        if (role === 'Manager') {

            const managerCard = createManager(employee);

            employeeCardArray.push(managerCard);
        }

        if (role === 'Engineer') {

            const engineerCard = createEngineer(employee);

            employeeCardArray.push(engineerCard);

        }

        if (role === 'Intern') {

            const internCard = createIntern(employee);

            employeeCardArray.push(internCard);
        }
    }

    //Joins all employee cards into an array
    const employeeCards = employeeCardArray.join("");

    //Generate html page with employee cards

    const generateTeamPage = generateHTML(employeeCards);
    return generateTeamPage;


}


function generateHTML(employeeCards) {
    return `<!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./style.css">
            <title>Team Profile Generator</title>
        </head>

        <body>

        
        <header>
        <h1>My Team</h1>
        </header>

        <main>
        ${employeeCards};
        </main>



        </body>

        </html>`

}















module.exports = generatePage;