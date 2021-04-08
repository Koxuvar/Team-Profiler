const eGeneric = [
    {
        type    : 'list',
        message : 'What kind of employee would you like to enter?',
        name    : 'eSelector',
        choices : [
                    'Manager',
                    'Engineer',
                    'Intern',
                    
                    ]
    },
    {
        type    : 'input',
        message : "What is the employee's name?",
        name    : 'eName'
    },
    {
        type    : 'input',
        message : "What is the employee's ID?",
        name    : 'eID'
    },
    {
        type    : 'input',
        message : "What is the employee's email?",
        name    : 'eEmail'
    },
    {
        type    : 'input',
        message : "What is their office number?",
        name    : 'eOfficeNumber',
        when    : function(answers)
                    {
                        return answers.eSelector === 'Manager';
                    }
    },
    {
        type    : 'input',
        message : "What is their github user name?",
        name    : 'eGithub',
        when    : function(answers)
                    {
                        return answers.eSelector === 'Engineer';
                    }
    },
    {
        type    : 'input',
        message : "What school do they attend?",
        name    : 'eSchool',
        when    : function(answers)
                    {
                        return answers.eSelector === 'Intern';
                    }
    }
]

const pAgain = [
    {}
]

module.exports = eGeneric;

