/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  const dictionary = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char in dictionary) {
      stack.push(dictionary[char])
    } else {

      const top = stack.pop();
      if (top !== char) {
        return false;
      }

    }
  }

  return stack.length === 0
};
