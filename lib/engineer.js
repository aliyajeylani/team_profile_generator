const Employee = require("./employee");

class Engineer extends Employee {

    constructor(name, id, email, role, gitHub) {
        super(name, id, email, "Engineer");
        this.gitHub = gitHub;

    }

    getGitHub() {
        return this.gitHub;

    }

    getRole() {

        return this.role;
    }
}

module.exports = Engineer;