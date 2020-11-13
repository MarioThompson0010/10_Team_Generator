// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name = "", id = 0, email = ""){

        let idguy = parseInt(id);
        if (isNaN(idguy))
        {
            throw new Error(`Id ${id} is not a number. Re-enter employee`);
        }

        if (!email.includes("@"))
        {
            throw new Error(`${email} is not a valid email address.  Re-enter the employee`);
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;
