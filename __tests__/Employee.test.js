const Employee = require("../lib/Employee");

describe('Employee', () => {
    const name = "John Smith";
    const email = "johnsmith@domain.com";
    const id = 1234;
    const emp = new Employee(name, email, id);
    test('Constructor', () => {
        expect(emp.name).toBe(name);
        expect(emp.email).toBe(email);
        expect(emp.id).toBe(id);
    })

    test('getName', () => {
        expect(emp.getName()).toBe(name);
    })

    test('getEmail', () => {
        expect(emp.getEmail()).toBe(email);
    })

    test('getID', () => {
        expect(emp.getID()).toBe(id);
    })

    test('getRole', () => {
        expect(emp.getRole()).toBe("Employee");
    })
})