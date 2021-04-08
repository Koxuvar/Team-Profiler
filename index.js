const inq = require('inquirer');
const fs = require('fs');
const prompts = require('./lib/inquirer/prompts');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

async function App()
{
    let q = 1;
    while(q !== "done")
    {
        let empToAdd;
        let arrOfEmps;
        if(q == 1)
        {
            let ans = await inq.prompt(prompts);
            const genDetails = [ans.eName, ans.eID, ans.eEmail];
            switch(ans.eSelector)
            {
                case('Manager'):
                    empToAdd = new Manager(...genDetails, ans.eOfficeNumber);
                    break;
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