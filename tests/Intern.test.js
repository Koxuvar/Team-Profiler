const Intern = require('../lib/Intern');

describe("Intern", () =>
{
    describe("Initialization", () =>
    {
        it("should create an object with a 'name', 'id', 'email', and 'office number' property", () =>
        {
            const obj = new Intern();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("school" in obj).toEqual(true);
        });

        it("should set properties 'name', 'id', 'email' and 'github' when initialized with values", () =>
        {
            const name  = "Connor";
            const id    = 1;
            const email = "email@email.com";
            const sch   = "northwestern";

            const obj = new Intern(name, id, email, sch);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(sch);
        });
    });

    describe("getSchool", () =>
    {
        it("should return the value stored to the property school when getSchool is called", () =>
        {
            const name  = "Connor";
            const id    = 1;
            const email = "email@email.com";
            const sch  = "northwestern";

            const obj = new Intern(name, id, email, sch);

            expect(obj.getSchool()).toEqual(sch);
        });
    });

    describe("getRole", () =>
    {
        it("should return 'Intern' when getRole is called on an instance", () =>
        {
            const obj = new Intern();

            expect(obj.getRole()).toEqual("Intern");
        });
    });
});