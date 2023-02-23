const Employee = require("../lib/employee");

const name = "Aliya";
const id = "16786";
const email = "aliya.jeylani24@gmail.com";
const role = "Employee";


describe("Employee", () => {
    describe("Initialization", () => {
        it("Create a new employee", () => {
            const employee = new Employee(name, id, email, role);


            expect(employee.getName()).toEqual(name);
        });

        it("Get employee id", () => {
            const employee = new Employee(name, id, email, role);


            expect(employee.getId()).toEqual(id);
        });

        it("Get employee email", () => {
            const employee = new Employee(name, id, email, role);


            expect(employee.getEmail()).toEqual(email);
        });

        it("Get employee role", () => {
            const employee = new Employee(name, id, email, role);


            expect(employee.getRole()).toEqual(role);
        });

    });

})