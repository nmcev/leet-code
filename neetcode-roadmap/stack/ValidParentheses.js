/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
  
      const char = s[i];
      if (char === '(') {
        stack.push(')') 
      } else if (char === '{') {
  
        stack.push('}') 
  
      }else if (char === '[') {
  
        stack.push(']') 
  
      } else if (stack.pop()!== char) {
        return false
      }
    }
    return stack.length === 0
  
  }