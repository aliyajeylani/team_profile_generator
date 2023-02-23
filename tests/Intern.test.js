const Intern = require("../lib/intern");

const name = "Layla";
const id = "36895";
const email = "layla24@gmail.com";
const school = "University of Minnesota";
const role = "Intern";


describe("Intern", () => {
    describe("Initialization", () => {
        it("Create a new intern", () => {
            const intern = new Intern(name, id, email, school);


            expect(intern.getName()).toEqual(name);
        });

        it("Get intern id", () => {
            const intern = new Intern(name, id, email, school);


            expect(intern.getId()).toEqual(id);
        });

        it("Get intern email", () => {
            const intern = new Intern(name, id, email, school);


            expect(intern.getEmail()).toEqual(email);
        });

        it("Get intern role", () => {
            const intern = new Intern(name, id, email, school);


            expect(intern.getRole()).toEqual(role);
        });

        it("Get intern school name", () => {
            const intern = new Intern(name, id, email, school);


            expect(intern.getSchool()).toEqual(school);

        });

    })

});