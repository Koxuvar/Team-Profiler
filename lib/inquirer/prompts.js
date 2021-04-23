const pGeneric = [
    {
        type    : 'list',
        message : 'What kind of employee would you like to enter?',
        name    : 'eSelector',
        choices : [
                    'Engineer',
                    'Intern',
                    'Done'
                    ]
    },
]

const pManager = [
    {
        type    : 'input',
        message : "What is the Project Manager's name?",
        name    : 'eName'
    },
    {
        type    : 'input',
        message : "What is the Project Manager's ID?",
        name    : 'eID'
    },
    {
        type    : 'input',
        message : "What is the Project Manager's email?",
        name    : 'eEmail',
        validate: function (email) 
        {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) 
            {
                return true;
            } 
            else 
            {
                console.log(".  Please enter a valid email")
                return false;
            }
        }
    },
    {
        type    : 'input',
        message : "What is their office number?",
        name    : 'eOfficeNumber'
    },
]

const pEngineer = [
    {
        type    : 'input',
        message : "What is the Engineer's name?",
        name    : 'eName'
    },
    {
        type    : 'input',
        message : "What is the Engineer's ID?",
        name    : 'eID'
    },
    {
        type    : 'input',
        message : "What is the Engineer's email?",
        name    : 'eEmail',
        validate: function (email) 
        {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) 
            {
                return true;
            } 
            else 
            {
                console.log(".  Please enter a valid email")
                return false;
            }
        }
    },
    {
        type    : 'input',
        message : "What is their Github UserName?",
        name    : 'eGithub'
    },
]

const pIntern = [
    {
        type    : 'input',
        message : "What is the Intern's name?",
        name    : 'eName'
    },
    {
        type    : 'input',
        message : "What is the Intern's ID?",
        name    : 'eID'
    },
    {
        type    : 'input',
        message : "What is the Intern's email?",
        name    : 'eEmail',
        validate: function (email) 
        {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) 
            {
                return true;
            } 
            else 
            {
                console.log(".  Please enter a valid email")
                return false;
            }
        }
    },
    {
        type    : 'input',
        message : "What school are they attending?",
        name    : 'eSchool'
    },
]

module.exports ={pGeneric, pManager, pEngineer, pIntern};

