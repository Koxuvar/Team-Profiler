const inq = require('inquirer');
const fs = require('fs');
const prompts = require('./lib/inquirer/prompts');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

async function App()
{
    let arrOfEmps = [];

    let ans = await inq.prompt(prompts.eManager);
    const manDetails = [ans.eName, ans.eID, ans.eEmail, ans.eOfficeNumber];
    let manToAdd = new Manager(...manDetails);
    arrOfEmps.push(manToAdd);


    let q = 1;
    while(q !== "done")
    {
        let empToAdd;
        if(q == 1)
        {
            let ans = await inq.prompt(prompts.eGeneric);
            const genDetails = [ans.eName, ans.eID, ans.eEmail];
            switch(ans.eSelector)
            {
                case('Engineer'):
                    empToAdd = new Engineer(...genDetails, ans.eGithub);
                    break;
                case('Intern'):
                    empToAdd = new Intern(...genDetails, ans.eSchool);
                    break;
                default:
                    empToAdd = new Employee();
            }

            arrOfEmps.push(empToAdd);

            arrOfEmps.forEach(element => {
                console.log(element);
            });
            
            q = "done";
        }
    }
}

App();