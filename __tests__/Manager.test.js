const Manager = require("../lib/Manager");

describe('Manager', () => {
    const name = "John Smith";
    const email = "johnsmith@domain.com";
    const id = 1234;
    const office = 4321;
    const emp = new Manager(name, email, id, office);
    test('Constructor', () => {
        expect(emp.officeNumber).toBe(office);
    })

    test('getRole', () => {
        expect(emp.getRole()).toBe("Manager");
    })
})