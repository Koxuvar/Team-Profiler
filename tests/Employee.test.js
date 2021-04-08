const Employee = require('../lib/Employee');

describe("Employee", () =>
{
    describe("Initialization", () =>
    {
        it("should return an object containing a 'name', 'email', and 'id' when called with the 'new' keyword", () =>
        {
            const obj = new Employee();

            expect("name" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
        });

        it("should set 'name', 'email', and 'id' when created", () =>
        {
            const name  = "Connor";
            const id    = 1;
            const email = "connor@email.com";

            const obj = new Employee(name, id, email);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);            
            expect(obj.email).toEqual(email);
        });
    });

    describe("getName", () =>
    {
        it("should return 'name' when getName is called", () =>
        {
            const name = "Connor";

            const obj = new Employee(name);

            expect(obj.getName()).toEqual(name);
        });
    });

    describe("getID", () =>
    {
        it("should return 'id' when getID is called", () =>
        {
            const name  = "Connor";
            const id    = 1;

            const obj = new Employee(name, id);

            expect(obj.getID()).toEqual(id);
        });
    });

    describe("getEmail", () =>
    {
        it("should return 'email' when getEmail is called", () =>
        {
            const name  = "Connor";
            const id    = 1;
            const email = "email@email.com";

            const obj = new Employee(name, id, email);

            expect(obj.getEmail()).toEqual(email);
        });
    });

    describe("getRole", () =>
    {
        it("should return 'Employee' when getRole is called", () =>
        {
            const obj = new Employee();

            expect(obj.getRole()).toEqual("Employee");
        });
    });
});