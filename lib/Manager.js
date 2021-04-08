const Employee = require('./Employee');

class Manager extends Employee
{
    constructor(eName, eID, eEmail, eOfficeNumber)
    {
        this.officeNumber = eOfficeNumber;

        super(eName, eID, eEmail);
    }

    getRole()
    {
        return "Manager";
    }
}

module.exports = Manager;