/* eslint-disable no-undef */
const { palindrome } = require('../utils/test_tools');

describe('palindrome', () => {
  test('palindrome of a', () => {
    const result = palindrome('a');

    expect(result).toBe('a');
  });

  test('palindrome of react', () => {
    const result = palindrome('react');

    expect(result).toBe('tcaer');
  });

  test('palindrome of relever', () => {
    const result = palindrome('releveler');

    expect(result).toBe('releveler');
  });
});
