/* ------------------ GLOBAL ------------------ */

const inq = require('inquirer');
const fs = require('fs');
const prompts = require('./lib/inquirer/prompts');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let arrEmps = [];

/* ------------------ Functions ------------------ */

/**
 * make Employee
 * Takes an int and prompts user questions based on selection for what kind of employee they will add to the arrEmps array 
 * 
 * @param {INT} sel selector for which employee type to add
 * 1 for Manager,
 * 2 for Engineer,
 * 3 for Intern,
 * Anthing else to quit and build team page;
 */
const makeEmployee = (sel) =>
{
    
    if(!isNaN(sel))
    {
        const selArr = [{'type' : 'Manager', 'prompt' : 'pManager', 'special' : 'eOfficeNumber'}, {'type' : 'Engineer', 'prompt' : 'pEngineer', 'special' : 'eGithub'}, {'type' : 'Intern', 'prompt' : 'pIntern', 'special' : 'eSchool'}];
        inq.prompt(prompts[selArr[sel].prompt])
        .then((data) => 
        {
            const eType = eval(selArr[sel].type);
            arrEmps.push(new eType(data.eName, data.eID, data.eEmail, data[selArr[sel].special]));
            getEmployee();
        });
    }
    else
    {
        buildTeam();
    }
}

/**
 * !TBD
 */
const buildTeam = () =>
{
    console.log(arrEmps);
}


/**
 * asks the user to determine whick employee to add next
 */
const getEmployee = () =>
{
    inq.prompt(prompts.pGeneric)
    .then(({eSelector}) => 
    {
        if(eSelector == 'Engineer')
        {
            makeEmployee(1);
        }
        else if(eSelector == 'Intern')
        {
            makeEmployee(2);
        }
        else
        {
            buildTeam();
        }
    });
}

/* ------------------ APP ------------------ */
/**
 * starts the process with making a manager right away
 */
const App = () =>
{
    makeEmployee(0);
}

App();