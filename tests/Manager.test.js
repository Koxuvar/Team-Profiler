const { it, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

describe("Manager", () =>
{
    describe("Initialization", () =>
    {
        it("should create an object with a 'name', 'id', 'email', and 'office number' property", () =>
        {
            const obj = new Manager();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("officeNumber" in obj).toEqual(true);
        });

        it("should set properties 'name', 'id', 'email' and 'officeNumber' when initialized with values", () =>
        {
            const name  = "Connor";
            const id    = 1;
            const email = "email@email.com";
            const ofNum = "1234567890";

            const obj = new Manager(name, id, email, ofNum);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(ofNum);
        });
    });

    describe("getRole", () =>
    {
        it("should return 'Manager' when getRole is called on an instance", () =>
        {
            const obj = new Manager();

            expect(obj.getRole()).toEqual("Manager");
        });
    });
});