const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("Able to create an intern", () => {
  const x = new Intern("Cody", 1, "cody@gmail.com", "Georgia Tech");

  expect(x.getSchool()).toBe("Georgia Tech");
  expect(x.getRole()).toBe("Intern");
});
