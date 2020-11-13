// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber = 0) {
        super(name, id, email);

        // const officeguy = parseInt(officeNumber);
        // if (isNaN(officeguy)) {
        //     throw new Error(`Office number ${officeNumber} must be a number`);
        // }

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
// const manager = new Manager("hi", 3, "m@gpd.com", 3);
// const temp = manager.getRole();
// const deb = 0;
