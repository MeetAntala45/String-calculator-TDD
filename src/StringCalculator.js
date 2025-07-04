class StringCalculator {
  Add(inputString) {
    if (inputString === "") {
      return 0;
    }

    const numbers = inputString.split(",").map(Number);
    if (numbers.length === 1) {
      return parseInt(numbers[0], 10);
    } else if (numbers.length === 2) {
      return parseInt(numbers[0] + numbers[1], 10);
    }

    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
