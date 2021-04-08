const Engineer = require('../lib/Engineer');

describe("Engineer", () =>
{
    describe("Initialization", () =>
    {
        it("should create an object with a 'name', 'id', 'email', and 'office number' property", () =>
        {
            const obj = new Engineer();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("github" in obj).toEqual(true);
        });

        it("should set properties 'name', 'id', 'email' and 'github' when initialized with values", () =>
        {
            const name  = "Connor";
            const id    = 1;
            const email = "email@email.com";
            const ghub  = "user_name";

            const obj = new Engineer(name, id, email, ghub);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(ghub);
        });
    });

    describe("getGitHub", () =>
    {
        it("should return the value stored to the property github when getGithub is called", () =>
        {
            const name  = "Connor";
            const id    = 1;
            const email = "email@email.com";
            const ghub  = "user_name";

            const obj = new Engineer(name, id, email, ghub);

            expect(obj.getGithub()).toEqual(ghub);
        });
    });

    describe("getRole", () =>
    {
        it("should return 'Engineer' when getRole is called on an instance", () =>
        {
            const obj = new Engineer();

            expect(obj.getRole()).toEqual("Engineer");
        });
    });
});