# Project Name

Brief description of your project.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

Explain the organization of your monorepo, including directories and their purposes.

```plaintext
|-- backend/       # Express backend
|-- frontend/      # React frontend
|-- package.json   # Monorepo package configuration
|-- README.md      # Project documentation
```

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** This project requires Node.js. Download and install it from [nodejs.org](https://nodejs.org/). The project has been tested with Node.js version 18.16.1.

- **npm:** The Node.js installation includes npm, but it's good practice to make sure you have the latest version.

- **Git:** You'll need Git to clone this repository. Download and install it from git-scm.com.

- **OS:** This project is compatible with Linux. It has been tested on Ubuntu 20.04 LTS, but it should work on other Linux distributions as well.

## Installation

1. Clone the repository:

```bash
git clone git@github.com:FranciscoVeloz1/Electric-Car.git
```

```bash
cd electric-car
```

2. Install dependencies:

```bash
npm install
```

## Usage

The next commands works for run the monorepo workspaces

```bash
npm run build:api   # build backend project
npm run build:app   # build frontend project
npm run dev:api     # start backend dev enviroment
npm run dev:app     # start frontend dev enviroment
npm run start       # start the production enviroment
```

## Development
- ## Backend
  Explain how to work on the backend.

- ## Frontend
Explain how to work on the frontend.


## Testing
Explain how to run tests and provide any relevant information about the testing setup.


## Contributing
Provide guidelines for contributing to the project. Include information on how to submit issues, create pull requests, and any coding standards to follow.

## License
This project is licensed under the MIT License.
