const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let responseFromUser = ""; // get value from while loop to know when to quit

const employeeQuestions = {
    employeeName: {
        type: 'input',
        message: 'Who is the employee?',
        name: 'EmployeePrompt'
    },
    employeeId: {
        type: 'input',
        message: 'What is the ID?',
        name: 'IdPrompt'
    },
    employeeEmail: {
        type: 'input',
        message: 'What is the email address?',
        name: 'EmailPrompt'
    }
};

const managerQuestions =
    [
        {
            type: 'input',
            message: 'Who is your manager?',
            name: 'ManagerPrompt'
        },
        {
            type: 'input',
            message: 'What is your manager\'s id?',
            name: 'IdPrompt'
        },
        {
            type: 'input',
            message: 'What is your manager\'s email address?',
            name: 'EmailPrompt'
        },
        {
            type: 'input',
            message: 'What is your manager\'s office number?',
            name: 'OfficePrompt'
        }
    ];

const arrayOfEmployees = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function getInformationEmployee() {

    const askManager = () => {
        return inquirer.prompt
            (
                managerQuestions
            )
            .then
            (
                (response) => {
                    const filename = outputPath;
                    let manager = null;
                    try {
                        manager = new Manager(response.ManagerPrompt, response.IdPrompt, response.EmailPrompt, response.OfficePrompt);
                    }
                    catch (err) {
                        console.log(err.message);
                        askManager();
                        return;
                    }

                    arrayOfEmployees.push(manager);

                    const askType = () => {

                        return inquirer.prompt(
                            [
                                {
                                    type: 'list',
                                    message: 'Choose an employee type or exit',
                                    name: 'EmployeePrompt',
                                    choices: ['Engineer', 'Intern', 'Exit'],
                                }
                            ]
                        )
                            .then((responseEmployeeType) => {

                                const data = responseEmployeeType;
                                responseFromUser = responseEmployeeType.EmployeePrompt;
                                if (responseEmployeeType.EmployeePrompt !== 'Exit') {

                                    switch (responseEmployeeType.EmployeePrompt) {

                                        case "Intern":
                                            inquirer.prompt(
                                                [
                                                    employeeQuestions.employeeName,
                                                    employeeQuestions.employeeId,
                                                    employeeQuestions.employeeEmail,
                                                    {
                                                        type: 'input',
                                                        message: 'What is your school?',
                                                        name: 'SchoolPrompt'
                                                    }

                                                ]
                                            )
                                                .then((responseIntern) => {
                                                    const data = responseIntern;
                                                    let intern = null;
                                                    try {
                                                        intern = new Intern(data.EmployeePrompt, data.IdPrompt, data.EmailPrompt, data.SchoolPrompt);
                                                        commonFunctionsOfType(intern);

                                                    }
                                                    catch (err) {
                                                        console.log(err.message);
                                                        askType();
                                                        return;
                                                    }
                                                }
                                                );
                                            break;
                                        case "Engineer":
                                            inquirer.prompt(
                                                [
                                                    employeeQuestions.employeeName,
                                                    employeeQuestions.employeeId,
                                                    employeeQuestions.employeeEmail,
                                                    {
                                                        type: 'input',
                                                        message: 'What is your Github url?',
                                                        name: 'GithubPrompt'
                                                    }
                                                ]
                                            )
                                                .then((responseEngineer) => {
                                                    const data = responseEngineer;
                                                    let engineer = null;
                                                    try {
                                                        engineer = new Engineer(data.EmployeePrompt, data.IdPrompt, data.EmailPrompt, data.GithubPrompt);
                                                        commonFunctionsOfType(engineer);
                                                    }
                                                    catch (err) {
                                                        console.log(err.message);
                                                        askType();
                                                        return;
                                                    }
                                                }
                                                );
                                            break;
                                        default:
                                            console.log(`Unrecognized employee type: ${responseEmployeeType.EmployeePrompt}`)
                                            break;
                                    }
                                }
                                else {
                                    const renderedHTML = render(arrayOfEmployees);
                                    writeToFile(filename, renderedHTML);
                                }
                            }
                            );
                    }

                    const commonFunctionsOfType = (data) => {
                        arrayOfEmployees.push(data);
                        askType();
                    }

                    askType();
                }
            );
    }

    askManager();
}

function writeToFile(fileName, rendered) {
    fs.writeFile(fileName, rendered, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}


getInformationEmployee();



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
