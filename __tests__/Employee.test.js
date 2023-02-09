const Employee = require("../lib/Employee");

test("Able to create an employee and all methods return correctly", () => {
  const x = new Employee("Cody", 1, "cody@gmail.com");

  expect(x.getName()).toBe("Cody");
  expect(x.getId()).toBe(1);
  expect(x.getEmail()).toBe("cody@gmail.com");
  expect(x.getRole()).toBe("Employee");
});
