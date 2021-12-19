const fs = require('fs');
const jsdom = require("jsdom");
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

        name.html(employee.getName());
        role.html(employee.getRole());

        div.append(name);
        cardSection.append(div);
    });

    // Print the entire html to the output file location
    fs.writeFileSync('./dist/index.html', window.document.documentElement.innerHTML);
}

module.exports = buildTeam;