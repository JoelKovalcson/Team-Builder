const questions = {
    manager: [
        {
            type: 'input',
            name: 'managerName',
            message: "What is your team manager's name?",
            validate: input => {
                if (input) return true;
                else return "Please enter your team manager's name!";
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is your team manager's ID #?",
            validate: input => {
                if (input && Number.isInteger(input)) return true;
                else return "That ID # is not valid, please try again!";
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is your team manager's email?",
            validate: input => {
                if (input && input.match(/..*@..*[.]..*/)) return true;
                else return "That is not a valid email, please try again!";
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "What is your team manager's office number?",
            validate: input => {
                if (input && Number.isInteger(input)) return true;
                else return "That is not a valid office number!";
            }
        }
    ],
    employee: [
        {
            type: 'list',
            name: 'addMember',
            message: "Pick one of the folllowing:",
            choices: [
                "Add an Intern",
                "Add an Engineer",
                "Finish build team"
            ]
        },
        {
            type: 'input',
            name: 'employeeName',
            message: "What is this employee's name?",
            validate: input => {
                if (input) return true;
                else return "Please enter your employee's name!";
            },
            when: ({addMember}) => {
                addMember != "Finish build team";
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "What is your employee's ID #?",
            validate: input => {
                if (input && Number.isInteger(input)) return true;
                else return "That ID # is not valid, please try again!";
            },
            when: ({addMember}) => {
                addMember != "Finish build team";
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "What is your employee's email?",
            validate: input => {
                if (input && input.match(/..*@..*[.]..*/)) return true;
                else return "That is not a valid email, please try again!";
            },
            when: ({addMember}) => {
                addMember != "Finish build team";
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is your intern's school?",
            validate: input => {
                if (input) return true;
                else return "Please enter your intern's school!";
            },
            when: ({addMember}) => {
                addMember == "Add an Intern"
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is your engineer's GitHub username?",
            validate: input => {
                if (input && input.trim().split(/.*\s.*/).length == 1) return true;
                else return "Please enter a valid GitHub username!";
            },
            when: ({addMember}) => {
                addMember == "Add an Engineer"
            }
        }
    ]
}

module.exports = questions;