function generateMarkdown(data) {

  return `# ${data.title}

  ${data.deployed}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Description:

  ${data.description}

  ## Installation:

  ${data.installation}

  ## Usage:

  ${data.usage}

  ## License:

  [![license](https://img.shields.io/badge/license-${data.license}.svg)-brightgreen]

  ${data.license}

  ## Tests:

  ${data.testing}

  ## Contribution:

  ${data.contribution}

  ## Questions:

  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} `;
}

module.exports = generateMarkdown;
