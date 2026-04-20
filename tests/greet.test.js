const { greet } = require("../utils/greet");

test("returns a greeting message", () => {
  expect(greet("Abrin")).toBe("Hello, Abrin! Welcome to the DevOps project.");
});