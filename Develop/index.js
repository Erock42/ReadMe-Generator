const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs')

const questions = readmeData => {
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
          name: 'testing',
          message: 'Enter testing instructions',
          validate: testInput => {
            if (testInput) {
              return true;
            } else {
              console.log('Please enter testing instructions');
              return false;
            }
          }
        },

        
        {
          type: 'input',
          name: 'description',
          message: 'Enter a description of your application',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter a description');
              return false;
            }
          }
        },

        {
          type: 'input',
          name: 'installation',
          message: 'Enter installation instructions',
          validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('Please enter your GitHub link');
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
          name: 'contribution',
          message: 'Who contributed to this project?',
          validate: contribution => {
              if (contribution) {
                  return true;
              } else {
                  console.log('List contributors for this project');
                  return false;
              }
          }
      },
        {
          type: 'input',
          name: 'deployed',
          message: 'URL link for your project',
          validate: deployed => {
              if (deployed) {
                  return true;
              } else {
                  console.log('Enter a functional link')
                  return false;
              }
          }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How will the application be used?',
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log('Enter description');
                return false;
            }
        }
    },

        {
          type: 'checkbox',
          name: 'license',
          message: 'Add a license to your project',
          choices: ['MIT', 'ODbl', 'Apache_2.0', 'IPL_1.0'],
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

  const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./README.md', fileContent, err => {
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
    
