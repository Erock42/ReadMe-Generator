function generateMarkdown(data) {

  return `# ${data.title}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [About Info](#about)

  ## Description:

  ${data.description}

  ## Installation:

  ${data.installation}

  ## Usage:

  ${data.usage}

  ## License:

  ${data.licensing}

  ## Contribution:

  ${data.contribution}

  ## Tests:

  ${data.testing}

  ## License:

  [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

  ## About Info:

  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} `;
}

module.exports = generateMarkdown;
