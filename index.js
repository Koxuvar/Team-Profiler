/* ------------------ GLOBAL ------------------ */

const inq = require('inquirer');
const fs = require('fs');
const ejs = require('ejs');
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
 * buildTeam
 * takes the array of employees and creates cards for each from template files then adds those to a template html page and writes that to a file in the dist folder
 */
const buildTeam = () =>
{
    let empCards = '';

    arrEmps.forEach((e) =>
        { 
            let htmlContent = fs.readFileSync(__dirname + `/src/${e.getRole()}Card.ejs`, 'utf8');
            let card = ejs.render(htmlContent, e);
            empCards += card + '\n';
        });

    let htmlContent = fs.readFileSync(__dirname + '/src/TemplateIndex.ejs', 'utf8');
    let fullHTML = ejs.render(htmlContent, {cards: empCards});

    if(!fs.existsSync(__dirname + '/dist'))
    {
        fs.mkdirSync(__dirname + '/dist');
    }

    fs.writeFileSync(__dirname + '/dist/team-profile.html', fullHTML, (err) =>
    {
        if(err)
        { 
            throw err
        }
        else
        {
            console.log('File Written Succesfully');
        }
    });
            
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