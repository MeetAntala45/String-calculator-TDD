class StringCalculator {
  Add(inputString) {
    if (inputString === "") {
      return 0;
    }

    let numbersPart = inputString;
    let delimiter = /,|\n/;

    if (inputString.startsWith("//")) {
      const delimiterLineEnd = inputString.indexOf("\n");
      delimiter = inputString[2];
      numbersPart = inputString.slice(delimiterLineEnd + 1);
    }

    const numbers = numbersPart.split(new RegExp(delimiter)).map(Number);
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
