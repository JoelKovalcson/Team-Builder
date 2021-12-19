const Intern = require("../lib/Intern");

describe('Intern', () => {
    const name = "John Smith";
    const email = "johnsmith@domain.com";
    const id = 1234;
    const school = "Generic University";
    const emp = new Intern(name, email, id, school);
    test('Constructor', () => {
        expect(emp.school).toBe(school);
    })

    test('getRole', () => {
        expect(emp.getRole()).toBe("Intern");
    })

    test('getGithub', () => {
        expect(emp.getSchool()).toBe(school);
    })
})