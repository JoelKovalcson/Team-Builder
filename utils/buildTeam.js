const fs = require('fs');
const jsdom = require("jsdom");
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const { JSDOM } = jsdom;

function buildTeam(employees) {

    // Copy the stylesheet
    fs.copyFileSync('./src/styles.css', './dist/styles.css');
    // Read HTML template
    let html = fs.readFileSync('./src/index.html');
    // Setup document object with base html page
    let window = (new JSDOM(html)).window;
    // Setup jQuery
    const $ = require("jquery")(window);

    // Get area to load in employees
    let cardSection = $("#cardSection");
    // Employees will be displayed in the order they were provided by the user
    employees.forEach(employee => {
        let div = $("<div>");
        let name = $("<h2>");
        let role = $("<h3>");
        let list = $("<ul>");
        let id = $("<li>");
        let email = $("<li>");
        let special = $("<li>");

        name.html(employee.getName());
        role.html(employee.getRole());
        id.html(employee.getID());
        email.html(employee.getEmail());
        if (employee instanceof Manager) special.html(employee.getOfficeNumber());
        else if (employee instanceof Intern) special.html(employee.getSchool());
        else if (employee instanceof Engineer) special.html(employee.getGithub());

        list.append(id);
        list.append(email);
        list.append(special);

        div.append(name);
        div.append(role);
        div.append(list);
        cardSection.append(div);
    });

    // Print the entire html to the output file location
    fs.writeFileSync('./dist/index.html', window.document.documentElement.innerHTML);
}

module.exports = buildTeam;