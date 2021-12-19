const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, office) {
        super(name, email, id);
        this.officeNumber = office;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;