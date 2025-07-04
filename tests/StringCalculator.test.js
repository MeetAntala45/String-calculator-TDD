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

  test("should support custom delimiter defined using // syntax", () => {
    expect(calculator.Add("//;\n1;2")).toBe(3);
  });

  test("should throw an error for negative numbers", () => {
    expect(() => calculator.Add("1,-2")).toThrow("Negatives not allowed: -2");
  });

  test("should ignore numbers greater than 1000", () => {
    expect(calculator.Add("2,1001,6")).toBe(8);
  });

  test("should return how many times Add was called", () => {
    calculator.Add("1,2");
    calculator.Add("3,4");
    expect(calculator.GetCalledCount()).toBe(2);
  });

  test("should support custom delimiter of any length", () => {
    expect(calculator.Add("//[***]\n1***2***3")).toBe(6);
  });

  test("should support multiple single-character delimiters", () => {
    expect(calculator.Add("//[*][%]\n1*2%3")).toBe(6);
  });

  test("should support multiple multi-character delimiters", () => {
    expect(calculator.Add("//[**][%%]\n1**2%%3")).toBe(6);
  });
});
