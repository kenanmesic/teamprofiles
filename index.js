const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee")
const createhtml = require("./src/createhtml");


inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        }
        //   {
        //     type: 'checkbox',
        //     message: 'What languages do you know?',
        //     name: 'stack',
        //     choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
        //   },
        //   {
        //     type: 'list',
        //     message: 'What is your preferred method of communication?',
        //     name: 'contact',
        //     choices: ['email', 'phone', 'telekinesis'],
        //   },
    ])
    .then((answers) => {
        const { name, id, email } = answers;
        const params = new Employee(
            name,
            id,
            email
        )
       // return
        //return
        fs.writeFile("./dist/sample.html", createhtml(params), 'utf-8', (err) => {
           return  err ? console.log(err) : console.log('Success!')
        })
        // Use user feedback for... whatever!!
    })
    // .catch((error) => {
    //     if (error.isTtyError) {
    //         // Prompt couldn't be rendered in the current environment
    //     } else {
    //         // Something else went wrong
    //     }
    // });


// const newEmployee = new employee("alex", 20, "lex@alex.com")

// console.log(newEmployee.getName())

//ask what you want to do? your prompts shoudl then assign things like role iddepartment etc.
//make anew employee?
//if employee who do they work for etc
//if manager what department
// create constructors files for employees and managers and interns
//some html markup generated with teh teams etc