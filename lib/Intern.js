const Employee = require('./Employee');

class Intern extends Employee
{
    constructor(eName, eID, eEmail, eSchool)
    {
        super(eName, eID, eEmail);
        this.school = eSchool;
    }

    getSchool()
    {
        return this.school;
    }

    getRole()
    {
        return "Intern";
    }
}

module.exports = Intern;