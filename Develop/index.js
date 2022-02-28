// TODO: Include packages needed for this application

const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = () => {

  console.log(`
======================
Create a New README.md
======================
`);

    return inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?',
          validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your title');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub username',
          validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your GitHub link');
              return false;
            }
          }
        },

        {
          type: 'input',
          name: 'license',
          choices: ['MIT', 'ODbl', 'Apache_2.0', 'IPL_1.0'],
          message: 'Add a license to your project',
           validate: licenseInput => {
              if (licenseInput) {
                  return true;
              } else {
                  console.log('Please add a license');
                  return false;
              }
          }
      },

      {
        type: 'input',
        name: 'email',
        message: 'Add an e-mail to your project',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please add an e-mail');
                return false;
            }
        }
    },

      ]);
    };

    function writeFile(fileContent) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'README.md created'
      });
    });
  });
}

    questions()
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })

    .then(pageMD => {
        return writeFile(pageMD);
    })

    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return writeFile();
    })
    
    .catch(err =>{
        console.log(err);
    }); 
    
