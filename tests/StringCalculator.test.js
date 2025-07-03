const StringCalculator = require("../src/StringCalculator");

describe("String Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 when input is an empty string", () => {
    expect(calculator.Add("")).toBe(0);
  });
});
