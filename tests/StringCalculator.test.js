const StringCalculator = require("../src/StringCalculator");

describe("String Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 when input is an empty string", () => {
    expect(calculator.Add("")).toBe(0);
  });

  test("should return the number itself when a single number is provided", () => {
    expect(calculator.Add("5")).toBe(5);
  });

  test("should return sum when two numbers are provided", () => {
    expect(calculator.Add("3,7")).toBe(10);
  });

  test("should return sum when unknown number of numbers are provided", () => {
    expect(calculator.Add("1,2,3,4,5")).toBe(15);
  });

  test("should support newline as a valid delimiter", () => {
    expect(calculator.Add("1\n2,3")).toBe(6);
  });
});
