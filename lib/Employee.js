class Employee
{
    constructor(eName, eID, eEmail)
    {
        this.name = eName;
        this.id = eID;
        this.email = eEmail;
    }

    getName()
    {
        return this.name;
    }

    getID()
    {
        return this.id;
    }

    getEmail()
    {
        return this.email;
    }

    getRole()
    {
        return "Employee";
    }

}

module.exports = Employee;