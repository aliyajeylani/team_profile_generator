const Employee = require("./employee");

class Intern extends Employee {

    constructor(school) {
        super(name, id, email, "Intern");
        this.school = school;

    }
    getSchool() {

        return this.school;
    }

    getRole() {

        return this.role;
    }

}

module.exports = Intern;