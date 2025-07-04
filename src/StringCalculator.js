class StringCalculator {
  Add(inputString) {
    if (inputString === "") {
      return 0;
    }

    const numbers = inputString.split(",");
    if (numbers.length === 1) {
      return parseInt(numbers[0], 10);
    }
  }
}

module.exports = StringCalculator;
