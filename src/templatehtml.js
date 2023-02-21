const createTeam = team => {

    function createManager(manager) {
        return `<div class='card'>
        <div class='card-header'>
            <h2 class='card-title'>${manager.getName()}</h2>
            <h3 class="card-title">${manager.getRole()}</h3>
        </div>
            <div class="card-body">
                 <ul class="list-group">
                      <li class="list-group-item">ID: ${manager.getId()}</li>
                      <li class="list-group-item">
                           Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                       </li>
                        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>`

    }

    function createIntern(intern) {
        return `<div class='card'>
        <div class='card-header'>
            <h2 class='card-title'>${intern.getName()}</h2>
            <h3 class="card-title">${intern.getRole()}</h3>
        </div>
            <div class="card-body">
                 <ul class="list-group">
                      <li class="list-group-item">ID: ${intern.getId()}</li>
                      <li class="list-group-item">
                           Email: <a href="mailto:${intern.getEmail()}">${manager.getEmail()}</a>
                       </li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>`

    }

    function createEngineer(engineer) {
        return `<div class='card'>
        <div class='card-header'>
            <h2 class='card-title'>${engineer.getName()}</h2>
            <h3 class="card-title">${engineer.getRole()}</h3>
        </div>
            <div class="card-body">
                 <ul class="list-group">
                      <li class="list-group-item">ID: ${engineer.getId()}</li>
                      <li class="list-group-item">
                           Email: <a href="mailto:${engineer.getEmail()}">${manager.getEmail()}</a>
                       </li>
                        <li class="list-group-item">
                        GitHub: <a href="https://github.com/${engineer.getGitHub()}"</li>
                    </ul>
                </div>
            </div>`

    }

    const html = [];

}



module.exports = team => {

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
${createTeam(team)};
</main>



</body>

</html>`

}




