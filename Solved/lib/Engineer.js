// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);

        if (!github.includes("http"))
        {
            console.log(`Your github account should contain an "http"`);
            return null;
        }


        this.github = github;
    }

    getGithub()
    {
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}



module.exports = Engineer;