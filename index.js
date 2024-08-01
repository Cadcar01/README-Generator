// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your application',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter the installation instructions for your application',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information for your application',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter the contribution guidelines for your application',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter the test instructions for your application',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is your application covered under?',
        choices: ['AFL-3.0', 'Apache-2.0', 'Artistic-2.0', 'BSL-1.0', 'BSD', '0BSD',
             'CC', 'CC0-1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0', 'WTFPL','ECL-2.0', 'EPL', 
            'EUPL-1.1', 'AGPL-3.0', 'GPL', 'LGPL', 'ISC','LPPL-1.3c', 'MS-PL', 'MIT',
            'MPL-2.0', 'OSL-3.0', 'PostgreSQL','OFL-1.1', 'NCSA', 'Unlicense', 'Zlib'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
const generateReadme = ({ title, description, install, usage, contribute, test, license, github, email }) => 
`# ${title}

## Description
${description}
    
## Installation
${install}
    
## Usage
${usage}
    
## Contributing
${contribute}
    
## Tests
${test}
    
## License
This application is covered under the ${license} license
    
## Questions
Still have questions? Contact me at the links below
    
[Github](https://github.com/${github})
Email: ${email}`;

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const userInputs = generateReadme(answers)

        fs.writeFile('README.md', userInputs, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!'))
    })
}

// Function call to initialize app
init();
