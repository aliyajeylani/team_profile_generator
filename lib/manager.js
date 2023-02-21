const Employee = require("./employee");

class Manager extends Employee {

    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;

    }

    getRole() {

        return this.role;
    }

}

module.exports = Manager;