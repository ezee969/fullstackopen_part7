/* eslint-disable arrow-body-style */
const palindrome = (string) => string.split('').reverse().join('');
const average = (arr) => {
  return arr.length !== 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
};

module.exports = {
  palindrome,
  average,
};
