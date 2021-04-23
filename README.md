![GitHub](https://img.shields.io/github/license/Koxuvar/Team-Profiler)
![GitHub language count](https://img.shields.io/github/languages/count/Koxuvar/Team-Profiler)
![GitHub top language](https://img.shields.io/github/languages/top/Koxuvar/Team-Profiler)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Koxuvar/Team-Profiler/inquirer)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Koxuvar/Team-Profiler/jest)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Koxuvar/Team-Profiler/ejs)

# Team-Profiler

A Node.js based CLI app to build a quick team profile page in html.

## Table of Contents

 - [Description](#Description)
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [Contributing](#Contributing)
 - [Test](#Tests)
 - [Questions](#Questions)
 - [License](#License)

 ## Installation

 ```npm i``` to install all dependencies necessary. Currently using inquirer, ejs, and jest for testing.

 ## Usage

 ```npm start``` to initialize the app. Once running, the app will first ask the user to enter information for the Project Manager. Once the user enters a name, ID, email(validated) and office number, the app will ask the user if they want to add more empoyees. Options currently are Engineer and Intern. The option ```Done``` is also presented to allow users to exit the application. For Engineers, the same prompts will appear as were used for the project manager however, instead of office number the user will be asked to give a github profile name. Similarly, the Intern will ask for what school they are attending instead of the office number or github profile. Once the user is satisfied with their entries, the application will generate a html file in a ```/dist``` folder in the root directory and create that folder if it does not already exist. 

### Video Demo
 [![App Demonstration](https://img.youtube.com/vi/NP820Yo6SW8/0.jpg)](https://www.youtube.com/watch?v=NP820Yo6SW8)

### Results
 ![screnshot of output](public\Images\GeneratedSiteSC-1.png)

 ## Contributing

 Please fork this repo. Current accpted contributions would be to add more employee types. Please generate a new class that inherits from Employee and update existing code accordingly. An additional Card template will need to be added for every new Employee type as well. Submit Pull Requests when ready for review by the dev team.

 ## Tests

 ```npm test``` will run tests on all implemented classes.

 ## Questions

 For questions concerning this app contact me [here](mailto:connor@mmvdesigns.com)
 
 To see more of my work, check out my [Github Profile](http://www.github.com/Koxuvar)

 ## License

 MIT License
 
 Copyright (c) 2021 Connor Sullivan
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
