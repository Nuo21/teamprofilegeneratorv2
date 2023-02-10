const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("Able to create an engineer and methods return correctly", () => {
  const x = new Engineer("Cody", 1, "cody@gmail.com", "Nuo21");

  expect(x.getGitHub()).toBe("Nuo21");
  expect(x.getRole()).toBe("Engineer");
});
