class StringCalculator {
  Add(inputString) {
    if (inputString === "") {
      return 0;
    }

    let numbersPart = inputString;
    let delimiters = [",", "\n"];

    if (inputString.startsWith("//")) {
      const delimiterEndIndex = inputString.indexOf("\n");
      const delimiterDeclaration = inputString.slice(2, delimiterEndIndex);
      delimiters = [delimiterDeclaration];
      numbersPart = inputString.slice(delimiterEndIndex + 1);
    }

    const delimiterRegex = new RegExp(
      delimiters.map((d) => escapeRegExp(d)).join("|")
    );

    const numbers = numbersPart.split(delimiterRegex).map(Number);
    const negativeNumbers = numbers.filter((n) => n < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`);
    }

    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
module.exports = StringCalculator;
