class StringCalculator {
  constructor() {
    this.callCount = 0;
  }

  Add(inputString) {
    this.callCount++;

    if (inputString === "") {
      return 0;
    }

    const { numbersPart, delimiters } =
      this.parseDelimitersAndNumbers(inputString);

    const delimiterRegex = new RegExp(
      delimiters.map((d) => escapeRegExp(d)).join("|")
    );

    const numbers = numbersPart.split(delimiterRegex).map(Number);
    const validNumbers = numbers.filter((n) => n <= 1000);

    this.validateNoNegatives(validNumbers);

    return validNumbers.reduce((sum, num) => sum + num, 0);
  }

  GetCalledCount() {
    return this.callCount;
  }

  validateNoNegatives(numbers) {
    const negativeNumbers = numbers.filter((n) => n < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`);
    }
  }

  parseDelimitersAndNumbers(inputString) {
    let numbersPart = inputString;
    let delimiters = [",", "\n"];

    if (inputString.startsWith("//[")) {
      const matches = [...inputString.matchAll(/\[(.+?)\]/g)];
      delimiters = matches.map((match) => match[1]);
      numbersPart = inputString.split("\n")[1];
    } else if (inputString.startsWith("//")) {
      const delimiterEndIndex = inputString.indexOf("\n");
      const delimiterDeclaration = inputString.slice(2, delimiterEndIndex);
      delimiters = [delimiterDeclaration];
      numbersPart = inputString.slice(delimiterEndIndex + 1);
    }
    return { numbersPart, delimiters };
  }
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
module.exports = StringCalculator;
