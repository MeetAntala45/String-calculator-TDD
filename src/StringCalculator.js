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

    const negativeNumbers = validNumbers.filter((n) => n < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`);
    }

    return validNumbers.reduce((sum, num) => sum + num, 0);
  }

  GetCalledCount() {
    return this.callCount;
  }

  parseDelimitersAndNumbers(inputString) {
    let numbersPart = inputString;
    let delimiters = [",", "\n"];

    if (inputString.startsWith("//[")) {
      const start = inputString.indexOf("[") + 1;
      const end = inputString.indexOf("]");
      const delimiter = inputString.slice(start, end);
      delimiters = [delimiter];
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
