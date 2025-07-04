class StringCalculator {
  Add(inputString) {
    if (inputString === "") {
      return 0;
    }

    const numbers = inputString.split(",").map(Number);
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
