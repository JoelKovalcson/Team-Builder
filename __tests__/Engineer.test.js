const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    const name = "John Smith";
    const email = "johnsmith@domain.com";
    const id = 1234;
    const github = "johnsmith";
    const emp = new Engineer(name, email, id, github);
    test('Constructor', () => {
        expect(emp.github).toBe(github);
    })

    test('getRole', () => {
        expect(emp.getRole()).toBe("Engineer");
    })

    test('getGithub', () => {
        expect(emp.getGithub()).toBe(github);
    })
})