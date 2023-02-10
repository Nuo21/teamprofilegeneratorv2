const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("Able to create an manager", () => {
  const x = new Manager("Cody", 1, "cody@gmail.com", 21);

  expect(x.getOfficeNumber()).toBe(21);
  expect(x.getRole()).toBe("Manager");
});
