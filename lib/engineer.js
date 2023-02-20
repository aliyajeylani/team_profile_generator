const Employee = require("./employee");

class Engineer extends Employee {

    constructor(gitHub) {
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