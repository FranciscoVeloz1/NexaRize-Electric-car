# NexaRize Electric Car

<p align="center">
  <img src="./frontend/src/img/logo.jpeg" alt="NexaRize" width="200"/>
</p>

## Overview:

NexaRize is an ambitious open-source project aimed at empowering individuals to build their own electric vehicles using cutting-edge web technologies such as Node.js and React. The project's core philosophy is centered around democratizing the automotive industry, fostering innovation, and promoting sustainable transportation solutions.

## Key Features:

### Modular Design with Node.js:

NexaRize embraces a modular architecture powered by Node.js, allowing contributors to easily extend and customize various aspects of the electric vehicle's functionality. This approach promotes flexibility and adaptability, ensuring that the project can evolve with emerging technologies.

### Responsive User Interface with React:

The project leverages React to create an intuitive and responsive user interface for monitoring and controlling the electric vehicle. Through a web-based dashboard, users can access real-time data, configure settings, and interact with their vehicle remotely.

### Open Source Hardware and Software Integration:

NexaRize not only focuses on the software aspect but also encourages open-source hardware contributions. The goal is to provide a comprehensive platform that covers both the software running the vehicle and the physical components, fostering a collaborative environment for innovation.

### Community-Driven Development:

NexaRize thrives on the power of community collaboration. Developers, engineers, and enthusiasts from around the world can contribute to the project, share ideas, and collectively drive the evolution of electric vehicle technology. This collaborative approach accelerates the pace of innovation and allows for diverse perspectives to shape the project.

## Why Open Source for Electric Vehicles?

### Innovation and Customization:

Open source enables users to innovate and customize their electric vehicles based on their unique needs and preferences. This flexibility promotes a diverse range of designs, features, and improvements that might not be feasible within the confines of a closed, proprietary system.

### Transparency and Security:

Transparency is key to building trust in the safety and security of electric vehicles. By making the source code and hardware designs open, the community can scrutinize and enhance the system, identifying and addressing potential vulnerabilities. This transparency ultimately contributes to a more secure and reliable electric vehicle ecosystem.

### Environmental Impact:

Encouraging open-source electric vehicle projects aligns with the broader goal of reducing the environmental impact of transportation. By making sustainable technology accessible to a wider audience, NexaRize aims to accelerate the adoption of eco-friendly transportation solutions.

## Project Objectives:

### Create a Comprehensive Electric Vehicle Platform:

Develop a feature-rich platform that encompasses both software and hardware components, providing a holistic solution for building and customizing electric vehicles.

### Educate and Empower:

Foster an inclusive community that educates individuals about electric vehicle technology and empowers them to actively participate in the development and improvement of their own transportation solutions.

### Drive Sustainability:

Promote the adoption of sustainable transportation by offering an open and accessible platform for electric vehicles, contributing to the reduction of carbon emissions and environmental impact.

NexaRize is not just a project; it's a movement towards a more sustainable, customizable, and inclusive future for electric vehicles. Join us in building the next generation of transportation, where innovation knows no bounds, and the power is in the hands of the community.

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

Organization of the monorepo, including directories and their purposes.

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

- **Git:** You'll need Git to clone this repository.

- **OS:** This project is compatible with Linux. It has been tested on Ubuntu 20.04 LTS, but it should work on other Linux distributions as well.

## Installation

1. Clone the repository:

```bash
git clone git@github.com:FranciscoVeloz1/NexaRize-Electric-car.git
```

```bash
cd NexaRize-Electric-car
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

## Testing

Explain how to run tests and provide any relevant information about the testing setup.

## Contributing

Thank you for considering contributing to our project! 🚀 To ensure a smooth collaboration, please follow these guidelines:

### Issues

If you encounter any issues or have suggestions, please feel free to submit an issue. When submitting an issue, please include as much detail as possible, including steps to reproduce the problem, expected behavior, and your environment details.

### Pull Requests

We welcome pull requests to help improve the project. Before submitting a pull request, please consider the following:

1. **Fork the repository:** Fork the repository to your own GitHub account.

2. **Create a new branch:** Create a new branch for your changes.

```bash
git checkout -b feat/your-feature-name
```

3. **Make your changes:** Implement your changes, ensuring to follow the project's coding standards.

4. **Test your changes:** Test your changes thoroughly to ensure they work as expected.

5. **Commit your changes:** Make clear and concise commit messages.

```bash
git commit -m "feat: description of your changes"
```

6. **Push your changes:** Push your changes to your forked repository.

```bash
git push origin feat/your-feature-name
```

7. **Create a pull request:** Submit a pull request to the main repository's main branch.

### Coding Standards

Follow the existing coding style and conventions used in the project. If there are specific coding standards or guidelines for your language or framework, adhere to them.

### Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project, you agree to abide by its terms. The code of conduct can be found in the CODE_OF_CONDUCT.md file.

We appreciate your contributions and look forward to working together to improve this project!

Happy coding! 🎉

## License

This project is licensed under the MIT License.
