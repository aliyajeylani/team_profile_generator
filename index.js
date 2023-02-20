const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

const inquirer = require("inquirer");
const fs = require("fs");


const questions = [
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
        name: 'imanager_email',

    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'manager_number',

    },

    {
        type: 'list',
        message: "Whic type of team member would you like to add?",
        choices: ["Engineer", "Intern"],
        name: 'team_member',
    },
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
        name: 'engineer_github_name',
    },
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
        name: 'intern_school_name',
    },



]
