const StringCalculator = require("../src/StringCalculator");

describe("StringCalculator - Add Method", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  describe("Basic Additions", () => {
    test("returns 0 for empty string", () => {
      expect(calculator.Add("")).toBe(0);
    });

    test("returns the number itself for a single number", () => {
      expect(calculator.Add("5")).toBe(5);
    });

    test("returns the sum of two numbers", () => {
      expect(calculator.Add("3,7")).toBe(10);
    });

    test("returns sum for unknown count of comma-separated numbers", () => {
      expect(calculator.Add("1,2,3,4,5")).toBe(15);
    });
  });

  describe("Delimiters", () => {
    test("supports newline as delimiter", () => {
      expect(calculator.Add("1\n2,3")).toBe(6);
    });

    test("supports custom single-character delimiter", () => {
      expect(calculator.Add("//;\n1;2")).toBe(3);
    });

    test("supports custom delimiter of any length", () => {
      expect(calculator.Add("//[***]\n1***2***3")).toBe(6);
    });

    test("supports multiple single-character delimiters", () => {
      expect(calculator.Add("//[*][%]\n1*2%3")).toBe(6);
    });

    test("supports multiple multi-character delimiters", () => {
      expect(calculator.Add("//[**][%%]\n1**2%%3")).toBe(6);
    });
  });

  describe("Edge Cases", () => {
    test("throws error for negative numbers", () => {
      expect(() => calculator.Add("1,-2")).toThrow("Negatives not allowed: -2");
    });

    test("ignores numbers greater than 1000", () => {
      expect(calculator.Add("2,1001,6")).toBe(8);
    });
  });

  describe("Usage Tracking", () => {
    test("returns how many times Add() was called", () => {
      calculator.Add("1,2");
      calculator.Add("3,4");
      expect(calculator.GetCalledCount()).toBe(2);
    });
  });
});
