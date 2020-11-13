// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber = 0){
        super(name, id, email);
        this.officeNumber = officeNumber;

    }

    getRole(){
        return this;
    }
}

// const manager = new Manager("hi", 3, "m@gpd.com", 3);
// const temp = manager.getRole();
// const deb = 0;