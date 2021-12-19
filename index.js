const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const questions = require('./utils/questions');
const inquirer = require('inquirer');
const buildTeam = require('./utils/buildTeam');

let employees = [];

const getEmployees = (input) => {
    return inquirer.prompt(questions.employee).then(empInfo  => {
        if(empInfo.addMember == "Add an Intern") {
            employees.push(new Intern(empInfo.employeeName, empInfo.employeeEmail, empInfo.employeeID, empInfo.internSchool));
            return getEmployees();
        }
        else if (empInfo.addMember == "Add an Engineer") {
            employees.push(new Engineer(empInfo.employeeName, empInfo.employeeEmail, empInfo.employeeID, empInfo.engineerGithub));
            return getEmployees();
        }
        else {
            return;
        }
    })
}

const getManager = (input) => {
    return inquirer.prompt(questions.manager).then(input => {
        employees.push(new Manager(input.managerName, input.managerEmail, input.managerID, input.managerOffice));
    });
}

getManager().then(getEmployees).then(() => {
   buildTeam(employees); 
});