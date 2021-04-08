const Employee = require('./Employee');

class Intern extends Employee
{
    constructor(eName, eID, eEmail, eSchool)
    {
        this.school = eSchool;

        super(eName, eID, eEmail);
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