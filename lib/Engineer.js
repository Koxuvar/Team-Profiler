const Employee = require('./Employee');

class Engineer extends Employee
{
    constructor(eName, eID, eEmail, eGithub)
    {
        this.github = eGithub;

        super(eName, eID, eEmail);
    }

    getGithub()
    {
        return this.github;
    }

    getRole()
    {
        return "Engineer";
    }
}

module.exports = Employee;