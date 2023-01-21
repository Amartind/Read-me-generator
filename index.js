const inquire = require("inquirer")
const fs = require('fs')
inquire
    .prompt([
        {
            type:"input",
            message:'What is your GitHub Username',
            name:"username",
        },
        {
            type:"input",
            message:"What is your email address?",
            name:'email',
        },
        {
            type:"input",
            message:"What is your Project Name",
            name:'project',
        },
        {
            type:"input",
            message:"Please write a short description explaining the what, why and how of your project. What was your motivation, what problem does it solve?",
            name:'description',
        },
        {
            type:"input",
            message:"What kind of license should your project have?",
            name:'license',
        },
        {
            type:"input",
            message:"What command should be run to install dependencies?",
            name:'idepend',
        },
        {
            type:"input",
            message:"What command should be run to run tests?",
            name:'rtests',
        },
        {
            type:"input",
            message:"What does the user need to know about using the repo?",
            name:'usage',
        },
        {
            type:"input",
            message:"What does the user need to know about contributing to the repo?",
            name:'contribute',
        },
        {
            type:"input",
            message:"Is there anything you need to list as collaborators or 3rd party assets?",
            name:'credits',
        },
    ])
    .then ( (response) => {console.log(response.username + response.email + response.project + response.description + response.license
         + response.idepend + response.rtests + response.usage + response.contribute);
        // fs.writeFileSync("Read-me.md", JSON.stringify(response, null, '\t'), (err) =>
        // err ? console.log(err) : console.log('Success!'))
        fs.writeFileSync("Read-me.md", `#${JSON.stringify(response.project)} \n`, (err) => {
        err ? console.error(err) : console.log('Data has been appended to the file successfully.')})
        fs.appendFileSync("Read-me.md", `## Description \n ${JSON.stringify(response.description)} \n`, (err) => {
        err ? console.error(err) : console.log('Data has been appended to the file successfully.')})
        fs.appendFileSync("Read-me.md", `## Installation \n ${JSON.stringify(response.idepend)} \n`, (err) => {
        err ? console.error(err) : console.log('Data has been appended to the file successfully.')})
        fs.appendFileSync("Read-me.md", `## Usage \n ${JSON.stringify(response.usage)} \n`, (err) => {
        err ? console.error(err) : console.log('Data has been appended to the file successfully.')})
        fs.appendFileSync("Read-me.md", `## Credits \n ${JSON.stringify(response.credits)} \n`, (err) => {
        err ? console.error(err) : console.log('Data has been appended to the file successfully.')})  
        fs.appendFileSync("Read-me.md", `## License \n ${JSON.stringify(response.license)} \n`, (err) => {
        err ? console.error(err) : console.log('Data has been appended to the file successfully.')})
        fs.appendFileSync("Read-me.md", `## How to contribute \n ${JSON.stringify(response.contribute)} \n`, (err) => {
        err ? console.error(err) : console.log('Data has been appended to the file successfully.')})
        fs.appendFileSync("Read-me.md", `## Tests \n ${JSON.stringify(response.rtests)} \n`, (err) => {
        err ? console.error(err) : console.log('Data has been appended to the file successfully.')})
        fs.appendFileSync("Read-me.md", `## Contact information \n ${JSON.stringify(response.username)} \n`, (err) => {
        err ? console.error(err) : console.log('Data has been appended to the file successfully.')})
        fs.appendFileSync("Read-me.md", `${JSON.stringify(response.email)} \n`, (err) => {
        err ? console.error(err) : console.log('Data has been appended to the file successfully.')})
        });