const Employee = require('./Employee');

class Engineer extends Employee
{
    constructor(eName, eID, eEmail, eGithub)
    {
        super(eName, eID, eEmail);
        this.github = eGithub;
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

module.exports = Engineer;