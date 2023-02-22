

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
                        Email: <a href="mailto:${intern.email}">${manager.email}</a>
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
                        Email: <a href="mailto:${engineer.email}">${manager.email}</a>
                    </li>
                    <li class="list-group-item">
                    GitHub: <a href="https://github.com/${engineer.gitHub}"</li>
                </ul>
            </div>
        </div>`

}





function generateHTML(createTeam) {
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
        ${createTeam};
        </main>



        </body>

        </html>`

}


function generatePage(data) {

    employeeCardArray = [];




}


module.export = generatePage;