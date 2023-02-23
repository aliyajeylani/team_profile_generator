const Manager = require("../lib/manager");

const name = "Abdul";
const id = "196325";
const email = "test_abdul@hotmail.com";
const officeNumber = "612-235-6895";
const role = "Manager";


describe("Manager", () => {
    describe("Initialization", () => {
        it("Create a new manager", () => {
            const manager = new Manager(name, id, email, officeNumber);


            expect(manager.getName()).toEqual(name);
        });

        it("Get manager id", () => {
            const manager = new Manager(name, id, email, officeNumber);


            expect(manager.getId()).toEqual(id);
        });

        it("Get manager email", () => {
            const manager = new Manager(name, id, email, officeNumber);


            expect(manager.getEmail()).toEqual(email);
        });

        it("Get manager role", () => {
            const manager = new Manager(name, id, email, officeNumber);


            expect(manager.getRole()).toEqual(role);
        });

        it("Get manager office number", () => {
            const manager = new Manager(name, id, email, officeNumber);


            expect(manager.getNumber()).toEqual(officeNumber);

        });

    })

});