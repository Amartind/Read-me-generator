const inquire = require("inquirer")
const fs = require('fs')
const readme = (username,email,project,description,license,idepend,rtests,usage,contribute,credits) =>{
    return `# ${project} 
![License](https://img.shields.io/badge/License-${license}-blue)
## Description
    
${description}
    
## Table of Contents (Optional)
    
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#contribute)
- [Tests](#test)
- [Questions](#questions)
    
## Installation (#installation)
    
You will need to have these dependancies installed by running:
${idepend}
    
## Usage (#usage)
    
    
${usage}

To add a screenshot, create an 'assets/images'folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
    '''md
    ![alt text](assets/images/screenshot.png)
    '''
    
## Credits (#credits)
    
${credits}
    
## License (#license)
    
[${license}](https://www.google.com/search?q=what+can+i+do+with+a+${license}+license)
    
    
## Features (#features)
    
If your project has a lot of features, list them here.
    
## How to Contribute (#contribute)

If you are going to contribute please follow these rules:
${contribute}
    
[Contributor Covenant](https://www.contributor-covenant.org/)


## Tests (#test)

Please run this to make use everything works as it should.
${rtests}

## Questions (#questions)

If there are any questions about this feel free to contact me :
https://www.github.com/${username}
${email}
    `
}
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
            type:"list",
            message:"What kind of license should your project have?",
            name:'license',
            choices:["MIT","GNU Public license v3.0","Apache License 2.0","Please refer to to license file"]
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
            message:"Provide instructions for use:",
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
    .then ( (response) => {
        let filledForm = readme(response.username,response.email,response.project,response.description,response.license,response.idepend,response.rtests,response.usage,response.contribute,response.credits);
        fs.writeFile("./Output/README.md", filledForm , err => err?console.log(err) :"")
    });
