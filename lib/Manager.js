const Employee = require('./Employee');

class Manager extends Employee
{
    constructor(eName, eID, eEmail, eOfficeNumber)
    {
        super(eName, eID, eEmail);
        this.officeNumber = eOfficeNumber;
    }

    getRole()
    {
        return "Manager";
    }
}

module.exports = Manager;