const Engineer = require("../lib/engineer");

const name = "Mohammed";
const id = "78965";
const email = "Moahmmed@gmail.com";
const gitHub = "https://github.com/mkuko";
const role = "Engineer";


describe("Engineer", () => {
    describe("Initialization", () => {
        it("Create a new engineer", () => {
            const engineer = new Engineer(name, id, email, role, gitHub);


            expect(engineer.getName()).toEqual(name);
        });

        it("Get engineer id", () => {
            const engineer = new Engineer(name, id, email, gitHub);


            expect(engineer.getId()).toEqual(id);
        });

        it("Get engineer email", () => {
            const engineer = new Engineer(name, id, email, gitHub);


            expect(engineer.getEmail()).toEqual(email);
        });

        it("Get engineer role", () => {
            const engineer = new Engineer(name, id, email, gitHub);


            expect(engineer.getRole()).toEqual(role);
        });

        it("Get engineer github name", () => {
            const engineer = new Engineer(name, id, email, gitHub);


            expect(engineer.getGitHub()).toEqual(gitHub);

        });

    })

});