const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");


const generatePage = require("./src/templatehtml")
const inquirer = require("inquirer");
const fs = require("fs");


const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'manager_name',

    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'manager_id',

    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'manager_email',

    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'manager_officeNumber',

    },

]

const teamQuestion = [
    {
        type: 'list',
        message: "Whic type of team member would you like to add?",
        choices: ["Engineer", "Intern", "None"],
        name: 'team_member',
    }
]

const engineerQuestions = [

    {
        type: 'input',
        message: "What is your engineer's name?",
        name: 'engineer_name',

    },
    {
        type: 'input',
        message: "What is your engineer's id?",
        name: 'engineer_id',

    },
    {
        type: 'input',
        message: "What is your engineer's email?",
        name: 'engineer_email',

    },

    {
        type: 'input',
        message: "What is your engineer's Github username?",
        name: 'engineer_github',
    }

]
const internQuestions = [

    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'intern_name',

    },
    {
        type: 'input',
        message: "What is your intern's id?",
        name: 'intern_id',

    },
    {
        type: 'input',
        message: "What is your intern's email?",
        name: 'intern_email',

    },

    {
        type: 'input',
        message: "What is your intern's school name?",
        name: 'intern_school',
    },


]


function writeToFile(file, data) {

    fs.writeFile(file, generatePage(data), (err) =>
        err ? console.log(err) : console.log('Success'));

};

const employeeArray = [];

function init() {
    inquirer.prompt(managerQuestions)
        .then(response => {
            console.log(response);
            const manager = new Manager(
                response.manager_name,
                response.manager_id,
                response.manager_email,
                response.manager_officeNumber);
            employeeArray.push(manager)


            repeatTeamQuestion();


        })



}

init();

function repeatTeamQuestion() {

    inquirer.prompt(teamQuestion)
        .then(response => {
            console.log(response);


            if (response.team_member == "Engineer") {

                inquirer.prompt(engineerQuestions)
                    .then(response => {
                        const engineer = new Engineer(
                            response.engineer_name,
                            response.engineer_id,
                            response.engineer_email,
                            response.engineer_github);
                        employeeArray.push(engineer)


                        repeatTeamQuestion();
                    })
            } else if (response.team_member == "Intern") {
                inquirer.prompt(internQuestions)
                    .then(response => {
                        const intern = new Intern(
                            response.intern_name,
                            response.intern_id,
                            response.intern_email,
                            response.intern_school);
                        employeeArray.push(intern);

                        repeatTeamQuestion();
                    })
            } else {
                console.log(employeeArray);
                console.log(employeeArray.length);
                writeToFile("./dist/index.html", employeeArray);

                return;
            }



        })

}

